const questions = [
  {
    "id": "EF_G_001",
    "chapter": 1,
    "question": "Was versteht man unter Funkkommunikation?",
    "answers": {
      "a": "Die Übertragung von Informationen mit Funkwellen ohne Kabel",
      "b": "Die Übertragung von Informationen mit Lautsprechern ohne Kabel",
      "c": "Die Übertragung von Daten mit Lichtsignalen ohne Kabel",
      "d": "Die Übertragung von Sprache mit Computern ohne Kabel"
    },
    "correct": "a"
  },
  {
    "id": "EF_G_002",
    "chapter": 1,
    "question": "Welche physikalische Grundlage hat Funk?",
    "answers": {
      "a": "Schallwellen in der Luft zwischen zwei Geräten",
      "b": "Elektromagnetische Wellen zwischen Sender und Empfänger",
      "c": "Mechanische Schwingungen in Metallteilen von Geräten",
      "d": "Elektrischer Stromfluss in verbundenen Kabeln"
    },
    "correct": "b"
  },
  {
    "id": "EF_G_003",
    "chapter": 1,
    "question": "Welche drei Elemente sind für eine einfache Funkverbindung nötig?",
    "answers": {
      "a": "Sender, Empfänger und festgelegte Frequenz",
      "b": "Sender, Router und gespeicherte Kontakte",
      "c": "Empfänger, Bildschirm und Stromkabel",
      "d": "Antenne, Lautsprecher und Internetzugang"
    },
    "correct": "a"
  },
  {
    "id": "EF_G_004",
    "chapter": 1,
    "question": "Was beschreibt eine Frequenz im Funk?",
    "answers": {
      "a": "Die elektrische Spannung im Funkgerät",
      "b": "Die Lautstärke eines übertragenen Signals",
      "c": "Die Anzahl Schwingungen einer Welle pro Sekunde",
      "d": "Die Entfernung zwischen zwei Funkgeräten"
    },
    "correct": "c"
  },
  {
    "id": "EF_G_005",
    "chapter": 1,
    "question": "Warum werden Frequenzen aufgeteilt und zugewiesen?",
    "answers": {
      "a": "Damit verschiedene Funkdienste sich nicht gegenseitig stören",
      "b": "Damit alle Funkgeräte denselben Kanal verwenden",
      "c": "Damit Funk nur innerhalb von Gebäuden funktioniert",
      "d": "Damit Funkgeräte mit kleiner Batterie auskommen"
    },
    "correct": "a"
  },
  {
    "id": "EF_G_006",
    "chapter": 1,
    "question": "Welche der folgenden Anwendungen gehört zum Funk?",
    "answers": {
      "a": "USB-Verbindung zwischen zwei Computern",
      "b": "WLAN-Verbindung in einem Schulzimmer",
      "c": "HDMI-Verbindung zwischen Bildschirm und Laptop",
      "d": "Netzwerkkabel zwischen Router und Computer"
    },
    "correct": "b"
  },
  {
    "id": "EF_G_007",
    "chapter": 1,
    "question": "Welche Aussage zu WLAN ist korrekt?",
    "answers": {
      "a": "WLAN ist eine drahtlose Form von Funkkommunikation",
      "b": "WLAN funktioniert nur mit einer Glasfaserleitung",
      "c": "WLAN ist nur ein Name für Kabelinternet im Haus",
      "d": "WLAN benötigt keine Frequenzen für die Übertragung"
    },
    "correct": "a"
  },
  {
    "id": "EF_G_008",
    "chapter": 1,
    "question": "Welche Aufgabe hat ein Sender im Funk?",
    "answers": {
      "a": "Er speichert alle Gespräche auf dem Gerät",
      "b": "Er wandelt Informationen in Funksignale um",
      "c": "Er misst die Reichweite einer Verbindung",
      "d": "Er zeigt die Lautstärke auf dem Display an"
    },
    "correct": "b"
  },
  {
    "id": "EF_G_009",
    "chapter": 1,
    "question": "Welche Aufgabe hat ein Empfänger im Funk?",
    "answers": {
      "a": "Er erzeugt neue Funksignale für andere Geräte",
      "b": "Er lädt die Batterie des angeschlossenen Geräts",
      "c": "Er wandelt empfangene Signale wieder in Informationen um",
      "d": "Er verstärkt die Stimme direkt im Mikrofon"
    },
    "correct": "c"
  },
  {
    "id": "EF_G_010",
    "chapter": 1,
    "question": "Was geschieht, wenn zwei Sender gleichzeitig auf derselben Frequenz senden?",
    "answers": {
      "a": "Die Signale werden nacheinander automatisch geordnet",
      "b": "Die Verständlichkeit kann durch Überlagerung verloren gehen",
      "c": "Die stärkere Station erhält immer automatisch Vorrang",
      "d": "Die Geräte wechseln selbstständig auf einen neuen Kanal"
    },
    "correct": "b"
  },
  {
    "id": "EF_G_011",
    "chapter": 1,
    "question": "Warum gilt Funk als begrenzte Ressource?",
    "answers": {
      "a": "Weil Funkgeräte nur kurz mit Batterien laufen",
      "b": "Weil es nur eine begrenzte Zahl nutzbarer Frequenzen gibt",
      "c": "Weil Funk in der Schweiz nur am Tag erlaubt ist",
      "d": "Weil alle Geräte auf dieselbe Leistung begrenzt sind"
    },
    "correct": "b"
  },
  {
    "id": "EF_G_012",
    "chapter": 1,
    "question": "Was unterscheidet Funk von kabelgebundener Kommunikation?",
    "answers": {
      "a": "Funk braucht keine feste Leitung zwischen den Geräten",
      "b": "Funk ist immer schneller als eine Kabelverbindung",
      "c": "Funk kann nur im Freien und nicht innen genutzt werden",
      "d": "Funk ist automatisch sicherer als jede Kabelverbindung"
    },
    "correct": "a"
  },
  {
    "id": "EF_G_013",
    "chapter": 1,
    "question": "Was bedeutet Reichweite im Funk?",
    "answers": {
      "a": "Die Dauer einer einzelnen Funkmeldung im Gerät",
      "b": "Die Zahl der Kanäle in einem Funknetz",
      "c": "Die maximale Distanz für verständlichen Empfang",
      "d": "Die Stärke der Anzeige auf dem Display"
    },
    "correct": "c"
  },
  {
    "id": "EF_G_014",
    "chapter": 1,
    "question": "Welche Faktoren beeinflussen die Reichweite eines Funkgeräts besonders?",
    "answers": {
      "a": "Farbe des Geräts und Form des Lautsprechers",
      "b": "Leistung, Antenne und Hindernisse in der Umgebung",
      "c": "Preis des Geräts und Zahl der Tasten",
      "d": "Alter des Akkus und Grösse des Displays"
    },
    "correct": "b"
  },
  {
    "id": "EF_G_015",
    "chapter": 1,
    "question": "Was versteht man unter einem Kanal bei einem Funkgerät?",
    "answers": {
      "a": "Eine gespeicherte Sprachaufnahme im Gerät",
      "b": "Eine Lautstärkeeinstellung für den Empfang",
      "c": "Eine fest eingestellte Frequenz oder Frequenzkombination",
      "d": "Eine Anzeige für den Ladezustand der Batterie"
    },
    "correct": "c"
  },
  {
    "id": "EF_G_016",
    "chapter": 1,
    "question": "Warum sind Funkgeräte auf bestimmte Frequenzen eingestellt?",
    "answers": {
      "a": "Damit sie nur in erlaubten Bereichen senden und empfangen",
      "b": "Damit sie mehr elektrische Energie verbrauchen können",
      "c": "Damit jedes Gerät eine eigene Sprache verwendet",
      "d": "Damit sie unabhängig von gesetzlichen Regeln arbeiten"
    },
    "correct": "a"
  },
  {
    "id": "EF_G_017",
    "chapter": 1,
    "question": "Was beschreibt ein Funknetz?",
    "answers": {
      "a": "Eine Gruppe von Geräten mit gemeinsamer Funkverbindung",
      "b": "Eine Sammlung von Computern in einem Schulhaus",
      "c": "Eine Reihe von Kabeln zwischen mehreren Räumen",
      "d": "Eine Liste mit Telefonnummern im Funkgerät"
    },
    "correct": "a"
  },
  {
    "id": "EF_G_018",
    "chapter": 1,
    "question": "Was bedeutet Simplexbetrieb im Funk?",
    "answers": {
      "a": "Senden und Empfangen gleichzeitig auf zwei Wegen",
      "b": "Senden und Empfangen nacheinander auf demselben Weg",
      "c": "Verbindung über Satelliten und Glasfaserkabel zugleich",
      "d": "Nutzung von mehreren Kanälen im Wechselbetrieb"
    },
    "correct": "b"
  },
  {
    "id": "EF_G_019",
    "chapter": 1,
    "question": "Warum ist Funk in Notfällen besonders wichtig?",
    "answers": {
      "a": "Weil Funk auch ohne vorhandene Kabel funktionieren kann",
      "b": "Weil Funk in Notfällen keine Batterien mehr benötigt",
      "c": "Weil Funkgeräte in Notfällen automatisch verschlüsseln",
      "d": "Weil Funk nur von Rettungsdiensten empfangen wird"
    },
    "correct": "a"
  },
  {
    "id": "EF_G_020",
    "chapter": 1,
    "question": "Warum sind klare Regeln im Funk notwendig?",
    "answers": {
      "a": "Damit Geräte mit gleicher Lautstärke arbeiten müssen",
      "b": "Damit die Kommunikation sicher und störungsfrei bleibt",
      "c": "Damit Funk nur in grossen Städten eingesetzt wird",
      "d": "Damit jede Meldung besonders lang gesprochen werden kann"
    },
    "correct": "b"
  },
  {
    "id": "EF_F_001",
    "chapter": 2,
    "question": "Welche Funkgeräte dürfen in der Schweiz ohne Prüfung genutzt werden?",
    "answers": {
      "a": "Amateurfunkgeräte mit selbstgebauter Antenne",
      "b": "PMR-Funkgeräte auf den dafür vorgesehenen Kanälen",
      "c": "Flugfunkgeräte mit voreingestellten Kanälen",
      "d": "Behördenfunkgeräte mit reduzierter Leistung"
    },
    "correct": "b"
  },
  {
    "id": "EF_F_002",
    "chapter": 2,
    "question": "Was bedeutet PMR im Alltag der Funknutzung?",
    "answers": {
      "a": "Ein frei nutzbarer Funkdienst mit festen Regeln",
      "b": "Ein Prüfungsdienst für lizenzierte Funkamateure",
      "c": "Ein Polizeifunksystem für den Notfalleinsatz",
      "d": "Ein Radarsystem für den Flugverkehr"
    },
    "correct": "a"
  },
  {
    "id": "EF_F_003",
    "chapter": 2,
    "question": "Welche maximale Sendeleistung gilt für PMR446 in der Schweiz?",
    "answers": {
      "a": "0.5 Watt abgestrahlte Leistung auf den vorgesehenen Kanälen",
      "b": "5 Watt Senderleistung auf frei wählbaren Frequenzen",
      "c": "25 Watt abgestrahlte Leistung auf allen PMR-Kanälen",
      "d": "100 Watt Senderleistung mit externer Antenne"
    },
    "correct": "a"
  },
  {
    "id": "EF_F_004",
    "chapter": 2,
    "question": "Welche Aussage zur Antenne bei PMR-Geräten ist richtig?",
    "answers": {
      "a": "Die Antenne darf nach Bedarf beliebig gewechselt werden",
      "b": "Die Antenne darf nur bei Geräten über 5 Watt gewechselt werden",
      "c": "Die Antenne ist bei klassischen PMR-Geräten nicht frei austauschbar",
      "d": "Die Antenne darf nur im Freien gegen eine Richtantenne getauscht werden"
    },
    "correct": "c"
  },
  {
    "id": "EF_F_005",
    "chapter": 2,
    "question": "Warum sind PMR-Geräte technisch eingeschränkt?",
    "answers": {
      "a": "Damit sie ohne Prüfung gemeinsam genutzt werden können",
      "b": "Damit sie auf Kurzwelle besonders weit senden können",
      "c": "Damit sie verschlüsselte Behördenkanäle erreichen",
      "d": "Damit sie nur innerhalb eines Gebäudes arbeiten"
    },
    "correct": "a"
  },
  {
    "id": "EF_F_006",
    "chapter": 2,
    "question": "Was versteht man unter lizenzpflichtigem Funk?",
    "answers": {
      "a": "Funk, der nur mit Internetzugang verwendet werden kann",
      "b": "Funk, für den eine Prüfung und Bewilligung nötig sind",
      "c": "Funk, der nur mit sehr kleinen Geräten möglich ist",
      "d": "Funk, der nur über Satelliten übertragen wird"
    },
    "correct": "b"
  },
  {
    "id": "EF_F_007",
    "chapter": 2,
    "question": "Welches Beispiel gehört zum lizenzpflichtigen Funk?",
    "answers": {
      "a": "PMR auf den freigegebenen Kanälen für alle",
      "b": "Bluetooth zwischen Kopfhörer und Telefon",
      "c": "Amateurfunk mit HB3- oder HB9-Bewilligung",
      "d": "WLAN zwischen Tablet und Router im Haus"
    },
    "correct": "c"
  },
  {
    "id": "EF_F_008",
    "chapter": 2,
    "question": "Warum darf nicht jede Person alle Frequenzen benutzen?",
    "answers": {
      "a": "Weil Frequenzen aufgeteilt und bestimmten Diensten zugewiesen sind",
      "b": "Weil Funkgeräte sonst automatisch die Sprache wechseln",
      "c": "Weil alle Geräte nur mit derselben Leistung senden dürfen",
      "d": "Weil Funk im privaten Bereich nur lokal arbeiten soll"
    },
    "correct": "a"
  },
  {
    "id": "EF_F_009",
    "chapter": 2,
    "question": "Was beschreibt ein Frequenzband?",
    "answers": {
      "a": "Einen Bereich benachbarter Frequenzen mit bestimmter Nutzung",
      "b": "Eine Lautstärkeeinstellung für starke und schwache Signale",
      "c": "Eine Gruppe von Antennen mit gleicher Bauform",
      "d": "Einen Batteriesatz für tragbare Funkgeräte"
    },
    "correct": "a"
  },
  {
    "id": "EF_F_010",
    "chapter": 2,
    "question": "Warum sind Frequenzen von Polizei, Feuerwehr und Rettung besonders geschützt?",
    "answers": {
      "a": "Weil diese Dienste störungsfreie Verbindungen für Einsätze brauchen",
      "b": "Weil diese Geräte immer die grösste Reichweite besitzen",
      "c": "Weil diese Netze nur bei gutem Wetter arbeiten",
      "d": "Weil diese Frequenzen nur in der Nacht benutzt werden"
    },
    "correct": "a"
  },
  {
    "id": "EF_F_011",
    "chapter": 2,
    "question": "Was kann bei unerlaubter Nutzung geschützter Frequenzen passieren?",
    "answers": {
      "a": "Die Frequenz wird vom Gerät automatisch blockiert",
      "b": "Es kann zu Störungen und rechtlichen Folgen kommen",
      "c": "Das Funkgerät wechselt selbstständig auf PMR zurück",
      "d": "Die Reichweite des Geräts wird sofort kleiner"
    },
    "correct": "b"
  },
  {
    "id": "EF_F_012",
    "chapter": 2,
    "question": "Was ist der Unterschied zwischen VHF und UHF?",
    "answers": {
      "a": "VHF und UHF bezeichnen unterschiedliche Frequenzbereiche",
      "b": "VHF und UHF unterscheiden nur die Farbe des Geräts",
      "c": "VHF und UHF sind zwei Namen für denselben Bereich",
      "d": "VHF und UHF beschreiben nur die Form der Antenne"
    },
    "correct": "a"
  },
  {
    "id": "EF_F_013",
    "chapter": 2,
    "question": "Welches Beispiel passt gut zum VHF-Bereich?",
    "answers": {
      "a": "UKW-Rundfunk im Bereich von 87.5 bis 108 MHz",
      "b": "WLAN im Bereich um 2.4 GHz im Schulhaus",
      "c": "Bluetooth zwischen Maus und Laptop auf dem Tisch",
      "d": "Satellitenfunk weit oberhalb von 10 GHz"
    },
    "correct": "a"
  },
  {
    "id": "EF_F_014",
    "chapter": 2,
    "question": "Warum kann eine hohe Sendeleistung problematisch sein?",
    "answers": {
      "a": "Weil sie andere Nutzer über grössere Distanzen stören kann",
      "b": "Weil sie den Lautsprecher des Geräts sofort beschädigt",
      "c": "Weil sie die Sprache im Mikrofon automatisch verkürzt",
      "d": "Weil sie nur im Ausland gesetzlich zugelassen ist"
    },
    "correct": "a"
  },
  {
    "id": "EF_F_015",
    "chapter": 2,
    "question": "Was bedeutet es, wenn ein Funkgerät konform ist?",
    "answers": {
      "a": "Es entspricht den technischen und rechtlichen Vorschriften",
      "b": "Es hat besonders viele Kanäle und eine lange Antenne",
      "c": "Es arbeitet nur mit Batterien derselben Marke",
      "d": "Es besitzt einen besonders lauten Lautsprecher"
    },
    "correct": "a"
  },
  {
    "id": "EF_F_016",
    "chapter": 2,
    "question": "Wer ist beim Direktimport eines Funkgeräts aus dem Ausland verantwortlich?",
    "answers": {
      "a": "Der Käufer gilt rechtlich als Importeur des Geräts",
      "b": "Der Paketdienst übernimmt die technische Verantwortung",
      "c": "Der Hersteller bleibt immer allein verantwortlich",
      "d": "Die Gemeinde kontrolliert jedes importierte Gerät"
    },
    "correct": "a"
  },
  {
    "id": "EF_F_017",
    "chapter": 2,
    "question": "Warum werden Funkgeräte normiert und geprüft?",
    "answers": {
      "a": "Damit sie regelkonform arbeiten und andere nicht stören",
      "b": "Damit sie alle gleich aussehen und gleich schwer sind",
      "c": "Damit sie nur im professionellen Bereich genutzt werden",
      "d": "Damit sie immer mit derselben Batterie laufen"
    },
    "correct": "a"
  },
  {
    "id": "EF_F_018",
    "chapter": 2,
    "question": "Was versteht man unter einer Funkstörung?",
    "answers": {
      "a": "Eine Beeinträchtigung durch unerwünschte oder fremde Signale",
      "b": "Eine absichtlich kurze Pause in einem laufenden Gespräch",
      "c": "Eine automatisch reduzierte Lautstärke im Empfang",
      "d": "Eine normale Meldung mit schwacher Batterie"
    },
    "correct": "a"
  },
  {
    "id": "EF_F_019",
    "chapter": 2,
    "question": "Wie lassen sich Funkstörungen oft vermeiden?",
    "answers": {
      "a": "Durch korrekte Frequenzwahl, passende Leistung und Disziplin",
      "b": "Durch ständiges Wechseln des Kanals ohne Absprache",
      "c": "Durch besonders lautes Sprechen in das Mikrofon",
      "d": "Durch möglichst lange Gespräche auf derselben Frequenz"
    },
    "correct": "a"
  },
  {
    "id": "EF_F_020",
    "chapter": 2,
    "question": "Warum ist es wichtig, zugelassene Funkgeräte zu verwenden?",
    "answers": {
      "a": "Weil sie die gesetzlichen Vorgaben einhalten und andere weniger stören",
      "b": "Weil sie grundsätzlich weiter senden als alle anderen Geräte",
      "c": "Weil sie immer billiger sind als nicht zugelassene Geräte",
      "d": "Weil sie ohne Batterie und ohne Antenne funktionieren"
    },
    "correct": "a"
  },
  {
    "id": "EF_R_001",
    "chapter": 3,
    "question": "Welche Aufgabe hat das BAKOM?",
    "answers": {
      "a": "Das BAKOM stellt Funkgeräte für die Schweiz her",
      "b": "Das BAKOM teilt Frequenzen zu und kontrolliert deren Nutzung",
      "c": "Das BAKOM betreibt eigene Funknetze für Behörden",
      "d": "Das BAKOM verkauft Funkgeräte an Privatpersonen"
    },
    "correct": "b"
  },
  {
    "id": "EF_R_002",
    "chapter": 3,
    "question": "Warum wird Funk staatlich geregelt?",
    "answers": {
      "a": "Damit Funkgeräte in der Schweiz einheitlich gebaut werden",
      "b": "Damit wichtige Dienste wie Polizei und Flugverkehr störungsfrei arbeiten",
      "c": "Damit Funkgeräte nur von Fachpersonen genutzt werden dürfen",
      "d": "Damit Funkverbindungen möglichst kurze Reichweiten haben"
    },
    "correct": "b"
  },
  {
    "id": "EF_R_003",
    "chapter": 3,
    "question": "Wer teilt Frequenzen in der Schweiz zu?",
    "answers": {
      "a": "Die Polizei organisiert die Nutzung der Funkfrequenzen",
      "b": "Das BAKOM ist für die Zuteilung der Frequenzen zuständig",
      "c": "Private Anbieter bestimmen die Nutzung der Frequenzen",
      "d": "Die Gemeinden verwalten die Funkfrequenzen lokal"
    },
    "correct": "b"
  },
  {
    "id": "EF_R_004",
    "chapter": 3,
    "question": "Was ist eine Funkbewilligung?",
    "answers": {
      "a": "Eine technische Beschreibung eines bestimmten Funkgeräts",
      "b": "Eine gesetzliche Erlaubnis zur Nutzung von Funkfrequenzen",
      "c": "Eine Software zur Steuerung eines Funkgeräts",
      "d": "Eine Einstellung zur Anpassung der Sendeleistung"
    },
    "correct": "b"
  },
  {
    "id": "EF_R_005",
    "chapter": 3,
    "question": "Welche Frequenzen sind für Privatpersonen gesperrt?",
    "answers": {
      "a": "Frequenzen im Amateurfunkbereich für lizenzierte Nutzer",
      "b": "Frequenzen im PMR-Bereich für frei nutzbare Geräte",
      "c": "Frequenzen von Polizei, Feuerwehr und Rettungsdiensten",
      "d": "Frequenzen im WLAN-Bereich für drahtlose Netzwerke"
    },
    "correct": "c"
  },
  {
    "id": "EF_R_006",
    "chapter": 3,
    "question": "Warum sind diese Frequenzen besonders geschützt?",
    "answers": {
      "a": "Weil sie technisch empfindlicher sind als andere Frequenzen",
      "b": "Weil sie für Einsätze und Notfälle zwingend benötigt werden",
      "c": "Weil sie nur in bestimmten Regionen genutzt werden dürfen",
      "d": "Weil sie eine besonders grosse Reichweite ermöglichen"
    },
    "correct": "b"
  },
  {
    "id": "EF_R_007",
    "chapter": 3,
    "question": "Welche Aussage zum Flugfunk ist korrekt?",
    "answers": {
      "a": "Flugfunk kann mit geeigneten Geräten frei genutzt werden",
      "b": "Flugfunk ist nur für Piloten und Flugverkehrsdienste bestimmt",
      "c": "Flugfunk wird ausschliesslich am Boden verwendet",
      "d": "Flugfunk funktioniert unabhängig von festen Frequenzen"
    },
    "correct": "b"
  },
  {
    "id": "EF_R_008",
    "chapter": 3,
    "question": "Welche Mitteilungen sind im Amateurfunk erlaubt?",
    "answers": {
      "a": "Technische Informationen und persönliche Gespräche zwischen Funkamateuren",
      "b": "Geschäftsabschlüsse und Vertragsabsprachen zwischen Teilnehmern",
      "c": "Werbung für Produkte und Dienstleistungen im Funkverkehr",
      "d": "Verschlüsselte Nachrichten zwischen unbekannten Teilnehmern"
    },
    "correct": "a"
  },
  {
    "id": "EF_R_009",
    "chapter": 3,
    "question": "Welche Mitteilungen sind im Amateurfunk verboten?",
    "answers": {
      "a": "Technische Informationen über Funkgeräte und Verbindungen",
      "b": "Persönliche Gespräche zwischen Funkamateuren",
      "c": "Vertragsabsprachen und geschäftliche Inhalte zwischen Teilnehmern",
      "d": "Notfallmeldungen bei besonderen Situationen"
    },
    "correct": "c"
  },
  {
    "id": "EF_R_010",
    "chapter": 3,
    "question": "Was bedeutet „Störungen vermeiden“ konkret im Funkbetrieb?",
    "answers": {
      "a": "Möglichst laut und deutlich über grössere Distanzen senden",
      "b": "Funkgespräche möglichst kurz und ohne Pausen führen",
      "c": "Keine Notruf-, Polizei- oder Flugfunkfrequenzen benutzen",
      "d": "Funkgeräte nur bei guten Wetterbedingungen einsetzen"
    },
    "correct": "c"
  },
  {
    "id": "EF_R_011",
    "chapter": 3,
    "question": "Was kann bei Störungen von Notruffrequenzen passieren?",
    "answers": {
      "a": "Die Verbindung zwischen Funkgeräten wird deutlich schwächer",
      "b": "Einsatzkräfte können in ihrer Arbeit behindert werden",
      "c": "Das Funkgerät wird automatisch vom Netz getrennt",
      "d": "Die Frequenz wird automatisch gewechselt"
    },
    "correct": "b"
  },
  {
    "id": "EF_R_012",
    "chapter": 3,
    "question": "Warum ist Funk kein privates Kommunikationsmittel?",
    "answers": {
      "a": "Weil Funkgeräte für Privatpersonen sehr teuer sind",
      "b": "Weil Signale von anderen empfangen werden können",
      "c": "Weil Funk für Privatpersonen nur lokal funktioniert",
      "d": "Weil Funkwellen von Walkie-Talkies langsam sind"
    },
    "correct": "b"
  },
  {
    "id": "EF_R_013",
    "chapter": 3,
    "question": "Was bedeutet „öffentlicher Funkraum“?",
    "answers": {
      "a": "Funk darf nur im Freien und nicht in Gebäuden genutzt werden",
      "b": "Funkübertragungen können grundsätzlich von anderen empfangen werden",
      "c": "Funkverbindungen sind immer verschlüsselt und geschützt",
      "d": "Funk ist ausschliesslich für Behörden zugänglich"
    },
    "correct": "b"
  },
  {
    "id": "EF_R_014",
    "chapter": 3,
    "question": "Warum dürfen keine vertraulichen Informationen gesendet werden?",
    "answers": {
      "a": "Weil vertrauliche Daten im Funk verloren gehen können",
      "b": "Weil Funkübertragungen von anderen mitgehört werden können",
      "c": "Weil Funkgeräte solche Informationen nicht speichern können",
      "d": "Weil vertrauliche Daten zu gross für Funkübertragung sind"
    },
    "correct": "b"
  },
  {
    "id": "EF_R_015",
    "chapter": 3,
    "question": "Wer ist beim Import eines Funkgeräts aus dem Ausland verantwortlich?",
    "answers": {
      "a": "Der Hersteller ist für alle Vorschriften verantwortlich",
      "b": "Der Verkäufer übernimmt die Verantwortung für das Gerät",
      "c": "Der Käufer gilt rechtlich als Importeur des Geräts",
      "d": "Der Staat kontrolliert automatisch alle importierten Geräte"
    },
    "correct": "c"
  },
  {
    "id": "EF_R_016",
    "chapter": 3,
    "question": "Warum gelten Funkregeln auch für Hobby-Nutzer?",
    "answers": {
      "a": "Weil Funkgeräte nur von Fachpersonen genutzt werden sollen",
      "b": "Weil alle Nutzer dasselbe Frequenzspektrum gemeinsam verwenden",
      "c": "Weil Funkgeräte technisch sehr komplex aufgebaut sind",
      "d": "Weil Funkverbindungen nur lokal funktionieren dürfen"
    },
    "correct": "b"
  },
  {
    "id": "EF_R_017",
    "chapter": 3,
    "question": "Was unterscheidet Amateurfunk und Behördenfunk rechtlich?",
    "answers": {
      "a": "Die verwendete Lautstärke der Funkgeräte",
      "b": "Die Bauform und Grösse der verwendeten Geräte",
      "c": "Die erlaubte Nutzung und die zugewiesenen Frequenzen",
      "d": "Die Art der Stromversorgung der Geräte"
    },
    "correct": "c"
  },
  {
    "id": "EF_R_018",
    "chapter": 3,
    "question": "Warum ist Funk sicherheitsrelevant?",
    "answers": {
      "a": "Weil Funkgeräte grosse Reichweiten erreichen können",
      "b": "Weil Rettungsdienste und Behörden darauf angewiesen sind",
      "c": "Weil Funkgeräte teuer und schwer erhältlich sind",
      "d": "Weil Funkverbindungen sehr schnell aufgebaut werden können"
    },
    "correct": "b"
  },
  {
    "id": "EF_R_019",
    "chapter": 3,
    "question": "Was ist ein Beispiel für Ultrakurzwelle (VHF)?",
    "answers": {
      "a": "Mittelwellenradio im Bereich unter 1 MHz",
      "b": "UKW-Radiosender im Bereich von 87.5 bis 108 MHz",
      "c": "WLAN-Netze im Bereich von 2.4 GHz",
      "d": "Satellitenfunk im Bereich oberhalb von 10 GHz"
    },
    "correct": "b"
  },
  {
    "id": "EF_R_020",
    "chapter": 3,
    "question": "Warum ist die Einhaltung der Funkregeln wichtig?",
    "answers": {
      "a": "Damit Funkgeräte länger mit einer Batterie betrieben werden können",
      "b": "Damit Funkverbindungen sicher und störungsfrei funktionieren",
      "c": "Damit mehr Frequenzen gleichzeitig genutzt werden können",
      "d": "Damit Funkgeräte einfacher hergestellt werden können"
    },
    "correct": "b"
  },
  {
    "id": "EF_D_001",
    "chapter": 4,
    "question": "Warum muss man vor dem Senden immer zuerst zuhören?",
    "answers": {
      "a": "Damit das Funkgerät die Lautstärke richtig einstellen kann",
      "b": "Damit man erkennt, ob die Frequenz bereits belegt ist",
      "c": "Damit sich die Antenne auf die Umgebung ausrichten kann",
      "d": "Damit das Gerät beim Einschalten Energie sparen kann"
    },
    "correct": "b"
  },
  {
    "id": "EF_D_002",
    "chapter": 4,
    "question": "Was passiert, wenn man ein laufendes Funkgespräch unterbricht?",
    "answers": {
      "a": "Die Verbindung wird automatisch für beide Seiten verstärkt",
      "b": "Die Verständlichkeit des laufenden Gesprächs wird gestört",
      "c": "Die Geräte wechseln selbstständig auf einen anderen Kanal",
      "d": "Die Verbindung wird als neue Meldung gespeichert"
    },
    "correct": "b"
  },
  {
    "id": "EF_D_003",
    "chapter": 4,
    "question": "Warum sollten Funkmeldungen möglichst kurz sein?",
    "answers": {
      "a": "Weil Funkgeräte nur kurze Meldungen technisch verarbeiten können",
      "b": "Weil lange Meldungen die Frequenz unnötig blockieren",
      "c": "Weil lange Meldungen im Gerät automatisch gekürzt werden",
      "d": "Weil kurze Meldungen grundsätzlich eine grössere Reichweite haben"
    },
    "correct": "b"
  },
  {
    "id": "EF_D_004",
    "chapter": 4,
    "question": "Was bedeutet klar sprechen im Funkbetrieb?",
    "answers": {
      "a": "Möglichst laut und in hohem Tempo zu sprechen",
      "b": "Deutlich, verständlich und in normalem Tempo zu sprechen",
      "c": "Möglichst viele Fachbegriffe hintereinander zu verwenden",
      "d": "Möglichst lange Sätze ohne Pause zu formulieren"
    },
    "correct": "b"
  },
  {
    "id": "EF_D_005",
    "chapter": 4,
    "question": "Warum ist einfache Sprache im Funk wichtig?",
    "answers": {
      "a": "Weil Funkgeräte komplizierte Wörter schlechter übertragen",
      "b": "Weil einfache Sprache Missverständnisse leichter verhindert",
      "c": "Weil einfache Sprache weniger elektrische Leistung braucht",
      "d": "Weil einfache Sprache automatisch schneller gesendet wird"
    },
    "correct": "b"
  },
  {
    "id": "EF_D_006",
    "chapter": 4,
    "question": "Was gehört zu guter Funkdisziplin?",
    "answers": {
      "a": "Häufiges Senden ohne Rücksicht auf andere Teilnehmer",
      "b": "Kurze, klare und gut strukturierte Meldungen im Gespräch",
      "c": "Möglichst viele gleichzeitige Gespräche auf einer Frequenz",
      "d": "Spontanes Senden ohne jede inhaltliche Vorbereitung"
    },
    "correct": "b"
  },
  {
    "id": "EF_D_007",
    "chapter": 4,
    "question": "Warum sollte man unnötige Gespräche vermeiden?",
    "answers": {
      "a": "Weil Funkgeräte bei langen Gesprächen überhitzen können",
      "b": "Weil andere Nutzer die Frequenz ebenfalls benötigen könnten",
      "c": "Weil Funk grundsätzlich nur für Notfälle gedacht ist",
      "d": "Weil längere Gespräche technisch meist nicht erlaubt sind"
    },
    "correct": "b"
  },
  {
    "id": "EF_D_008",
    "chapter": 4,
    "question": "Was ist unter Funkdisziplin zu verstehen?",
    "answers": {
      "a": "Die technische Leistung eines bestimmten Funkgeräts im Einsatz",
      "b": "Das korrekte und regelkonforme Verhalten im Funkverkehr",
      "c": "Die Reichweite eines Funknetzes in offenem Gelände",
      "d": "Die Anzahl verfügbarer Frequenzen in einem Gerät"
    },
    "correct": "b"
  },
  {
    "id": "EF_D_009",
    "chapter": 4,
    "question": "Warum ist Funk kein gewöhnliches Gespräch wie im Alltag?",
    "answers": {
      "a": "Weil Funkgeräte langsamer arbeiten als normale Telefone",
      "b": "Weil Funk strukturiert und eindeutig ablaufen muss",
      "c": "Weil Funk nur im Freien und nicht in Gebäuden funktioniert",
      "d": "Weil Funkgeräte grundsätzlich nur kurze Reichweiten haben"
    },
    "correct": "b"
  },
  {
    "id": "EF_D_010",
    "chapter": 4,
    "question": "Warum sollte man nicht ins Mikrofon schreien?",
    "answers": {
      "a": "Weil das Mikrofon dabei sofort beschädigt werden könnte",
      "b": "Weil die Verständlichkeit durch Übersteuerung schlechter wird",
      "c": "Weil das Funkgerät dann automatisch ganz abschaltet",
      "d": "Weil die Reichweite des Signals dadurch kleiner wird"
    },
    "correct": "b"
  },
  {
    "id": "EF_D_011",
    "chapter": 4,
    "question": "Warum sollte man vor dem Senden überlegen, was man sagen will?",
    "answers": {
      "a": "Weil das Gerät nach dem Einschalten Zeit zum Laden braucht",
      "b": "Weil klare und vorbereitete Meldungen Fehler vermeiden",
      "c": "Weil Funkgeräte spontane Meldungen technisch nicht übertragen",
      "d": "Weil unvorbereitete Meldungen später automatisch gelöscht werden"
    },
    "correct": "b"
  },
  {
    "id": "EF_D_012",
    "chapter": 4,
    "question": "Was bedeutet \"verstanden\" im Funk?",
    "answers": {
      "a": "Die Verbindung wird mit diesem Wort sofort beendet",
      "b": "Die Nachricht wurde korrekt empfangen und verstanden",
      "c": "Die Frequenz wird jetzt auf einen anderen Kanal gewechselt",
      "d": "Die Lautstärke soll an beiden Geräten angepasst werden"
    },
    "correct": "b"
  },
  {
    "id": "EF_D_013",
    "chapter": 4,
    "question": "Was bedeutet \"antworten\" im Funk?",
    "answers": {
      "a": "Die Verbindung ist mit dieser Meldung vollständig beendet",
      "b": "Die Gegenstation soll nun auf die Meldung antworten",
      "c": "Die benutzte Frequenz ist jetzt für alle frei geworden",
      "d": "Die zuletzt gesendete Nachricht wird jetzt wiederholt"
    },
    "correct": "b"
  },
  {
    "id": "EF_D_014",
    "chapter": 4,
    "question": "Was bedeutet \"Ende\" im Funk?",
    "answers": {
      "a": "Die Gegenstation soll jetzt erneut zu sprechen beginnen",
      "b": "Die Verbindung oder Meldung wird jetzt abgeschlossen",
      "c": "Die Nachricht soll gleich noch einmal wiederholt werden",
      "d": "Die verwendete Frequenz wird danach sofort gewechselt"
    },
    "correct": "b"
  },
  {
    "id": "EF_D_015",
    "chapter": 4,
    "question": "Wann verwendet man \"nicht verstanden, wiederholen\"?",
    "answers": {
      "a": "Wenn die Verbindung regulär beendet werden soll",
      "b": "Wenn eine Nachricht unklar oder unvollständig ankam",
      "c": "Wenn die Frequenz für ein anderes Gespräch gewechselt wird",
      "d": "Wenn die Lautstärke des Lautsprechers zu hoch eingestellt ist"
    },
    "correct": "b"
  },
  {
    "id": "EF_D_016",
    "chapter": 4,
    "question": "Was bedeutet \"ich wiederhole\" im Funk?",
    "answers": {
      "a": "Die Verbindung wird mit dieser Meldung vollständig beendet",
      "b": "Die eigene Nachricht wird jetzt noch einmal gesendet",
      "c": "Die Frequenz wird gleich auf einen neuen Kanal geändert",
      "d": "Die Lautstärke des Funkgeräts wird nun erhöht"
    },
    "correct": "b"
  },
  {
    "id": "EF_D_017",
    "chapter": 4,
    "question": "Wann sollte das NATO-Alphabet im Funk verwendet werden?",
    "answers": {
      "a": "Wenn einfache Wörter ohne besondere Bedeutung übermittelt werden sollen",
      "b": "Wenn schwierige Wörter, Rufzeichen oder Codes eindeutig übermittelt werden müssen",
      "c": "Wenn sehr kurze Bestätigungen schnell übermittelt werden sollen",
      "d": "Wenn Funkgeräte mit besonders hoher Sendeleistung eingesetzt werden"
    },
    "correct": "b"
  },
  {
    "id": "EF_D_018",
    "chapter": 4,
    "question": "Warum müssen Funkmeldungen oft bestätigt werden?",
    "answers": {
      "a": "Damit das Gerät die Verbindung später im Speicher ablegt",
      "b": "Damit klar ist, dass die Nachricht verstanden wurde",
      "c": "Damit die Reichweite des Signals deutlich erhöht wird",
      "d": "Damit die Frequenz nach der Meldung gewechselt werden kann"
    },
    "correct": "b"
  },
  {
    "id": "EF_D_019",
    "chapter": 4,
    "question": "Warum sollten keine vertraulichen Inhalte gesendet werden?",
    "answers": {
      "a": "Weil vertrauliche Inhalte meist zu lang für Funk sind",
      "b": "Weil solche Inhalte von anderen empfangen werden können",
      "c": "Weil Funkgeräte solche Inhalte intern nicht speichern können",
      "d": "Weil vertrauliche Inhalte technisch nicht übertragbar sind"
    },
    "correct": "b"
  },
  {
    "id": "EF_D_020",
    "chapter": 4,
    "question": "Was beschreibt professionelles Verhalten im Funk?",
    "answers": {
      "a": "Möglichst viele Gespräche gleichzeitig auf einer Frequenz zu führen",
      "b": "Klare, kurze und regelkonforme Kommunikation im Funknetz",
      "c": "Spontanes und ungeplantes Senden ohne feste Struktur",
      "d": "Häufiges Wechseln der Frequenz während eines Gesprächs"
    },
    "correct": "b"
  },
  {
    "id": "EF_P_001",
    "chapter": 5,
    "question": "Was ist die PTT-Taste an einem Funkgerät?",
    "answers": {
      "a": "Eine Taste zur Lautstärkeregelung im laufenden Empfang",
      "b": "Eine Taste zum Wechseln zwischen gespeicherten Kanälen",
      "c": "Eine Taste zum Senden von Sprachsignalen über Funk",
      "d": "Eine Taste zur Anzeige der eingestellten Frequenz"
    },
    "correct": "c"
  },
  {
    "id": "EF_P_002",
    "chapter": 5,
    "question": "Warum sollte man nach dem Drücken der PTT-Taste kurz warten?",
    "answers": {
      "a": "Damit sich die Antenne in die richtige Richtung ausrichten kann",
      "b": "Damit der Anfang der Meldung nicht abgeschnitten wird",
      "c": "Damit das Gerät die Lautstärke des Lautsprechers anpasst",
      "d": "Damit die Batterie beim Senden besser geschont wird"
    },
    "correct": "b"
  },
  {
    "id": "EF_P_003",
    "chapter": 5,
    "question": "Warum darf man nicht sofort nach dem Drücken der Taste sprechen?",
    "answers": {
      "a": "Weil das Gerät einen kurzen Moment zum Senden braucht",
      "b": "Weil die Frequenz in dieser Zeit noch gewechselt wird",
      "c": "Weil die Lautstärke zuerst automatisch eingestellt wird",
      "d": "Weil das Mikrofon erst nach mehreren Sekunden aktiv wird"
    },
    "correct": "a"
  },
  {
    "id": "EF_P_004",
    "chapter": 5,
    "question": "Warum sollte man die PTT-Taste erst nach dem Sprechen loslassen?",
    "answers": {
      "a": "Weil sonst die Lautstärke im Gerät verändert werden könnte",
      "b": "Weil sonst Teile der eigenen Nachricht verloren gehen können",
      "c": "Weil sonst die eingestellte Frequenz sofort gewechselt wird",
      "d": "Weil sonst die Batterie deutlich schneller leer wird"
    },
    "correct": "b"
  },
  {
    "id": "EF_P_005",
    "chapter": 5,
    "question": "Wie sollte ein Funkgerät beim Sprechen gehalten werden?",
    "answers": {
      "a": "Direkt an das Ohr und möglichst weit vom Mund entfernt",
      "b": "In etwa fünf bis zehn Zentimetern Abstand zum Mund",
      "c": "Möglichst dicht vor die Antenne eines zweiten Geräts",
      "d": "Direkt auf die Brust und mit dem Mikrofon nach unten"
    },
    "correct": "b"
  },
  {
    "id": "EF_P_006",
    "chapter": 5,
    "question": "Warum ist der Abstand zum Mikrofon wichtig?",
    "answers": {
      "a": "Damit das Gerät beim Senden nicht zu warm werden kann",
      "b": "Damit die Sprachqualität klar und verständlich bleibt",
      "c": "Damit die Reichweite der Verbindung automatisch grösser wird",
      "d": "Damit die eingestellte Frequenz stabil gehalten werden kann"
    },
    "correct": "b"
  },
  {
    "id": "EF_P_007",
    "chapter": 5,
    "question": "Was ist ein Funkcheck?",
    "answers": {
      "a": "Eine Kontrolle der Lautstärke während eines langen Gesprächs",
      "b": "Eine Überprüfung von Verbindung und Verständlichkeit",
      "c": "Eine Änderung der Frequenz vor einem Gespräch",
      "d": "Eine Messung des Batteriestands im eingeschalteten Gerät"
    },
    "correct": "b"
  },
  {
    "id": "EF_P_008",
    "chapter": 5,
    "question": "Warum ist ein Funkcheck sinnvoll?",
    "answers": {
      "a": "Damit die Geräte bei Bedarf automatisch synchronisiert werden",
      "b": "Damit die Verständlichkeit vor einem Einsatz geprüft wird",
      "c": "Damit die Reichweite einer Verbindung künstlich erhöht wird",
      "d": "Damit neue Kanäle im Funkgerät geladen werden"
    },
    "correct": "b"
  },
  {
    "id": "EF_P_009",
    "chapter": 5,
    "question": "Warum ist der Akkustand eines Funkgeräts wichtig?",
    "answers": {
      "a": "Weil ein leerer Akku die Kommunikation unterbrechen kann",
      "b": "Weil er direkt die zugelassene Frequenz bestimmen kann",
      "c": "Weil er die Sprache im Mikrofon schneller überträgt",
      "d": "Weil er die Bauform der Antenne beeinflussen kann"
    },
    "correct": "a"
  },
  {
    "id": "EF_P_010",
    "chapter": 5,
    "question": "Was passiert bei leerem Akku während einer Verbindung?",
    "answers": {
      "a": "Die Verbindung wird automatisch auf Reserveleistung verstärkt",
      "b": "Die Kommunikation kann plötzlich vollständig abbrechen",
      "c": "Die Frequenz wird vom Gerät selbstständig gewechselt",
      "d": "Das Gerät speichert die Meldung für einen späteren Versand"
    },
    "correct": "b"
  },
  {
    "id": "EF_P_011",
    "chapter": 5,
    "question": "Warum sollte man Funkgeräte regelmässig testen?",
    "answers": {
      "a": "Damit die Geräte neue Funktionen aus dem Netz laden können",
      "b": "Damit die Funktionsfähigkeit vor dem Einsatz gesichert ist",
      "c": "Damit die Reichweite jeder Verbindung höher eingestellt wird",
      "d": "Damit die Lautstärke des Lautsprechers automatisch steigt"
    },
    "correct": "b"
  },
  {
    "id": "EF_P_012",
    "chapter": 5,
    "question": "Was bedeutet Kanal prüfen im praktischen Funkbetrieb?",
    "answers": {
      "a": "Die Lautstärke des Empfängers kurz zu kontrollieren",
      "b": "Zu prüfen, ob die Frequenz bereits belegt ist",
      "c": "Die Batterie des Geräts für den Einsatz zu wechseln",
      "d": "Die Antenne vor dem Gespräch in Position zu bringen"
    },
    "correct": "b"
  },
  {
    "id": "EF_P_013",
    "chapter": 5,
    "question": "Warum sollte man vor dem Senden zuhören?",
    "answers": {
      "a": "Damit das Gerät nach dem Einschalten schneller senden kann",
      "b": "Damit man andere Gespräche nicht stört oder überdeckt",
      "c": "Damit die Reichweite des Signals besser eingestellt wird",
      "d": "Damit die Lautstärke beim Empfang automatisch angepasst wird"
    },
    "correct": "b"
  },
  {
    "id": "EF_P_014",
    "chapter": 5,
    "question": "Was kann die Verständlichkeit einer Funkmeldung besonders beeinträchtigen?",
    "answers": {
      "a": "Eine ruhige Umgebung ohne Nebengeräusche am Standort",
      "b": "Eine klar strukturierte Sprache in normalem Tempo",
      "c": "Starke Hintergrundgeräusche in der Nähe des Mikrofons",
      "d": "Eine normale Lautstärke beim Sprechen in das Gerät"
    },
    "correct": "c"
  },
  {
    "id": "EF_P_015",
    "chapter": 5,
    "question": "Wie kann man die Verständlichkeit einer Funkmeldung verbessern?",
    "answers": {
      "a": "Indem man besonders schnell und ohne Pause spricht",
      "b": "Indem man deutlich und in normalem Tempo spricht",
      "c": "Indem man möglichst laut in das Mikrofon hineinruft",
      "d": "Indem man viele Fachbegriffe ohne Erklärung verwendet"
    },
    "correct": "b"
  },
  {
    "id": "EF_P_016",
    "chapter": 5,
    "question": "Was bedeutet im Funk Repeat oder Say again sinngemäss?",
    "answers": {
      "a": "Die Verbindung wird mit dieser Meldung abgeschlossen",
      "b": "Die gesendete Nachricht soll noch einmal wiederholt werden",
      "c": "Die benutzte Frequenz wird jetzt auf einen anderen Kanal gelegt",
      "d": "Die Lautstärke des Empfängers soll sofort erhöht werden"
    },
    "correct": "b"
  },
  {
    "id": "EF_P_017",
    "chapter": 5,
    "question": "Wie sollte eine Funkmeldung aufgebaut sein?",
    "answers": {
      "a": "Spontan, frei und ohne feste inhaltliche Struktur",
      "b": "Klar, kurz und logisch gegliedert aufgebaut",
      "c": "Möglichst ausführlich mit vielen Nebensätzen formuliert",
      "d": "Ohne Vorbereitung und direkt aus dem Gespräch heraus"
    },
    "correct": "b"
  },
  {
    "id": "EF_P_018",
    "chapter": 5,
    "question": "Warum ist ruhiges Sprechen im Funk wichtig?",
    "answers": {
      "a": "Weil das Gerät bei schneller Sprache empfindlich reagieren kann",
      "b": "Weil ruhiges Sprechen die Verständlichkeit verbessert",
      "c": "Weil dadurch automatisch die Reichweite vergrössert wird",
      "d": "Weil damit die Frequenz besonders stabil gehalten wird"
    },
    "correct": "b"
  },
  {
    "id": "EF_P_019",
    "chapter": 5,
    "question": "Was passiert bei gleichzeitigem Senden mehrerer Geräte?",
    "answers": {
      "a": "Die Signale werden automatisch nacheinander geordnet",
      "b": "Die Verständlichkeit kann durch Überlagerung leiden",
      "c": "Die Reichweite der Verbindung wird dadurch deutlich grösser",
      "d": "Die Geräte wechseln automatisch auf freie Kanäle"
    },
    "correct": "b"
  },
  {
    "id": "EF_P_020",
    "chapter": 5,
    "question": "Warum ist Übung im Umgang mit Funkgeräten wichtig?",
    "answers": {
      "a": "Damit die Geräte technisch schneller arbeiten können",
      "b": "Damit Bedienung und Kommunikation sicherer werden",
      "c": "Damit die Reichweite im Betrieb dauerhaft grösser wird",
      "d": "Damit die Geräte mit weniger Strom auskommen"
    },
    "correct": "b"
  },
  {
    "id": "EF_U_001",
    "chapter": 6,
    "question": "Was ist Private-Mobile-Radio-Funk?",
    "answers": {
      "a": "Ein lizenzpflichtiger Funkdienst für den Amateurfunk",
      "b": "Ein frei nutzbarer Funkdienst mit festen Einschränkungen",
      "c": "Ein militärischer Funkdienst mit geschützten Kanälen",
      "d": "Ein Satellitenfunkdienst für grosse Distanzen"
    },
    "correct": "b"
  },
  {
    "id": "EF_U_002",
    "chapter": 6,
    "question": "Welche Einschränkung gilt bei Private-Mobile-Radio-Funkgeräten?",
    "answers": {
      "a": "Die Sendeleistung ist stark begrenzt und fest geregelt",
      "b": "Die Antenne darf beliebig gewechselt und verlängert werden",
      "c": "Alle Frequenzen im UHF-Bereich dürfen genutzt werden",
      "d": "Behördenkanäle dürfen mit kleiner Leistung mitbenutzt werden"
    },
    "correct": "a"
  },
  {
    "id": "EF_U_003",
    "chapter": 6,
    "question": "Was ist eine HB3-Lizenz?",
    "answers": {
      "a": "Eine Bewilligung für Behördenfunk im Einsatz",
      "b": "Eine Einsteigerlizenz im Amateurfunkdienst",
      "c": "Eine Bewilligung für frei nutzbare PMR-Geräte",
      "d": "Eine Lizenz für den Flugfunk am Boden"
    },
    "correct": "b"
  },
  {
    "id": "EF_U_004",
    "chapter": 6,
    "question": "Was darf ein HB3-Funker?",
    "answers": {
      "a": "Alle Funkfrequenzen im Land frei benutzen",
      "b": "Bestimmte Amateurfunkbereiche gemäss Bewilligung nutzen",
      "c": "Behördenfunk für Übungen im Notfall verwenden",
      "d": "Flugfunk für private Gespräche im Verein benutzen"
    },
    "correct": "b"
  },
  {
    "id": "EF_U_005",
    "chapter": 6,
    "question": "Was darf ein HB3-Funker nicht?",
    "answers": {
      "a": "Ein zugelassenes Funkgerät im erlaubten Bereich verwenden",
      "b": "Mit anderen Funkamateuren persönliche Gespräche führen",
      "c": "Eigene Sender bauen oder am Senderteil ändern",
      "d": "Mit geringer Leistung auf zugeteilten Bändern arbeiten"
    },
    "correct": "c"
  },
  {
    "id": "EF_U_006",
    "chapter": 6,
    "question": "Was ist eine HB9-Lizenz?",
    "answers": {
      "a": "Eine Einsteigerlizenz mit sehr wenigen Rechten",
      "b": "Eine volle Amateurfunklizenz mit erweiterten Rechten",
      "c": "Eine Lizenz für PMR446 ohne jede Einschränkung",
      "d": "Eine Lizenz für WLAN und Bluetooth im Haushalt"
    },
    "correct": "b"
  },
  {
    "id": "EF_U_007",
    "chapter": 6,
    "question": "Was darf ein HB9-Funker zusätzlich?",
    "answers": {
      "a": "Behördenfunk und Flugfunk im Alltag mitbenutzen",
      "b": "Geräte selbst bauen und technisch verändern",
      "c": "Alle Frequenzen weltweit ohne Regeln benutzen",
      "d": "Notruffrequenzen für private Übungen verwenden"
    },
    "correct": "b"
  },
  {
    "id": "EF_U_008",
    "chapter": 6,
    "question": "Warum dürfen HB9-Funker Geräte bauen und verändern?",
    "answers": {
      "a": "Weil sie eine umfassendere Ausbildung und Prüfung haben",
      "b": "Weil sie automatisch grössere Antennen erhalten",
      "c": "Weil sie nur mit selbstgebauten Geräten senden dürfen",
      "d": "Weil sie immer auf höheren Frequenzen arbeiten"
    },
    "correct": "a"
  },
  {
    "id": "EF_U_009",
    "chapter": 6,
    "question": "Was unterscheidet HB3 und HB9 technisch am ehesten?",
    "answers": {
      "a": "Die Farbe des Funkgeräts und die Form der Tasten",
      "b": "Die erlaubte Leistung und die technische Freiheit",
      "c": "Die Stromversorgung des verwendeten Akkupacks",
      "d": "Die Art des eingebauten Lautsprechers im Gerät"
    },
    "correct": "b"
  },
  {
    "id": "EF_U_010",
    "chapter": 6,
    "question": "Was unterscheidet HB3 und HB9 rechtlich am ehesten?",
    "answers": {
      "a": "Die erlaubten Frequenzbereiche und die zulässigen Rechte",
      "b": "Die Pflicht zur Nutzung derselben Antennenform",
      "c": "Die Farbe der Rufzeichen auf den Dokumenten",
      "d": "Die Lautstärke der Funkmeldungen im Betrieb"
    },
    "correct": "a"
  },
  {
    "id": "EF_U_011",
    "chapter": 6,
    "question": "Warum sind Behördenfunknetze getrennt von Hobby- und Amateurfunk?",
    "answers": {
      "a": "Weil sie andere Gerätefarben im Einsatz verwenden",
      "b": "Weil sie sicherheitsrelevante Kommunikation schützen müssen",
      "c": "Weil sie nur in grossen Städten betrieben werden",
      "d": "Weil sie grundsätzlich nur mit Kabeln funktionieren"
    },
    "correct": "b"
  },
  {
    "id": "EF_U_012",
    "chapter": 6,
    "question": "Warum darf man nicht auf Polizeifrequenzen funken?",
    "answers": {
      "a": "Weil die Technik mit Privatgeräten nicht arbeiten kann",
      "b": "Weil man dadurch Einsätze und Notrufe stören könnte",
      "c": "Weil diese Frequenzen nur im Ausland verwendet werden",
      "d": "Weil sie ausschliesslich auf VHF und nie auf UHF liegen"
    },
    "correct": "b"
  },
  {
    "id": "EF_U_013",
    "chapter": 6,
    "question": "Was kann bei Missbrauch von Behördenfunk passieren?",
    "answers": {
      "a": "Die Verbindung wird im Gerät automatisch schwächer",
      "b": "Es kann zu rechtlichen Konsequenzen und Störungen kommen",
      "c": "Die Frequenz wird vom Gerät selbstständig umgestellt",
      "d": "Das Funkgerät arbeitet danach nur noch mit halber Leistung"
    },
    "correct": "b"
  },
  {
    "id": "EF_U_014",
    "chapter": 6,
    "question": "Warum haben Behörden eigene Funknetze?",
    "answers": {
      "a": "Damit sie grössere Reichweiten ohne Regeln erhalten",
      "b": "Damit sie sicher und störungsfrei kommunizieren können",
      "c": "Damit sie billigere Geräte im grossen Einkauf nutzen",
      "d": "Damit sie keine Funkbegriffe mehr lernen müssen"
    },
    "correct": "b"
  },
  {
    "id": "EF_U_015",
    "chapter": 6,
    "question": "Was ist ein Relais im Amateurfunk?",
    "answers": {
      "a": "Ein tragbares Funkgerät für sehr kurze Distanzen",
      "b": "Eine Station zur Weiterleitung von Funkverbindungen",
      "c": "Eine Batterieeinheit für stationäre Funkanlagen",
      "d": "Eine Antennenform für Fahrzeuge im Amateurfunk"
    },
    "correct": "b"
  },
  {
    "id": "EF_U_016",
    "chapter": 6,
    "question": "Wer darf Relais im Amateurfunk betreiben?",
    "answers": {
      "a": "Jede Person mit einem PMR-Gerät im Hobbybereich",
      "b": "Nur lizenzierte Funkamateure oder berechtigte Organisationen",
      "c": "Ausschliesslich Polizei und Rettungsdienste im Einsatz",
      "d": "Nur Hersteller von Funkgeräten mit eigener Werkstatt"
    },
    "correct": "b"
  },
  {
    "id": "EF_U_017",
    "chapter": 6,
    "question": "Warum gibt es unterschiedliche Lizenzstufen im Amateurfunk?",
    "answers": {
      "a": "Wegen der Preise und Gewichte verschiedener Geräte",
      "b": "Wegen der unterschiedlichen Kenntnisse und Rechte",
      "c": "Wegen der Farben und Formen der Rufzeichenkarten",
      "d": "Wegen der Entfernung zwischen Funkgerät und Antenne"
    },
    "correct": "b"
  },
  {
    "id": "EF_U_018",
    "chapter": 6,
    "question": "Was ist das Ziel des Amateurfunks?",
    "answers": {
      "a": "Unterhaltung ohne Regeln auf allen verfügbaren Bändern",
      "b": "Technische Weiterbildung und Funkkommunikation als Hobby",
      "c": "Betrieb von Behördennetzen für den Notfalleinsatz",
      "d": "Verkauf und Vermietung von Funkgeräten an Dritte"
    },
    "correct": "b"
  },
  {
    "id": "EF_U_019",
    "chapter": 6,
    "question": "Welche Aussage zu Private Mobile Radio ist korrekt?",
    "answers": {
      "a": "PMR erlaubt hohe Leistungen mit frei wechselbarer Antenne",
      "b": "PMR ist frei nutzbar, aber an feste Regeln gebunden",
      "c": "PMR benötigt immer eine Prüfung und eine Bewilligung",
      "d": "PMR nutzt geschützte Frequenzen von Behördennetzen"
    },
    "correct": "b"
  },
  {
    "id": "EF_U_020",
    "chapter": 6,
    "question": "Welche Aussage zum Amateurfunk ist korrekt?",
    "answers": {
      "a": "Amateurfunk ist frei und ohne Regeln für alle nutzbar",
      "b": "Amateurfunk erfordert Prüfung, Bewilligung und Disziplin",
      "c": "Amateurfunk ist ausschliesslich für Behörden vorgesehen",
      "d": "Amateurfunk nutzt keine fest zugewiesenen Frequenzen"
    },
    "correct": "b"
  }
];
window.questions = questions;
window.HB3_QUESTIONS = questions;
