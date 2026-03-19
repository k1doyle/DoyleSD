const vocabWords = [
  {
    word: "Chastise",
    definition: "To scold sharply",
    sentences: [
      "The teacher chastised the student for talking during the test.",
      "Her coach chastised the team for not trying hard enough.",
    ],
  },
  {
    word: "Elucidate",
    definition: "To explain or clarify",
    sentences: [
      "The professor tried to elucidate the difficult concept.",
      "She used examples to elucidate her point.",
    ],
  },
  {
    word: "Fallacious",
    definition: "Based on error; mistaken",
    sentences: [
      "His argument was fallacious and full of incorrect assumptions.",
      "The article contained several fallacious claims.",
    ],
  },
  {
    word: "Assiduous",
    definition: "Hardworking and persistent",
    sentences: [
      "She was an assiduous student who studied every night.",
      "His assiduous effort helped him succeed.",
    ],
  },
  {
    word: "Insurgent",
    definition: "A person who rebels against authority",
    sentences: [
      "The insurgents tried to overthrow the government.",
      "An insurgent group protested the leadership.",
    ],
  },
  {
    word: "Placid",
    definition: "Peaceful and calm",
    sentences: [
      "The lake looked placid at sunrise.",
      "Her placid personality calmed everyone.",
    ],
  },
  {
    word: "Trite",
    definition: "Overused or unoriginal",
    sentences: [
      "The speech was full of trite sayings.",
      "His joke sounded trite and predictable.",
    ],
  },
  {
    word: "Exalt",
    definition: "To glorify or praise highly",
    sentences: [
      "The crowd exalted the hero.",
      "The poem exalts the beauty of nature.",
    ],
  },
  {
    word: "Hypocrisy",
    definition: "Pretending to have beliefs you do not follow",
    sentences: [
      "People criticized the politician's hypocrisy.",
      "It was hypocrisy to tell others not to cheat while cheating himself.",
    ],
  },
  {
    word: "Caustic",
    definition: "Harsh or sarcastic",
    sentences: [
      "Her caustic remarks hurt his feelings.",
      "The critic wrote a caustic review.",
    ],
  },
  {
    word: "Discerning",
    definition: "Showing good judgment; perceptive",
    sentences: [
      "A discerning reader noticed the deeper meaning.",
      "She has a discerning eye for quality.",
    ],
  },
  {
    word: "Incisive",
    definition: "Clear, sharp, and direct",
    sentences: [
      "The journalist asked incisive questions.",
      "His incisive comments revealed the problem.",
    ],
  },
  {
    word: "Crass",
    definition: "Vulgar or lacking sensitivity",
    sentences: [
      "His crass joke offended everyone.",
      "The comment was rude and crass.",
    ],
  },
  {
    word: "Colloquial",
    definition: "Informal language used in everyday speech",
    sentences: [
      "The novel uses colloquial expressions.",
      "Her speech sounded casual and colloquial.",
    ],
  },
  {
    word: "Judicious",
    definition: "Showing good judgment",
    sentences: [
      "The judge made a judicious decision.",
      "A judicious choice can prevent problems.",
    ],
  },
  {
    word: "Tactless",
    definition: "Lacking sensitivity when dealing with others",
    sentences: [
      "His tactless remark embarrassed her.",
      "It was tactless to mention the mistake.",
    ],
  },
  {
    word: "Tacit",
    definition: "Understood without being spoken",
    sentences: [
      "There was a tacit agreement between them.",
      "His silence showed tacit approval.",
    ],
  },
  {
    word: "Whet",
    definition: "To stimulate or excite interest",
    sentences: [
      "The trailer whetted my curiosity about the movie.",
      "The story whetted her appetite for adventure.",
    ],
  },
  {
    word: "Prerogative",
    definition: "A special right or privilege",
    sentences: [
      "It is the manager's prerogative to make decisions.",
      "Voting is a citizen's prerogative.",
    ],
  },
  {
    word: "Hyperbole",
    definition: "Obvious exaggeration",
    sentences: [
      "Saying 'I'm starving' is hyperbole.",
      "The advertisement used hyperbole to attract attention.",
    ],
  },
  {
    word: "Ameliorate",
    definition: "To make something better",
    sentences: [
      "The new law helped ameliorate the problem.",
      "Medicine can ameliorate pain.",
    ],
  },
  {
    word: "Potent",
    definition: "Powerful or effective",
    sentences: [
      "The medicine was very potent.",
      "His words had a potent effect.",
    ],
  },
  {
    word: "Spurious",
    definition: "Fake or false",
    sentences: [
      "The website spread spurious information.",
      "The painting turned out to be spurious.",
    ],
  },
  {
    word: "Haphazard",
    definition: "Careless and lacking order",
    sentences: [
      "His notes were written in a haphazard way.",
      "The plan seemed haphazard.",
    ],
  },
  {
    word: "Negate",
    definition: "To cancel out or make ineffective",
    sentences: [
      "One mistake can negate hours of work.",
      "The new rule negates the old one.",
    ],
  },
  {
    word: "Rigorous",
    definition: "Very challenging or strict",
    sentences: [
      "The course has a rigorous schedule.",
      "Training for the marathon was rigorous.",
    ],
  },
  {
    word: "Therapeutic",
    definition: "Helping to heal or relieve stress",
    sentences: [
      "Painting can be therapeutic.",
      "The therapy sessions were therapeutic.",
    ],
  },
  {
    word: "Intangible",
    definition: "Not physical or touchable",
    sentences: [
      "Trust is an intangible quality.",
      "Love is intangible but powerful.",
    ],
  },
  {
    word: "Assent",
    definition: "To agree",
    sentences: [
      "She nodded in assent.",
      "The committee gave its assent.",
    ],
  },
  {
    word: "Incontrovertible",
    definition: "Impossible to deny",
    sentences: [
      "The evidence was incontrovertible.",
      "His success was incontrovertible.",
    ],
  },
  {
    word: "Altercation",
    definition: "A heated argument",
    sentences: [
      "The players had an altercation on the field.",
      "A loud altercation broke out.",
    ],
  },
  {
    word: "Circumspect",
    definition: "Careful and cautious",
    sentences: [
      "She was circumspect in her decisions.",
      "He spoke in a circumspect way.",
    ],
  },
  {
    word: "Placate",
    definition: "To calm or soothe",
    sentences: [
      "She tried to placate the angry customer.",
      "He apologized to placate her.",
    ],
  },
  {
    word: "Tirade",
    definition: "A long angry speech",
    sentences: [
      "The coach went on a tirade after the loss.",
      "She listened to his tirade patiently.",
    ],
  },
  {
    word: "Guile",
    definition: "Clever trickery or deceit",
    sentences: [
      "The villain used guile to fool others.",
      "She achieved success without guile.",
    ],
  },
  {
    word: "Volatile",
    definition: "Likely to change suddenly; unstable",
    sentences: [
      "The situation was volatile.",
      "The chemical is highly volatile.",
    ],
  },
  {
    word: "Deference",
    definition: "Respectful submission to another",
    sentences: [
      "He showed deference to his teacher.",
      "They treated the judge with deference.",
    ],
  },
  {
    word: "Malevolent",
    definition: "Having evil intentions",
    sentences: [
      "The villain had a malevolent plan.",
      "His malevolent smile was frightening.",
    ],
  },
  {
    word: "Pugnacious",
    definition: "Ready to fight or argue",
    sentences: [
      "The pugnacious player argued constantly.",
      "He had a pugnacious personality.",
    ],
  },
  {
    word: "Impassive",
    definition: "Showing no emotion",
    sentences: [
      "She remained impassive during the speech.",
      "His impassive face revealed nothing.",
    ],
  },
  {
    word: "Phenomenon",
    definition: "An observable event or fact",
    sentences: [
      "The eclipse was a rare phenomenon.",
      "Social media became a global phenomenon.",
    ],
  },
  {
    word: "Induce",
    definition: "To cause or persuade",
    sentences: [
      "The doctor used medicine to induce sleep.",
      "She tried to induce him to help.",
    ],
  },
  {
    word: "Capricious",
    definition: "Unpredictable or impulsive",
    sentences: [
      "His capricious decisions confused everyone.",
      "The weather is capricious.",
    ],
  },
  {
    word: "Rectify",
    definition: "To correct or fix",
    sentences: [
      "He tried to rectify the mistake.",
      "The company worked to rectify the problem.",
    ],
  },
  {
    word: "Discrepancy",
    definition: "A difference or inconsistency",
    sentences: [
      "There was a discrepancy in the reports.",
      "The accountant noticed a discrepancy.",
    ],
  },
  {
    word: "Catharsis",
    definition: "Emotional release",
    sentences: [
      "Writing can provide catharsis.",
      "The movie gave viewers a sense of catharsis.",
    ],
  },
  {
    word: "Serene",
    definition: "Calm and peaceful",
    sentences: [
      "The garden felt serene.",
      "She had a serene smile.",
    ],
  },
  {
    word: "Ephemeral",
    definition: "Lasting a very short time",
    sentences: [
      "The rainbow was beautiful but ephemeral.",
      "Fame can be ephemeral.",
    ],
  },
  {
    word: "Retract",
    definition: "To take back a statement",
    sentences: [
      "He retracted his claim.",
      "The newspaper retracted the article.",
    ],
  },
  {
    word: "Resolution",
    definition: "A firm decision or determination",
    sentences: [
      "She made a resolution to study harder.",
      "The conflict ended with a peaceful resolution.",
    ],
  },
];

