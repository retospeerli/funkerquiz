(() => {
  'use strict';

  const STORAGE_KEY = 'funk_einstiegskartei_progress_v2';
  const PASS_PERCENT = 90;
  const CHAPTER_TITLES = {
    1: 'Kapitel 1 – Grundlagen Funk',
    2: 'Kapitel 2 – Frequenzen, Geräte, Nutzung',
    3: 'Kapitel 3 – Regeln, Gesetze, BAKOM',
    4: 'Kapitel 4 – Funkdisziplin & Verhalten',
    5: 'Kapitel 5 – Praktische Bedienung',
    6: 'Kapitel 6 – PMR, HB3, HB9, Behörden'
  };

  let allQuestions = [];
  let quizQuestions = [];
  let currentIndex = 0;
  let score = 0;
  let locked = false;
  let currentMode = 'learn';
  let currentChapter = null;
  let answerLog = [];
  let progressStore = createEmptyProgress();
  let currentExamIdentity = null;
  let lastExamResult = null;

  const els = {};

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    cacheDom();
    allQuestions = loadQuestions();
    progressStore = loadProgress();
    restoreLearnerName();
    bindEvents();
    renderChapterButtons();
    renderProgressOverview();
    renderStorageHint();

    if (allQuestions.length === 0) {
      els.storageHint.textContent = 'Keine Fragen gefunden. Prüfe data.js und die Script-Reihenfolge.';
      els.storageHint.style.color = '#b91c1c';
    }
  }

  function cacheDom() {
    els.startScreen = document.getElementById('startScreen');
    els.quizScreen = document.getElementById('quizScreen');
    els.resultScreen = document.getElementById('resultScreen');
    els.chapterButtons = document.getElementById('chapterButtons');
    els.examBtn = document.getElementById('examBtn');
    els.progressOverview = document.getElementById('progressOverview');
    els.storageHint = document.getElementById('storageHint');
    els.modeLabel = document.getElementById('modeLabel');
    els.progress = document.getElementById('progress');
    els.chapterLabel = document.getElementById('chapterLabel');
    els.questionId = document.getElementById('questionId');
    els.questionText = document.getElementById('questionText');
    els.answers = document.getElementById('answers');
    els.feedback = document.getElementById('feedback');
    els.nextBtn = document.getElementById('nextBtn');
    els.resultText = document.getElementById('resultText');
    els.resultMeta = document.getElementById('resultMeta');
    els.resultDetails = document.getElementById('resultDetails');
    els.backToMenuBtn = document.getElementById('backToMenuBtn');
    els.firstName = document.getElementById('firstName');
    els.lastName = document.getElementById('lastName');
    els.certificatePanel = document.getElementById('certificatePanel');
    els.certificateBtn = document.getElementById('certificateBtn');
  }

  function bindEvents() {
    els.examBtn.addEventListener('click', startExam);
    els.nextBtn.addEventListener('click', nextQuestion);
    els.backToMenuBtn.addEventListener('click', goToMenu);
    els.certificateBtn.addEventListener('click', exportCertificate);
    els.firstName.addEventListener('input', saveLearnerNameDraft);
    els.lastName.addEventListener('input', saveLearnerNameDraft);
  }

  function loadQuestions() {
    let source = [];
    try {
      if (Array.isArray(questions)) source = questions;
    } catch (err) {}
    if (!source.length && Array.isArray(window.questions)) source = window.questions;
    if (!source.length && Array.isArray(window.HB3_QUESTIONS)) source = window.HB3_QUESTIONS;
    return source.filter(isValidQuestion);
  }

  function isValidQuestion(q) {
    return !!(
      q &&
      typeof q.id === 'string' &&
      typeof q.question === 'string' &&
      Number.isInteger(q.chapter) &&
      q.answers &&
      typeof q.answers.a === 'string' &&
      typeof q.answers.b === 'string' &&
      typeof q.answers.c === 'string' &&
      typeof q.answers.d === 'string' &&
      ['a', 'b', 'c', 'd'].includes(q.correct)
    );
  }

  function renderChapterButtons() {
    els.chapterButtons.innerHTML = '';
    Object.keys(CHAPTER_TITLES).forEach((chapterKey) => {
      const chapter = Number(chapterKey);
      const chapterQuestions = getQuestionsByChapter(chapter);
      const best = progressStore.chapters[chapter] || { bestPercent: 0, completed: 0 };
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'chapter-btn';
      btn.innerHTML = `${CHAPTER_TITLES[chapter]}<small>${chapterQuestions.length} Fragen · bester Lernwert: ${best.bestPercent}%</small>`;
      btn.addEventListener('click', () => startChapter(chapter));
      els.chapterButtons.appendChild(btn);
    });
  }

  function renderProgressOverview() {
    const items = [];
    Object.keys(CHAPTER_TITLES).forEach((chapterKey) => {
      const chapter = Number(chapterKey);
      const data = progressStore.chapters[chapter] || { bestPercent: 0, completed: 0 };
      items.push(`
        <div class="overview-item">
          <strong>${CHAPTER_TITLES[chapter]}</strong><br>
          Lernläufe: ${data.completed} · Bester Wert: ${data.bestPercent}%
        </div>
      `);
    });
    const examBadge = progressStore.exam.passed ? '<span class="badge pass">bestanden</span>' : '<span class="badge fail">nicht bestanden</span>';
    items.push(`
      <div class="overview-item">
        <strong>Prüfungsmodus</strong><br>
        Läufe: ${progressStore.exam.attempts} · Bester Wert: ${progressStore.exam.bestPercent}% · ${examBadge}
      </div>
    `);
    els.progressOverview.innerHTML = items.join('');
  }

  function renderStorageHint() {
    els.storageHint.textContent = hasStorage()
      ? 'Der Lernstand und der Name für die Prüfung werden in diesem Browser lokal gespeichert.'
      : 'Lokaler Speicher ist in diesem Browser nicht verfügbar. Lernstand und Name bleiben nur bis zum Neuladen der Seite erhalten.';
  }

  function startChapter(chapter) {
    const pool = getQuestionsByChapter(chapter);
    startQuiz({ mode: 'learn', chapter, questions: pool });
  }

  function startExam() {
    const firstName = els.firstName.value.trim();
    const lastName = els.lastName.value.trim();
    if (!firstName || !lastName) {
      alert('Bitte gib vor der Prüfung Vor- und Nachname ein.');
      return;
    }
    currentExamIdentity = { firstName, lastName, fullName: `${firstName} ${lastName}` };
    saveLearnerNameDraft();

    const examQuestions = buildExamSet();
    if (!examQuestions.length) {
      alert('Die Prüfungsfragen konnten nicht erstellt werden.');
      return;
    }
    startQuiz({ mode: 'exam', chapter: null, questions: examQuestions });
  }

  function buildExamSet() {
    const selected = [];
    const usedIds = new Set();
    for (let chapter = 1; chapter <= 6; chapter++) {
      const chapterPool = shuffle([...getQuestionsByChapter(chapter)]).slice(0, 4);
      chapterPool.forEach((q) => {
        selected.push(q);
        usedIds.add(q.id);
      });
    }
    const remainingPool = shuffle(allQuestions.filter((q) => !usedIds.has(q.id))).slice(0, 16);
    remainingPool.forEach((q) => selected.push(q));
    return shuffle(selected).slice(0, 40);
  }

  function startQuiz({ mode, chapter, questions }) {
    if (!Array.isArray(questions) || questions.length === 0) {
      alert('Keine Fragen gefunden.');
      return;
    }
    currentMode = mode;
    currentChapter = chapter;
    quizQuestions = [...questions];
    currentIndex = 0;
    score = 0;
    locked = false;
    answerLog = [];
    lastExamResult = null;
    els.certificatePanel.classList.add('hidden');

    els.startScreen.classList.add('hidden');
    els.resultScreen.classList.add('hidden');
    els.quizScreen.classList.remove('hidden');

    els.modeLabel.textContent = currentMode === 'exam' ? 'Prüfungsmodus' : 'Lernmodus';
    els.chapterLabel.textContent = currentMode === 'exam' ? '40 Fragen aus allen 6 Kapiteln' : CHAPTER_TITLES[currentChapter];
    showQuestion();
  }

  function showQuestion() {
    locked = false;
    els.answers.innerHTML = '';
    els.feedback.textContent = '';
    els.nextBtn.classList.add('hidden');

    const q = quizQuestions[currentIndex];
    els.progress.textContent = `Frage ${currentIndex + 1} von ${quizQuestions.length}`;
    els.questionId.textContent = q.id;
    els.questionText.textContent = q.question;

    ['a', 'b', 'c', 'd'].forEach((key) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'answer-btn';
      btn.dataset.key = key;
      btn.textContent = `${key.toUpperCase()}: ${q.answers[key]}`;
      btn.addEventListener('click', () => handleAnswer(key));
      els.answers.appendChild(btn);
    });
  }

  function handleAnswer(selectedKey) {
    if (locked) return;
    locked = true;
    const q = quizQuestions[currentIndex];
    const isCorrect = selectedKey === q.correct;
    const buttons = els.answers.querySelectorAll('.answer-btn');

    answerLog.push({
      id: q.id,
      chapter: q.chapter,
      question: q.question,
      selected: selectedKey,
      correct: q.correct,
      isCorrect
    });

    if (isCorrect) score++;

    if (currentMode === 'learn') {
      buttons.forEach((btn) => {
        btn.disabled = true;
        const key = btn.dataset.key;
        if (key === q.correct) btn.classList.add('correct');
        if (key === selectedKey && key !== q.correct) btn.classList.add('wrong');
      });

      els.feedback.textContent = isCorrect
        ? 'Richtig.'
        : `Falsch. Richtig ist ${q.correct.toUpperCase()}.`;

      window.setTimeout(nextQuestion, 850);
      return;
    }

    buttons.forEach((btn) => {
      btn.disabled = true;
      if (btn.dataset.key === selectedKey) btn.classList.add('selected');
    });

    els.feedback.textContent = 'Antwort gespeichert.';
    els.nextBtn.classList.remove('hidden');
  }

  function nextQuestion() {
    currentIndex += 1;
    if (currentIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResult();
    }
  }

  function showResult() {
    const total = quizQuestions.length;
    const percent = Math.round((score / total) * 1000) / 10;

    els.quizScreen.classList.add('hidden');
    els.resultScreen.classList.remove('hidden');
    els.certificatePanel.classList.add('hidden');

    if (currentMode === 'exam') {
      const passed = percent > PASS_PERCENT;
      els.resultText.textContent = `Prüfungsmodus: ${score} von ${total} richtig (${formatPercent(percent)}).`;
      els.resultMeta.innerHTML = passed
        ? `<span class="badge pass">Prüfung bestanden</span> – bestanden mit über ${PASS_PERCENT}%.`
        : `<span class="badge fail">Prüfung nicht bestanden</span> – bestanden nur mit über ${PASS_PERCENT}%.`;

      lastExamResult = {
        ...currentExamIdentity,
        score,
        total,
        percent,
        passed,
        date: formatDate(new Date())
      };

      updateExamProgress(percent, passed, currentExamIdentity.fullName);
      if (passed) els.certificatePanel.classList.remove('hidden');
    } else {
      els.resultText.textContent = `${CHAPTER_TITLES[currentChapter]}: ${score} von ${total} richtig (${formatPercent(percent)}).`;
      els.resultMeta.textContent = 'Im Lernmodus erhältst du sofort Rückmeldung und kannst jedes Kapitel einzeln trainieren.';
      updateChapterProgress(currentChapter, percent);
    }

    els.resultDetails.innerHTML = buildResultHtml();
    saveProgress();
    renderChapterButtons();
    renderProgressOverview();
  }

  function buildResultHtml() {
    const items = answerLog.map((entry) => {
      const cls = entry.isCorrect ? 'correct' : 'wrong';
      return `
        <div class="result-item ${cls}">
          <strong>${escapeHtml(entry.id)} · Kapitel ${entry.chapter}</strong>
          <div>${escapeHtml(entry.question)}</div>
          <div>Deine Antwort: ${entry.selected.toUpperCase()}</div>
          <div>Richtige Antwort: ${entry.correct.toUpperCase()}</div>
        </div>
      `;
    });
    return `<div class="result-list">${items.join('')}</div>`;
  }

  function exportCertificate() {
    if (!lastExamResult || !lastExamResult.passed) return;

    const popup = window.open('', '_blank', 'width=1200,height=850');
    if (!popup) {
      alert('Bitte erlaube Pop-ups, damit das Zertifikat geöffnet werden kann.');
      return;
    }

    const doc = popup.document;
    const html = buildCertificateHtml(lastExamResult);
    doc.open();
    doc.write(html);
    doc.close();
  }

  function buildCertificateHtml(result) {
    const escapedName = escapeHtml(result.fullName);
    const escapedDate = escapeHtml(result.date);
    const escapedPercent = escapeHtml(formatPercent(result.percent));

    return `<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Zertifikat – ${escapedName}</title>
<style>
  * { box-sizing: border-box; }
  body { margin: 0; font-family: Arial, sans-serif; background: #eaeef3; }
  .toolbar { max-width: 1120px; margin: 18px auto 0; display: flex; gap: 12px; justify-content: flex-end; }
  .toolbar button { padding: 12px 16px; border-radius: 10px; border: 1px solid #c8d0da; background: white; cursor: pointer; font-weight: bold; }
  .sheet-wrap { padding: 18px; }
  .sheet {
    position: relative;
    width: 1120px;
    height: 793px;
    margin: 0 auto;
    background: white;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0,0,0,.12);
  }
  .bg-wave {
    position: absolute; inset: 0;
    background: url('assets/image1.jpeg') center/cover no-repeat;
    opacity: .13;
    filter: grayscale(1);
  }
  .logo-top { position: absolute; left: 58px; top: 48px; width: 220px; }
  .diamond-border { position: absolute; right: 70px; top: 110px; width: 150px; opacity: .95; }
  .diamond-icon { position: absolute; right: 130px; top: 168px; width: 55px; }
  .content {
    position: absolute; inset: 0;
    padding: 84px 78px 70px;
    text-align: center;
    color: #1b1b1b;
  }
  .school { font-size: 22px; font-weight: 700; letter-spacing: .08em; margin-top: 8px; }
  .unit { font-size: 24px; margin-top: 6px; }
  .title { font-size: 31px; margin-top: 118px; letter-spacing: .03em; }
  .subtitle { font-size: 22px; margin-top: 32px; }
  .name { font-size: 54px; font-weight: 700; margin-top: 30px; line-height: 1.1; }
  .line { width: 600px; height: 2px; background: #222; margin: 14px auto 0; }
  .desc { font-size: 21px; margin-top: 30px; }
  .meta { display: flex; justify-content: space-between; gap: 24px; margin-top: 150px; align-items: flex-end; }
  .meta-block { width: 260px; text-align: center; }
  .meta-value { font-size: 22px; font-weight: 700; min-height: 30px; }
  .meta-label { margin-top: 10px; padding-top: 8px; border-top: 1.5px solid #222; font-size: 18px; }
  .result-box { width: 320px; padding: 16px 18px; border: 2px solid #222; border-radius: 14px; background: rgba(255,255,255,.88); }
  .result-box .big { font-size: 42px; font-weight: 700; }
  .result-box .small { margin-top: 6px; font-size: 18px; }
  @media print {
    body { background: white; }
    .toolbar { display: none; }
    .sheet-wrap { padding: 0; }
    .sheet { box-shadow: none; margin: 0; width: 1120px; height: 793px; }
  }
</style>
</head>
<body>
  <div class="toolbar">
    <button onclick="window.print()">Als PDF speichern / drucken</button>
    <button onclick="window.close()">Schliessen</button>
  </div>
  <div class="sheet-wrap">
    <div class="sheet">
      <div class="bg-wave"></div>
      <img class="logo-top" src="assets/image2.png" alt="Logo">
      <img class="diamond-border" src="assets/image4.png" alt="Funksymbol Rahmen">
      <img class="diamond-icon" src="assets/image3.png" alt="Funksymbol">
      <div class="content">
        <div class="school">Funkerschule</div>
        <div class="unit">15</div>
        <div class="title">Abschlusszertifikat</div>
        <div class="subtitle">wird hiermit verliehen an</div>
        <div class="name">${escapedName}</div>
        <div class="line"></div>
        <div class="desc">zur Bescheinigung des erfolgreichen Abschlusses des Online-Kurses „Funktheorie“<br>mit einer erreichten Prüfungsleistung von <strong>${escapedPercent}</strong></div>
        <div class="meta">
          <div class="meta-block">
            <div class="meta-value">Reto Speerli</div>
            <div class="meta-label">Kursleiter</div>
          </div>
          <div class="result-box">
            <div class="big">${escapedPercent}</div>
            <div class="small">Prüfung bestanden</div>
          </div>
          <div class="meta-block">
            <div class="meta-value">${escapedDate}</div>
            <div class="meta-label">Datum</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;
  }

  function goToMenu() {
    els.startScreen.classList.remove('hidden');
    els.quizScreen.classList.add('hidden');
    els.resultScreen.classList.add('hidden');
    els.answers.innerHTML = '';
    els.feedback.textContent = '';
    els.resultText.textContent = '';
    els.resultMeta.textContent = '';
    els.resultDetails.innerHTML = '';
    els.certificatePanel.classList.add('hidden');
  }

  function updateChapterProgress(chapter, percent) {
    const current = progressStore.chapters[chapter] || { bestPercent: 0, completed: 0 };
    current.completed += 1;
    current.bestPercent = Math.max(current.bestPercent, Math.round(percent));
    progressStore.chapters[chapter] = current;
  }

  function updateExamProgress(percent, passed, fullName) {
    progressStore.exam.attempts += 1;
    progressStore.exam.bestPercent = Math.max(progressStore.exam.bestPercent, Math.round(percent));
    if (passed) progressStore.exam.passed = true;
    progressStore.exam.lastName = fullName;
    progressStore.exam.lastPercent = percent;
    progressStore.exam.lastDate = formatDate(new Date());
  }

  function getQuestionsByChapter(chapter) {
    return allQuestions.filter((q) => q.chapter === chapter);
  }

  function hasStorage() {
    try {
      const key = '__test_storage__';
      localStorage.setItem(key, key);
      localStorage.removeItem(key);
      return true;
    } catch (err) {
      return false;
    }
  }

  function loadProgress() {
    if (!hasStorage()) return createEmptyProgress();
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return createEmptyProgress();
      const parsed = JSON.parse(raw);
      return {
        chapters: { ...createEmptyProgress().chapters, ...(parsed.chapters || {}) },
        exam: { ...createEmptyProgress().exam, ...(parsed.exam || {}) },
        learner: { ...createEmptyProgress().learner, ...(parsed.learner || {}) }
      };
    } catch (err) {
      return createEmptyProgress();
    }
  }

  function saveProgress() {
    if (!hasStorage()) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progressStore));
  }

  function createEmptyProgress() {
    return {
      chapters: {
        1: { bestPercent: 0, completed: 0 },
        2: { bestPercent: 0, completed: 0 },
        3: { bestPercent: 0, completed: 0 },
        4: { bestPercent: 0, completed: 0 },
        5: { bestPercent: 0, completed: 0 },
        6: { bestPercent: 0, completed: 0 }
      },
      exam: {
        attempts: 0,
        bestPercent: 0,
        passed: false,
        lastName: '',
        lastPercent: 0,
        lastDate: ''
      },
      learner: {
        firstName: '',
        lastName: ''
      }
    };
  }

  function restoreLearnerName() {
    els.firstName.value = progressStore.learner.firstName || '';
    els.lastName.value = progressStore.learner.lastName || '';
  }

  function saveLearnerNameDraft() {
    progressStore.learner.firstName = els.firstName.value.trim();
    progressStore.learner.lastName = els.lastName.value.trim();
    saveProgress();
  }

  function formatDate(date) {
    return new Intl.DateTimeFormat('de-CH', { day: '2-digit', month: '2-digit', year: 'numeric' }).format(date);
  }

  function formatPercent(percent) {
    return `${String(percent).replace('.', ',')}%`;
  }

  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }
})();
