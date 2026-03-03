// ========== КОНСТАНТЫ ==========

const ACHIEVEMENT_XP = 25;

const RANKS = [
  { id: 'ryadovoy', name: 'Рядовой', xp: 0, order: 0 },
  { id: 'efreitor', name: 'Ефрейтор', xp: 100, order: 1 },
  { id: 'ml_sergeant', name: 'Младший сержант', xp: 250, order: 2 },
  { id: 'sergeant', name: 'Сержант', xp: 500, order: 3 },
  { id: 'st_sergeant', name: 'Старший сержант', xp: 800, order: 4 },
  { id: 'starshina', name: 'Старшина', xp: 1200, order: 5 },
  { id: 'praporshik', name: 'Прапорщик', xp: 1700, order: 6 },
  { id: 'st_praporshik', name: 'Старший прапорщик', xp: 2300, order: 7 },
  { id: 'ml_lieutenant', name: 'Младший лейтенант', xp: 3000, order: 8 },
  { id: 'lieutenant', name: 'Лейтенант', xp: 4000, order: 9 },
  { id: 'st_lieutenant', name: 'Старший лейтенант', xp: 5200, order: 10 },
  { id: 'captain', name: 'Капитан', xp: 6600, order: 11 },
  { id: 'major', name: 'Майор', xp: 8200, order: 12 },
  { id: 'podpolkovnik', name: 'Подполковник', xp: 10000, order: 13 },
  { id: 'polkovnik', name: 'Полковник', xp: 12000, order: 14 },
  { id: 'gen_major', name: 'Генерал-майор', xp: 14500, order: 15 },
  { id: 'gen_lieutenant', name: 'Генерал-лейтенант', xp: 17500, order: 16 },
  { id: 'gen_polkovnik', name: 'Генерал-полковник', xp: 21000, order: 17 },
  { id: 'gen_armii', name: 'Генерал армии', xp: 25000, order: 18 },
  { id: 'marshal', name: 'Маршал РФ', xp: 30000, order: 19 }
];

const GOAL_TEMPLATES = [
  {
    id: 'logic_book',
    name: 'Прочитать книгу по логике',
    dailyTask: '3 стр по логике',
    dailyXP: 10,
    questTarget: 90,
    perTask: 3,
    questId: 'read_logic'
  }
];

const RANK_QUESTS = {
  efreitor: [
    { id: 'read_logic', name: 'Прочитать книгу по логике (90 стр)', type: 'goal' },
    { id: 'xp_100', name: 'Набрать 100 XP', type: 'xp' }
  ],
  ml_sergeant: [
    { id: 'program_5h', name: 'Попрограммировать 5 часов', type: 'custom' },
    { id: 'train_5', name: 'Потренироваться 5 раз', type: 'custom' },
    { id: 'xp_250', name: 'Набрать 250 XP', type: 'xp' }
  ],
  sergeant: [
    { id: 'program_10h', name: 'Попрограммировать 10 часов', type: 'custom' },
    { id: 'train_10', name: 'Потренироваться 10 раз', type: 'custom' },
    { id: 'military_test', name: 'Тест: структура ВС РФ', type: 'test' },
    { id: 'xp_500', name: 'Набрать 500 XP', type: 'xp' }
  ],
  st_sergeant: [
    { id: 'program_20h', name: 'Попрограммировать 20 часов', type: 'custom' },
    { id: 'train_20', name: 'Потренироваться 20 раз', type: 'custom' },
    { id: 'ak47_test', name: 'Тест: АК-47', type: 'test' },
    { id: 'xp_800', name: 'Набрать 800 XP', type: 'xp' }
  ],
  starshina: [{ id: 'xp_1200', name: 'Набрать 1200 XP', type: 'xp' }],
  praporshik: [{ id: 'xp_1700', name: 'Набрать 1700 XP', type: 'xp' }],
  st_praporshik: [{ id: 'xp_2300', name: 'Набрать 2300 XP', type: 'xp' }],
  ml_lieutenant: [
    { id: 'tactics_test', name: 'Тест: тактика и стратегия', type: 'test' },
    { id: 'xp_3000', name: 'Набрать 3000 XP', type: 'xp' }
  ],
  lieutenant: [{ id: 'xp_4000', name: 'Набрать 4000 XP', type: 'xp' }],
  st_lieutenant: [
    { id: 'ranks_test', name: 'Тест: воинские звания', type: 'test' },
    { id: 'xp_5200', name: 'Набрать 5200 XP', type: 'xp' }
  ],
  captain: [{ id: 'xp_6600', name: 'Набрать 6600 XP', type: 'xp' }],
  major: [{ id: 'charter_test', name: 'Тест: устав ВС РФ', type: 'test' }, { id: 'xp_8200', name: 'Набрать 8200 XP', type: 'xp' }],
  podpolkovnik: [{ id: 'xp_10000', name: 'Набрать 10000 XP', type: 'xp' }],
  polkovnik: [{ id: 'xp_12000', name: 'Набрать 12000 XP', type: 'xp' }],
  gen_major: [{ id: 'xp_14500', name: 'Набрать 14500 XP', type: 'xp' }],
  gen_lieutenant: [{ id: 'xp_17500', name: 'Набрать 17500 XP', type: 'xp' }],
  gen_polkovnik: [{ id: 'xp_21000', name: 'Набрать 21000 XP', type: 'xp' }],
  gen_armii: [{ id: 'xp_25000', name: 'Набрать 25000 XP', type: 'xp' }],
  marshal: [{ id: 'xp_30000', name: 'Набрать 30000 XP', type: 'xp' }]
};