const allWordIndexes = vocabWords.map((_, index) => index);

const state = {
  flashcardMode: "all",
  flashcardDeck: [...allWordIndexes],
  flashcardDeckPosition: 0,
  flashcardRevealed: false,
  viewedWords: new Set(),
  totalAnswers: 0,
  correctAnswers: 0,
  streak: 0,
  mistakes: new Map(),
  quizScope: "all",
  quizFormat: "multiple-choice",
  currentQuestion: null,
  questionAnswered: false,
  lightningRound: {
    active: false,
    remaining: 0,
    correct: 0,
    timeLeft: 0,
    lastScore: "",
    timerId: null,
    nextQuestionTimerId: null,
  },
};

const elements = {
  totalWords: document.querySelector("#total-words"),
  studiedCount: document.querySelector("#studied-count"),
  accuracy: document.querySelector("#accuracy"),
  streak: document.querySelector("#streak"),
  flashcard: document.querySelector("#flashcard"),
  flashcardWord: document.querySelector("#flashcard-word"),
  flashcardAnswer: document.querySelector("#flashcard-answer"),
  flashcardDefinition: document.querySelector("#flashcard-definition"),
  flashcardSentences: document.querySelector("#flashcard-sentences"),
  flashcardProgress: document.querySelector("#flashcard-progress"),
  flashcardModeLabel: document.querySelector("#flashcard-mode-label"),
  revealCard: document.querySelector("#reveal-card"),
  previousCard: document.querySelector("#previous-card"),
  nextCard: document.querySelector("#next-card"),
  randomCard: document.querySelector("#random-card"),
  shuffleCards: document.querySelector("#shuffle-cards"),
  studyAllCards: document.querySelector("#study-all-cards"),
  studyMissedCards: document.querySelector("#study-missed-cards"),
  questionType: document.querySelector("#question-type"),
  quizQuestion: document.querySelector("#quiz-question"),
  quizOptions: document.querySelector("#quiz-options"),
  typedAnswerForm: document.querySelector("#typed-answer-form"),
  typedAnswerInput: document.querySelector("#typed-answer-input"),
  quizFeedback: document.querySelector("#quiz-feedback"),
  quizModeLabel: document.querySelector("#quiz-mode-label"),
  lightningStatus: document.querySelector("#lightning-status"),
  quizIntro: document.querySelector("#quiz-intro"),
  multipleChoiceMode: document.querySelector("#multiple-choice-mode"),
  typedMode: document.querySelector("#typed-mode"),
  startLightning: document.querySelector("#start-lightning"),
  nextQuestion: document.querySelector("#next-question"),
  shuffleQuiz: document.querySelector("#shuffle-quiz"),
  missedCount: document.querySelector("#missed-count"),
  missedList: document.querySelector("#missed-list"),
  practiceMissed: document.querySelector("#practice-missed"),
  practiceAll: document.querySelector("#practice-all"),
  clearMissed: document.querySelector("#clear-missed"),
  wordBankList: document.querySelector("#word-bank-list"),
  jumpButtons: document.querySelectorAll("[data-jump]"),
};

