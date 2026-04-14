(() => {
  'use strict';

  const STORAGE_KEY = 'funk_einstiegskartei_progress_v1';
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

  const els = {};

  document.addEventListener('DOMContentLoaded', init);

  function init() {
    cacheDom();
    allQuestions = loadQuestions();
    progressStore = loadProgress();
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
  }

  function bindEvents() {
    els.examBtn.addEventListener('click', startExam);
    els.nextBtn.addEventListener('click', nextQuestion);
    els.backToMenuBtn.addEventListener('click', goToMenu);
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
      ? 'Der Lernstand wird in diesem Browser lokal gespeichert.'
      : 'Lokaler Speicher ist in diesem Browser nicht verfügbar. Der Lernstand wird nur bis zum Neuladen der Seite gehalten.';
  }

  function startChapter(chapter) {
    const pool = getQuestionsByChapter(chapter);
    startQuiz({ mode: 'learn', chapter, questions: pool });
  }

  function startExam() {
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
    const percent = Math.round((score / total) * 100);

    els.quizScreen.classList.add('hidden');
    els.resultScreen.classList.remove('hidden');

    if (currentMode === 'exam') {
      const passed = percent === 100;
      els.resultText.textContent = `Prüfungsmodus: ${score} von ${total} richtig (${percent}%).`;
      els.resultMeta.innerHTML = passed
        ? '<span class="badge pass">Prüfung bestanden</span> – bestanden nur mit 100%.'
        : '<span class="badge fail">Prüfung nicht bestanden</span> – bestanden nur mit 100%.';
      updateExamProgress(percent, passed);
    } else {
      els.resultText.textContent = `${CHAPTER_TITLES[currentChapter]}: ${score} von ${total} richtig (${percent}%).`;
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

  function goToMenu() {
    els.startScreen.classList.remove('hidden');
    els.quizScreen.classList.add('hidden');
    els.resultScreen.classList.add('hidden');
    els.answers.innerHTML = '';
    els.feedback.textContent = '';
    els.resultText.textContent = '';
    els.resultMeta.textContent = '';
    els.resultDetails.innerHTML = '';
  }

  function updateChapterProgress(chapter, percent) {
    const current = progressStore.chapters[chapter] || { bestPercent: 0, completed: 0 };
    current.completed += 1;
    current.bestPercent = Math.max(current.bestPercent, percent);
    progressStore.chapters[chapter] = current;
  }

  function updateExamProgress(percent, passed) {
    progressStore.exam.attempts += 1;
    progressStore.exam.bestPercent = Math.max(progressStore.exam.bestPercent, percent);
    if (passed) progressStore.exam.passed = true;
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
        exam: { ...createEmptyProgress().exam, ...(parsed.exam || {}) }
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
      exam: { bestPercent: 0, attempts: 0, passed: false }
    };
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