const TESTS = {
  structure: {
    title: 'Структура ВС РФ',
    questions: [
      { q: 'Какие виды войск входят в ВС РФ?', options: ['Только СВ и ВМФ', 'СВ, ВКС, ВМФ, РВСН, ВДВ', 'СВ, ВМФ и полиция'], correct: 1 },
      { q: 'Что означает РВСН?', options: ['Ракетные войска стратегического назначения', 'Разведывательные войска', 'Регулярные войска'], correct: 0 },
      { q: 'Что означает ВДВ?', options: ['Военно-десантные войска', 'Воздушно-десантные войска', 'Воздушные войска'], correct: 1 },
      { q: 'Какой вид войск отвечает за авиацию и ПВО?', options: ['СВ', 'ВКС', 'ВМФ'], correct: 1 }
    ]
  },
  tactics: {
    title: 'Тактика и стратегия',
    questions: [
      { q: 'Что изучает тактика?', options: ['Ведение войны в целом', 'Подготовку и ведение боя подразделениями', 'Политику государства'], correct: 1 },
      { q: 'Какие виды боевых действий включает тактика?', options: ['Только оборону', 'Наступление, оборону, встречный бой', 'Только наступление'], correct: 1 },
      { q: 'Что такое стратегия?', options: ['Ведение отдельного боя', 'Искусство ведения войны в целом', 'Строевая подготовка'], correct: 1 },
      { q: 'Что связывает тактику и стратегию?', options: ['Дисциплинарный устав', 'Оперативное искусство', 'Строевой устав'], correct: 1 }
    ]
  },
  ranks_mil: {
    title: 'Воинские звания',
    questions: [
      { q: 'Какое звание выше?', options: ['Ефрейтор', 'Рядовой', 'Одинаковые'], correct: 0 },
      { q: 'Кто относится к младшим офицерам?', options: ['Сержант', 'Лейтенант', 'Прапорщик'], correct: 1 },
      { q: 'Какое звание старше: майор или подполковник?', options: ['Майор', 'Подполковник', 'Одинаковые'], correct: 1 },
      { q: 'Высшее войсковое звание в РФ?', options: ['Генерал армии', 'Маршал РФ', 'Генерал-полковник'], correct: 1 }
    ]
  },
  ak47: {
    title: 'Устройство АК-47',
    questions: [
      { q: 'Калибр патронов АК-47?', options: ['5,45×39 мм', '7,62×39 мм', '9×18 мм'], correct: 1 },
      { q: 'Ёмкость стандартного магазина?', options: ['20 патронов', '30 патронов', '40 патронов'], correct: 1 },
      { q: 'Что запирает канал ствола при выстреле?', options: ['Затворная рама', 'Затвор', 'УСМ'], correct: 1 },
      { q: 'Что означает УСМ?', options: ['Устройство снаряжения магазина', 'Ударно-спусковой механизм', 'Узел смазки'], correct: 1 }
    ]
  },
  charter: {
    title: 'Устав ВС РФ',
    questions: [
      { q: 'Какой устав определяет права военнослужащих?', options: ['Строевой', 'Внутренней службы', 'Гарнизонной'], correct: 1 },
      { q: 'Какой устав регулирует воинское приветствие?', options: ['Дисциплинарный', 'Строевой', 'Внутренней службы'], correct: 1 },
      { q: 'Что регулирует дисциплинарный устав?', options: ['Построения', 'Воинскую дисциплину', 'Гарнизонную службу'], correct: 1 }
    ]
  }
};