function shuffleList(items) {
  const copy = [...items];

  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }

  return copy;
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function clearLightningTimers() {
  if (state.lightningRound.timerId) {
    window.clearInterval(state.lightningRound.timerId);
    state.lightningRound.timerId = null;
  }

  if (state.lightningRound.nextQuestionTimerId) {
    window.clearTimeout(state.lightningRound.nextQuestionTimerId);
    state.lightningRound.nextQuestionTimerId = null;
  }
}

function getWordIndexesForMode(mode) {
  if (mode === "missed" && state.mistakes.size > 0) {
    return allWordIndexes.filter((index) => state.mistakes.has(vocabWords[index].word));
  }

  return [...allWordIndexes];
}

function updateModeControls() {
  elements.flashcardModeLabel.textContent =
    state.flashcardMode === "missed" ? "Missed only" : "All words";

  elements.quizModeLabel.textContent =
    state.quizScope === "missed" && state.mistakes.size > 0
      ? "Missed words only"
      : "All words";

  elements.studyMissedCards.disabled = state.mistakes.size === 0;
  elements.practiceMissed.disabled = state.mistakes.size === 0 || state.lightningRound.active;
  elements.practiceAll.disabled = state.lightningRound.active;
  elements.clearMissed.disabled = state.mistakes.size === 0 || state.lightningRound.active;

  elements.multipleChoiceMode.classList.toggle(
    "is-active",
    state.quizFormat === "multiple-choice"
  );
  elements.typedMode.classList.toggle("is-active", state.quizFormat === "typed");
  elements.multipleChoiceMode.disabled = state.lightningRound.active;
  elements.typedMode.disabled = state.lightningRound.active;

  elements.nextQuestion.disabled = state.lightningRound.active;
  elements.shuffleQuiz.disabled = state.lightningRound.active;
  elements.startLightning.disabled = state.lightningRound.active;

  if (state.lightningRound.active) {
    elements.lightningStatus.textContent = `${state.lightningRound.remaining} left • ${state.lightningRound.timeLeft}s`;
    elements.quizIntro.textContent =
      "Lightning round is live. Answer quickly before the clock hits zero.";
    return;
  }

  elements.lightningStatus.textContent =
    state.lightningRound.lastScore || "10-question sprint";
  elements.quizIntro.textContent =
    state.quizFormat === "typed"
      ? "Type the vocab word that matches each definition."
      : "Questions alternate between matching a word to its definition and matching a definition back to the correct word.";
}