const ALL_TEST_IDS = ['structure', 'tactics', 'ranks_mil', 'ak47', 'charter'];

// ========== СОСТОЯНИЕ ==========

let state = {
  totalXP: 0,
  currentRankIndex: 0,
  goals: [],
  tasks: [],
  achievements: [],
  questProgress: {
    read_logic: false,
    program_5h: false, program_10h: false, program_20h: false,
    train_5: false, train_10: false, train_20: false,
    military_test: false, tactics_test: false, ranks_test: false,
    ak47_test: false, charter_test: false
  },
  testsPassed: {},
  programHours: 0,
  trainCount: 0,
  streakDays: 0,
  lastTaskDate: null
};

// ========== ИНИЦИАЛИЗАЦИЯ ==========

function loadState() {
  const saved = localStorage.getItem('champion_state');
  if (saved) {
    const parsed = JSON.parse(saved);
    state = { ...state, ...parsed };
  }
}

function saveState() {
  localStorage.setItem('champion_state', JSON.stringify(state));
}

// ========== КВЕСТЫ: пересчёт из целей (исправление бага) ==========

function updateQuestProgressFromGoals() {
  state.questProgress.read_logic = false;
  state.goals.forEach(g => {
    if (g.done && (g.templateId === 'logic_book' || (g.text && (g.text.toLowerCase().includes('логик') || g.text.toLowerCase().includes('логике'))))) {
      if (g.templateId === 'logic_book') {
        state.questProgress.read_logic = (g.currentValue || 0) >= (g.questTarget || 90);
      } else {
        state.questProgress.read_logic = true;
      }
    }
  });
}

// ========== РЕНДЕРИНГ ==========

function renderCharacter() {
  const rank = RANKS[state.currentRankIndex];
  const nextRank = RANKS[state.currentRankIndex + 1];
  
  document.getElementById('displayRank').textContent = rank.name;
  document.getElementById('characterName').textContent = rank.name + ' Минь';
  document.getElementById('totalXP').textContent = state.totalXP;
  
  if (nextRank) {
    const xpInRank = state.totalXP - rank.xp;
    const xpNeeded = nextRank.xp - rank.xp;
    const percent = Math.min(100, (xpInRank / xpNeeded) * 100);
    document.getElementById('xpFill').style.width = percent + '%';
    const questsDone = allQuestsCompletedForRank(state.currentRankIndex + 1);
    const xpEnough = state.totalXP >= nextRank.xp;
    document.getElementById('xpToNext').textContent = xpEnough && !questsDone
      ? `До ${nextRank.name}: выполни квесты!`
      : `До ${nextRank.name}: ${Math.max(0, nextRank.xp - state.totalXP)} XP`;
  } else {
    document.getElementById('xpFill').style.width = '100%';
    document.getElementById('xpToNext').textContent = 'Максимальное звание!';
  }
  
  updateShoulderStraps(rank.order);
  document.getElementById('rankBadge').textContent = rank.name.split(' ')[0];
}

function updateShoulderStraps(rankOrder) {
  const straps = document.querySelectorAll('.strap');
  straps.forEach(strap => {
    strap.style.background = rankOrder < 5 ? '#4a3728' : rankOrder < 12 ? '#2d3a2d' : '#3d3520';
  });
}