function updateStats() {
  const accuracyValue =
    state.totalAnswers === 0
      ? "0%"
      : `${Math.round((state.correctAnswers / state.totalAnswers) * 100)}%`;

  elements.totalWords.textContent = String(vocabWords.length);
  elements.studiedCount.textContent = String(state.viewedWords.size);
  elements.accuracy.textContent = accuracyValue;
  elements.streak.textContent = String(state.streak);

  updateModeControls();
}

function getCurrentFlashcardEntry() {
  if (!state.flashcardDeck.length) {
    state.flashcardDeck = [...allWordIndexes];
    state.flashcardDeckPosition = 0;
    state.flashcardMode = "all";
  }

  return vocabWords[state.flashcardDeck[state.flashcardDeckPosition]];
}

function setFlashcardMode(mode, options = {}) {
  const { shuffle = false } = options;
  let actualMode = mode;
  let deck = getWordIndexesForMode(mode);

  if (mode === "missed" && deck.length === 0) {
    actualMode = "all";
    deck = [...allWordIndexes];
  }

  state.flashcardMode = actualMode;
  state.flashcardDeck = shuffle ? shuffleList(deck) : deck;
  state.flashcardDeckPosition = 0;
  state.flashcardRevealed = false;
  renderFlashcard();
}

function renderFlashcard() {
  if (state.flashcardMode === "missed" && state.mistakes.size === 0) {
    setFlashcardMode("all");
    return;
  }

  const entry = getCurrentFlashcardEntry();

  state.viewedWords.add(entry.word);

  elements.flashcardWord.textContent = entry.word;
  elements.flashcardDefinition.textContent = entry.definition;
  elements.flashcardProgress.textContent = `Card ${state.flashcardDeckPosition + 1} of ${state.flashcardDeck.length}`;

  elements.flashcardSentences.replaceChildren(
    ...entry.sentences.map((sentence) => {
      const listItem = document.createElement("li");
      listItem.textContent = sentence;
      return listItem;
    })
  );

  elements.flashcardAnswer.hidden = !state.flashcardRevealed;
  elements.flashcard.classList.toggle("is-revealed", state.flashcardRevealed);
  elements.revealCard.textContent = state.flashcardRevealed ? "Hide answer" : "Reveal answer";

  updateStats();
}

function moveFlashcard(step) {
  const deckSize = state.flashcardDeck.length;

  state.flashcardDeckPosition =
    (state.flashcardDeckPosition + step + deckSize) % deckSize;
  state.flashcardRevealed = false;
  renderFlashcard();
}