function renderAchievements() {
  const grid = document.getElementById('achievementsGrid');
  const allIds = ['first_task', 'efreitor', 'sergeant', 'starshina', 'praporshik', 'officer_career', 'captain', 'major',
    'logic_book', 'logic_pages', 'programming', 'fitness', 'military_test', 'ak47', 'all_tests',
    'week_streak', 'month_streak'];
  
  allIds.forEach(id => {
    const el = grid.querySelector(`[data-id="${id}"]`);
    if (el && state.achievements.includes(id)) {
      el.classList.add('unlocked');
    } else if (el) {
      el.classList.remove('unlocked');
    }
  });
}

function renderGoals() {
  const list = document.getElementById('goalsList');
  list.innerHTML = state.goals.map((g, i) => {
    const progress = g.templateId ? ` (${g.currentValue || 0}/${g.questTarget || 90})` : '';
    return `
    <div class="goal-item ${g.done ? 'done' : ''}" data-index="${i}">
      <div class="goal-check ${g.done ? 'checked' : ''}" data-index="${i}" data-toggle></div>
      <span class="goal-text">${escapeHtml(g.text)}${progress}</span>
      <button class="delete-btn goal-delete" data-index="${i}">×</button>
    </div>
  `;
  }).join('');
}

function renderTasks() {
  const list = document.getElementById('tasksList');
  list.innerHTML = state.tasks.map((t, i) => `
    <div class="task-item ${t.done ? 'done' : ''}" data-index="${i}">
      <div class="task-check ${t.done ? 'checked' : ''}" data-index="${i}" data-toggle></div>
      <span class="task-text">${escapeHtml(t.text)}</span>
      <span class="task-xp">+${t.xp} XP</span>
      <button class="delete-btn task-delete" data-index="${i}">×</button>
    </div>
  `).join('');
}

function renderRanks() {
  const container = document.getElementById('ranksProgress');
  container.innerHTML = RANKS.map((r, i) => {
    const hasXP = state.totalXP >= r.xp;
    const questsDone = allQuestsCompletedForRank(i);
    const unlocked = hasXP && questsDone;
    const current = i === state.currentRankIndex;
    const blocked = hasXP && !questsDone ? ' blocked' : '';
    return `
      <div class="rank-item ${unlocked ? 'unlocked' : ''} ${current ? 'current' : ''}${blocked}">
        <div class="rank-number">${i + 1}</div>
        <div class="rank-name">${r.name}</div>
        <div class="rank-req">${r.xp} XP${!questsDone && hasXP ? ' (выполни квесты!)' : ''}</div>
      </div>
    `;
  }).join('');
}

function renderQuests() {
  const container = document.getElementById('questsList');
  const nextRank = RANKS[state.currentRankIndex + 1];
  
  if (!nextRank) {
    container.innerHTML = '<p>Поздравляем! Вы достигли максимального звания — Маршал РФ! 🎉</p>';
    return;
  }
  
  const quests = RANK_QUESTS[nextRank.id] || [{ id: 'xp', name: `Набрать ${nextRank.xp} XP`, type: 'xp' }];
  
  const getReqStatus = (q) => {
    if (q.type === 'xp') return state.totalXP >= nextRank.xp;
    if (q.type === 'test') return state.questProgress[q.id];
    if (q.type === 'custom') {
      if (q.id === 'program_5h') return state.programHours >= 5;
      if (q.id === 'program_10h') return state.programHours >= 10;
      if (q.id === 'program_20h') return state.programHours >= 20;
      if (q.id === 'train_5') return state.trainCount >= 5;
      if (q.id === 'train_10') return state.trainCount >= 10;
      if (q.id === 'train_20') return state.trainCount >= 20;
    }
    if (q.type === 'goal') return state.questProgress[q.id];
    return false;
  };
  
  const doneCount = quests.filter(getReqStatus).length;
  const questPercent = Math.round((doneCount / quests.length) * 100);
  container.innerHTML = `
    <div class="quest-card">
      <h3 class="quest-title">Квесты для звания: ${nextRank.name}</h3>
      <div class="quest-progress-bar">
        <div class="quest-progress-fill" style="width: ${questPercent}%"></div>
      </div>
      <p class="quest-progress-label">${doneCount} из ${quests.length} квестов</p>
      <div class="quest-requirements">
        ${quests.map(q => `
          <span class="quest-req ${getReqStatus(q) ? 'done' : ''}">${q.name} ${getReqStatus(q) ? '✓' : ''}</span>
        `).join('')}
      </div>
      <p class="quest-desc" style="margin-top:16px">Прогресс: программирование ${state.programHours}ч, тренировки ${state.trainCount} раз</p>
    </div>
  `;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// ========== ЛОГИКА ==========

function addXP(amount) {
  state.totalXP += amount;
  checkRankUp();
  checkAchievements();
  saveState();
}

function unlockAchievement(id) {
  if (!state.achievements.includes(id)) {
    state.achievements.push(id);
    addXP(ACHIEVEMENT_XP);
  }
}

function allQuestsCompletedForRank(rankIndex) {
  const rank = RANKS[rankIndex];
  const quests = RANK_QUESTS[rank.id];
  if (!quests) return true;
  const nextRank = rank;
  const getReqStatus = (q) => {
    if (q.type === 'xp') return state.totalXP >= rank.xp;
    if (q.type === 'test') return state.questProgress[q.id];
    if (q.type === 'custom') {
      if (q.id === 'program_5h') return state.programHours >= 5;
      if (q.id === 'program_10h') return state.programHours >= 10;
      if (q.id === 'program_20h') return state.programHours >= 20;
      if (q.id === 'train_5') return state.trainCount >= 5;
      if (q.id === 'train_10') return state.trainCount >= 10;
      if (q.id === 'train_20') return state.trainCount >= 20;
    }
    if (q.type === 'goal') return state.questProgress[q.id];
    return false;
  };
  return quests.every(getReqStatus);
}

function checkRankUp() {
  let newRankIndex = state.currentRankIndex;
  for (let i = RANKS.length - 1; i >= 0; i--) {
    if (state.totalXP >= RANKS[i].xp && allQuestsCompletedForRank(i)) {
      newRankIndex = i;
      break;
    }
  }
  if (newRankIndex > state.currentRankIndex) {
    showRankUpAnimation(RANKS[newRankIndex]);
  }
  state.currentRankIndex = newRankIndex;
}

function showRankUpAnimation(rank) {
  const overlay = document.getElementById('rankUpOverlay');
  document.getElementById('rankUpRankName').textContent = rank.name;
  overlay.classList.add('active');
  setTimeout(() => {
    overlay.classList.remove('active');
  }, 3000);
}

function checkAchievements() {
  if (state.totalXP > 0) unlockAchievement('first_task');
  if (state.currentRankIndex >= 1) unlockAchievement('efreitor');
  if (state.currentRankIndex >= 3) unlockAchievement('sergeant');
  if (state.currentRankIndex >= 4) unlockAchievement('starshina');
  if (state.currentRankIndex >= 6) unlockAchievement('praporshik');
  if (state.currentRankIndex >= 8) unlockAchievement('officer_career');
  if (state.currentRankIndex >= 11) unlockAchievement('captain');
  if (state.currentRankIndex >= 12) unlockAchievement('major');
  if (state.questProgress.read_logic) unlockAchievement('logic_book');
  if (getLogicPagesRead() >= 90) unlockAchievement('logic_pages');
  if (state.programHours >= 10) unlockAchievement('programming');
  if (state.trainCount >= 20) unlockAchievement('fitness');
  if (state.questProgress.military_test) unlockAchievement('military_test');
  if (state.questProgress.ak47_test) unlockAchievement('ak47');
  if (state.streakDays >= 7) unlockAchievement('week_streak');
  if (state.streakDays >= 30) unlockAchievement('month_streak');
  if (ALL_TEST_IDS.every(id => state.questProgress[TEST_TO_QUEST[id]] || state.testsPassed[id])) unlockAchievement('all_tests');
}

function getLogicPagesRead() {
  const goal = state.goals.find(g => g.templateId === 'logic_book');
  return goal ? (goal.currentValue || 0) : 0;
}

function completeTask(index) {
  const task = state.tasks[index];
  if (!task) return;
  if (task.done) {
    uncompleteTask(index);
    return;
  }
  task.done = true;
  addXP(task.xp);
  
  if (task.goalId) {
    const goal = state.goals.find(g => g.id === task.goalId);
    if (goal) {
      goal.currentValue = (goal.currentValue || 0) + (goal.perTask || 1);
      if (goal.currentValue >= (goal.questTarget || 90)) {
        goal.done = true;
      }
      updateQuestProgressFromGoals();
      checkAchievements();
    }
  }
  
  const today = new Date().toDateString();
  if (state.lastTaskDate) {
    const last = new Date(state.lastTaskDate);
    const now = new Date();
    const diff = Math.floor((now - last) / (1000 * 60 * 60 * 24));
    if (diff === 0) return;
    if (diff === 1) state.streakDays++;
    else state.streakDays = 1;
  } else {
    state.streakDays = 1;
  }
  state.lastTaskDate = today;
  
  saveState();
}

function uncompleteTask(index) {
  const task = state.tasks[index];
  if (!task || !task.done) return;
  task.done = false;
  if (task.goalId) {
    const goal = state.goals.find(g => g.id === task.goalId);
    if (goal) {
      goal.currentValue = Math.max(0, (goal.currentValue || 0) - (goal.perTask || 1));
      if (goal.currentValue < (goal.questTarget || 90)) {
        goal.done = false;
      }
      updateQuestProgressFromGoals();
    }
  }
  saveState();
}

function toggleGoal(index) {
  const goal = state.goals[index];
  if (!goal) return;
  
  if (goal.done) {
    goal.done = false;
    updateQuestProgressFromGoals();
    checkAchievements();
  } else {
    if (goal.templateId && goal.questTarget) {
      if ((goal.currentValue || 0) >= goal.questTarget) {
        goal.done = true;
      } else {
        return;
      }
    } else {
      goal.done = true;
    }
    const text = (goal.text || '').toLowerCase();
    if (text.includes('логик') || text.includes('логике') || goal.templateId === 'logic_book') {
      updateQuestProgressFromGoals();
    }
    checkAchievements();
  }
  saveState();
}

function completeGoal(index) {
  const goal = state.goals[index];
  if (!goal) return;
  toggleGoal(index);
}

function uncompleteGoal(index) {
  const goal = state.goals[index];
  if (!goal) return;
  goal.done = false;
  updateQuestProgressFromGoals();
  saveState();
}

// ========== ТЕСТЫ ==========

const TEST_TO_QUEST = {
  structure: 'military_test',
  tactics: 'tactics_test',
  ranks_mil: 'ranks_test',
  ak47: 'ak47_test',
  charter: 'charter_test'
};

function showTest(testId) {
  const test = TESTS[testId];
  if (!test) return;
  
  const modal = document.getElementById('testModal');
  document.getElementById('testTitle').textContent = 'Тест: ' + test.title;
  document.getElementById('testBody').innerHTML = test.questions.map((q, i) => `
    <div class="test-question">
      <label>${i + 1}. ${q.q}</label>
      ${q.options.map((opt, j) => `
        <div><input type="radio" name="q${i}" value="${j}"> ${opt}</div>
      `).join('')}
    </div>
  `).join('');
  
  document.getElementById('submitTest').style.display = 'block';
  document.getElementById('submitTest').onclick = () => submitTest(testId);
  modal.classList.add('active');
}

function submitTest(testId) {
  const test = TESTS[testId];
  let correct = 0;
  test.questions.forEach((q, i) => {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && parseInt(selected.value) === q.correct) correct++;
  });
  
  if (correct === test.questions.length) {
    const questKey = TEST_TO_QUEST[testId] || testId + '_test';
    state.questProgress[questKey] = true;
    state.testsPassed[testId] = true;
    addXP(50);
    alert('Тест пройден! +50 XP');
  } else {
    alert(`Правильно ${correct} из ${test.questions.length}. Попробуй ещё раз!`);
    return;
  }
  
  document.getElementById('testModal').classList.remove('active');
  saveState();
  renderAll();
}