function toggleFlashcard() {
  state.flashcardRevealed = !state.flashcardRevealed;
  renderFlashcard();
}

function getQuizPool() {
  if (state.quizScope === "missed" && state.mistakes.size > 0) {
    return vocabWords.filter((entry) => state.mistakes.has(entry.word));
  }

  state.quizScope = "all";
  return vocabWords;
}

function buildQuestion() {
  const pool = getQuizPool();
  let correctEntry = randomItem(pool);

  if (
    state.currentQuestion &&
    pool.length > 1 &&
    state.currentQuestion.word === correctEntry.word
  ) {
    const filteredPool = pool.filter((entry) => entry.word !== state.currentQuestion.word);
    correctEntry = randomItem(filteredPool);
  }

  if (state.quizFormat === "typed") {
    return {
      word: correctEntry.word,
      definition: correctEntry.definition,
      sentence: correctEntry.sentences[0],
      prompt: "Type the vocab word that matches this definition.",
      question: correctEntry.definition,
      typeLabel: "Typed recall",
      placeholder: "Type the vocab word",
      answerLabel: correctEntry.word,
      mode: "typed",
    };
  }

  const questionType = Math.random() < 0.5 ? "word-to-definition" : "definition-to-word";
  const distractors = shuffleList(
    vocabWords.filter((entry) => entry.word !== correctEntry.word)
  ).slice(0, 3);

  if (questionType === "word-to-definition") {
    const options = shuffleList([
      { label: correctEntry.definition, isCorrect: true },
      ...distractors.map((entry) => ({
        label: entry.definition,
        isCorrect: false,
      })),
    ]);

    return {
      word: correctEntry.word,
      definition: correctEntry.definition,
      sentence: correctEntry.sentences[0],
      prompt: "Choose the correct definition for this word.",
      question: correctEntry.word,
      typeLabel: "Word -> definition",
      options,
      answerLabel: correctEntry.definition,
      mode: "multiple-choice",
    };
  }

  const options = shuffleList([
    { label: correctEntry.word, isCorrect: true },
    ...distractors.map((entry) => ({
      label: entry.word,
      isCorrect: false,
    })),
  ]);

  return {
    word: correctEntry.word,
    definition: correctEntry.definition,
    sentence: correctEntry.sentences[0],
    prompt: "Choose the word that matches this definition.",
    question: correctEntry.definition,
    typeLabel: "Definition -> word",
    options,
    answerLabel: correctEntry.word,
    mode: "multiple-choice",
  };
}

function renderQuestion() {
  clearLightningTimers();

  if (state.lightningRound.active) {
    state.lightningRound.timerId = window.setInterval(() => {
      state.lightningRound.timeLeft -= 1;
      updateModeControls();

      if (state.lightningRound.timeLeft <= 0) {
        finishLightningRound("time");
      }
    }, 1000);
  }

  if (state.quizScope === "missed" && state.mistakes.size === 0) {
    state.quizScope = "all";
  }

  state.currentQuestion = buildQuestion();
  state.questionAnswered = false;

  elements.questionType.textContent = state.currentQuestion.typeLabel;
  elements.quizQuestion.textContent = state.currentQuestion.question;
  elements.quizFeedback.textContent = state.currentQuestion.prompt;
  elements.quizFeedback.className = "feedback";

  if (state.currentQuestion.mode === "typed") {
    elements.quizOptions.hidden = true;
    elements.quizOptions.replaceChildren();
    elements.typedAnswerForm.hidden = false;
    elements.typedAnswerInput.value = "";
    elements.typedAnswerInput.placeholder = state.currentQuestion.placeholder;
    elements.typedAnswerInput.disabled = false;
  } else {
    elements.quizOptions.hidden = false;
    elements.typedAnswerForm.hidden = true;
    elements.typedAnswerInput.value = "";
    elements.typedAnswerInput.disabled = true;
    elements.quizOptions.replaceChildren(
      ...state.currentQuestion.options.map((option) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "option-button";
        button.textContent = option.label;
        button.addEventListener("click", () => handleChoiceAnswer(button, option.isCorrect));
        return button;
      })
    );
  }

  updateStats();
}