// ========== ОБРАБОТЧИКИ ==========

function renderAll() {
  renderCharacter();
  renderAchievements();
  renderGoals();
  renderTasks();
  renderRanks();
  renderQuests();
}

document.getElementById('addGoalBtn').addEventListener('click', () => {
  const input = document.getElementById('goalInput');
  const text = input.value.trim();
  if (!text) return;
  
  const template = GOAL_TEMPLATES.find(t => text.toLowerCase().includes('логик'));
  if (template) {
    const id = 'goal_' + Date.now();
    state.goals.push({
      id, text: template.name, done: false,
      templateId: template.id, questTarget: template.questTarget,
      currentValue: 0, perTask: template.perTask
    });
    state.tasks.push({
      text: template.dailyTask, xp: template.dailyXP, done: false,
      goalId: id
    });
  } else {
    state.goals.push({ text, done: false });
  }
  input.value = '';
  saveState();
  renderGoals();
  renderTasks();
});

document.getElementById('addTaskBtn').addEventListener('click', () => {
  const input = document.getElementById('taskInput');
  const xpInput = document.getElementById('taskXP');
  const text = input.value.trim();
  const xp = parseInt(xpInput.value) || 10;
  if (text) {
    state.tasks.push({ text, xp, done: false });
    input.value = '';
    xpInput.value = 10;
    saveState();
    renderTasks();
  }
});