function finishLightningRound(reason) {
  if (!state.lightningRound.active) {
    return;
  }

  clearLightningTimers();

  const answered = 10 - state.lightningRound.remaining;
  const safeAnswered = answered === 0 ? 1 : answered;
  const scoreLine = `${state.lightningRound.correct}/${answered || 0}`;
  const accuracy = Math.round((state.lightningRound.correct / safeAnswered) * 100);

  state.lightningRound.active = false;
  state.lightningRound.lastScore = `Last round: ${scoreLine}`;

  elements.quizFeedback.className = "feedback is-correct";
  elements.quizFeedback.innerHTML = `
    <strong>${reason === "time" ? "Time ran out." : "Lightning round complete."}</strong>
    Score: ${scoreLine} correct.<br />
    Accuracy: ${accuracy}%.
  `;

  updateStats();
}

function applyAnswerOutcome(isCorrect, details = {}) {
  if (!state.currentQuestion || state.questionAnswered) {
    return;
  }

  state.questionAnswered = true;
  state.totalAnswers += 1;

  if (state.currentQuestion.mode === "multiple-choice") {
    const optionButtons = [...elements.quizOptions.querySelectorAll(".option-button")];

    optionButtons.forEach((optionButton) => {
      const matchesCorrect = optionButton.textContent === state.currentQuestion.answerLabel;
      optionButton.disabled = true;
      optionButton.classList.toggle("is-correct", matchesCorrect);
    });

    if (details.button && !isCorrect) {
      details.button.classList.add("is-wrong");
    }
  } else {
    elements.typedAnswerInput.disabled = true;
  }

  if (isCorrect) {
    state.correctAnswers += 1;
    state.streak += 1;

    if (state.quizScope === "missed") {
      state.mistakes.delete(state.currentQuestion.word);
    }

    if (state.lightningRound.active) {
      state.lightningRound.correct += 1;
    }

    elements.quizFeedback.className = "feedback is-correct";
    elements.quizFeedback.innerHTML = `
      <strong>Correct.</strong> <em>${state.currentQuestion.word}</em> means
      "${state.currentQuestion.definition}."<br />
      Example: ${state.currentQuestion.sentence}
    `;
  } else {
    state.streak = 0;
    state.mistakes.set(
      state.currentQuestion.word,
      (state.mistakes.get(state.currentQuestion.word) || 0) + 1
    );

    elements.quizFeedback.className = "feedback is-wrong";
    elements.quizFeedback.innerHTML = `
      <strong>Not quite.</strong> <em>${state.currentQuestion.word}</em> means
      "${state.currentQuestion.definition}."<br />
      Example: ${state.currentQuestion.sentence}
    `;
  }

  renderMissedWords();
  updateStats();

  if (state.lightningRound.active) {
    state.lightningRound.remaining -= 1;
    updateModeControls();

    if (state.lightningRound.remaining <= 0) {
      state.lightningRound.nextQuestionTimerId = window.setTimeout(() => {
        finishLightningRound("complete");
      }, 850);
      return;
    }

    state.lightningRound.nextQuestionTimerId = window.setTimeout(() => {
      renderQuestion();
    }, 850);
  }
}

function handleChoiceAnswer(button, isCorrect) {
  applyAnswerOutcome(isCorrect, { button });
}

function handleTypedAnswer(event) {
  event.preventDefault();

  if (!state.currentQuestion || state.questionAnswered) {
    return;
  }

  const typedAnswer = normalizeText(elements.typedAnswerInput.value);
  const correctAnswer = normalizeText(state.currentQuestion.word);

  if (!typedAnswer) {
    elements.quizFeedback.className = "feedback";
    elements.quizFeedback.textContent = "Type a word first, then check your answer.";
    return;
  }

  applyAnswerOutcome(typedAnswer === correctAnswer);
}

function renderMissedWords() {
  const missedEntries = [...state.mistakes.entries()].sort((left, right) => right[1] - left[1]);

  elements.missedCount.textContent = `${missedEntries.length} tracked`;

  if (state.flashcardMode === "missed" && missedEntries.length === 0) {
    state.flashcardMode = "all";
    state.flashcardDeck = [...allWordIndexes];
    state.flashcardDeckPosition = 0;
  }

  if (state.quizScope === "missed" && missedEntries.length === 0 && !state.lightningRound.active) {
    state.quizScope = "all";
  }

  if (missedEntries.length === 0) {
    elements.missedList.replaceChildren();

    const emptyState = document.createElement("p");
    emptyState.className = "review-copy";
    emptyState.textContent = "No missed words yet. Once Emma misses a quiz question, it will show up here.";
    elements.missedList.appendChild(emptyState);
    updateModeControls();
    return;
  }

  elements.missedList.replaceChildren(
    ...missedEntries.map(([word, misses]) => {
      const chip = document.createElement("div");
      chip.className = "chip";
      chip.innerHTML = `<strong>${word}</strong><span class="chip-count">${misses}</span>`;
      return chip;
    })
  );

  updateModeControls();
}