document.getElementById('goalsList').addEventListener('click', (e) => {
  const check = e.target.closest('.goal-check[data-toggle]');
  const del = e.target.closest('.goal-delete');
  if (check) {
    const idx = parseInt(check.dataset.index);
    const goal = state.goals[idx];
    if (goal.done) {
      uncompleteGoal(idx);
    } else {
      toggleGoal(idx);
    }
    renderAll();
  }
  if (del) {
    const idx = parseInt(del.dataset.index);
    const goal = state.goals[idx];
    if (goal?.templateId) {
      state.tasks = state.tasks.filter(t => t.goalId !== goal.id);
    }
    state.goals.splice(idx, 1);
    saveState();
    renderGoals();
    renderTasks();
  }
});

document.getElementById('tasksList').addEventListener('click', (e) => {
  const check = e.target.closest('.task-check[data-toggle]');
  const del = e.target.closest('.task-delete');
  if (check) {
    completeTask(parseInt(check.dataset.index));
    renderAll();
  }
  if (del) {
    state.tasks.splice(parseInt(del.dataset.index), 1);
    saveState();
    renderTasks();
  }
});

document.getElementById('military').addEventListener('click', (e) => {
  const btn = e.target.closest('[data-test]');
  if (btn) showTest(btn.dataset.test);
});

document.getElementById('closeTest').addEventListener('click', () => {
  document.getElementById('testModal').classList.remove('active');
});

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    const tabId = btn.dataset.tab;
    const tabEl = document.getElementById('tab-' + tabId);
    if (tabEl) tabEl.classList.add('active');
  });
});

document.addEventListener('DOMContentLoaded', () => {
  renderAll();
  
  document.getElementById('addProgram1')?.addEventListener('click', () => {
    state.programHours++;
    addXP(5);
    saveState();
    renderAll();
  });
  document.getElementById('addTrain1')?.addEventListener('click', () => {
    state.trainCount++;
    addXP(5);
    saveState();
    renderAll();
  });
});

// ========== СТАРТ ==========

loadState();

if (state.tasks.length === 0) {
  state.tasks = [
    { text: 'Утренняя зарядка', xp: 10, done: false },
    { text: 'Попрограммировать 1 час', xp: 15, done: false },
    { text: 'Прочитать 20 страниц', xp: 10, done: false }
  ];
}

renderAll();

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target?.scrollIntoView({ behavior: 'smooth' });
  });
});