function buildWordBank() {
  const sortedWords = [...vocabWords].sort((left, right) => left.word.localeCompare(right.word));

  elements.wordBankList.replaceChildren(
    ...sortedWords.map((entry) => {
      const details = document.createElement("details");
      details.className = "word-bank-item";

      const summary = document.createElement("summary");
      summary.textContent = entry.word;

      const copy = document.createElement("div");
      copy.className = "word-bank-copy";
      copy.innerHTML = `
        <p><strong>Definition:</strong> ${entry.definition}</p>
        <p><strong>Examples:</strong></p>
      `;

      const list = document.createElement("ul");
      list.className = "sentence-list";
      entry.sentences.forEach((sentence) => {
        const listItem = document.createElement("li");
        listItem.textContent = sentence;
        list.appendChild(listItem);
      });

      copy.appendChild(list);
      details.append(summary, copy);
      return details;
    })
  );
}

function startLightningRound() {
  if (state.lightningRound.active) {
    return;
  }

  clearLightningTimers();
  state.quizFormat = "multiple-choice";
  state.quizScope = "all";
  state.lightningRound.active = true;
  state.lightningRound.remaining = 10;
  state.lightningRound.correct = 0;
  state.lightningRound.timeLeft = 60;
  state.lightningRound.lastScore = "";

  renderQuestion();
}

elements.flashcard.addEventListener("click", toggleFlashcard);
elements.revealCard.addEventListener("click", toggleFlashcard);
elements.previousCard.addEventListener("click", () => moveFlashcard(-1));
elements.nextCard.addEventListener("click", () => moveFlashcard(1));
elements.randomCard.addEventListener("click", () => {
  if (state.flashcardDeck.length <= 1) {
    return;
  }

  let nextPosition = state.flashcardDeckPosition;

  while (nextPosition === state.flashcardDeckPosition) {
    nextPosition = Math.floor(Math.random() * state.flashcardDeck.length);
  }

  state.flashcardDeckPosition = nextPosition;
  state.flashcardRevealed = false;
  renderFlashcard();
});
elements.shuffleCards.addEventListener("click", () => {
  state.flashcardDeck = shuffleList(state.flashcardDeck);
  state.flashcardDeckPosition = 0;
  state.flashcardRevealed = false;
  renderFlashcard();
});
elements.studyAllCards.addEventListener("click", () => {
  setFlashcardMode("all");
});
elements.studyMissedCards.addEventListener("click", () => {
  setFlashcardMode("missed", { shuffle: true });
});

elements.multipleChoiceMode.addEventListener("click", () => {
  state.quizFormat = "multiple-choice";
  renderQuestion();
});
elements.typedMode.addEventListener("click", () => {
  state.quizFormat = "typed";
  renderQuestion();
});
elements.typedAnswerForm.addEventListener("submit", handleTypedAnswer);
elements.startLightning.addEventListener("click", startLightningRound);
elements.nextQuestion.addEventListener("click", renderQuestion);
elements.shuffleQuiz.addEventListener("click", renderQuestion);
elements.practiceMissed.addEventListener("click", () => {
  state.quizScope = state.mistakes.size > 0 ? "missed" : "all";
  renderQuestion();
});
elements.practiceAll.addEventListener("click", () => {
  state.quizScope = "all";
  renderQuestion();
});
elements.clearMissed.addEventListener("click", () => {
  state.mistakes.clear();
  state.quizScope = "all";
  renderMissedWords();
  renderQuestion();
  renderFlashcard();
});

elements.jumpButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-jump");
    const target = document.getElementById(targetId);

    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

const revealNodes = document.querySelectorAll(".reveal");

if (!("IntersectionObserver" in window)) {
  revealNodes.forEach((node) => {
    node.classList.add("is-visible");
  });
} else {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
    }
  );

  revealNodes.forEach((node, index) => {
    node.style.transitionDelay = `${index * 70}ms`;
    revealObserver.observe(node);
  });
}

buildWordBank();
renderMissedWords();
renderFlashcard();
renderQuestion();
