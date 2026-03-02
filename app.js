// ========== ДАННЫЕ ==========

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

const RANK_QUESTS = {
  efreitor: [
    { id: 'read_logic', name: 'Прочитать книгу по логике', type: 'goal' },
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
    { id: 'military_test', name: 'Пройди тест по структуре ВС РФ', type: 'test' },
    { id: 'xp_500', name: 'Набрать 500 XP', type: 'xp' }
  ],
  st_sergeant: [
    { id: 'program_20h', name: 'Попрограммировать 20 часов', type: 'custom' },
    { id: 'train_20', name: 'Потренироваться 20 раз', type: 'custom' },
    { id: 'ak47_test', name: 'Пройди тест по АК-47', type: 'test' },
    { id: 'xp_800', name: 'Набрать 800 XP', type: 'xp' }
  ]
};

const TESTS = {
  structure: {
    title: 'Структура ВС РФ',
    questions: [
      { q: 'Какие виды войск входят в ВС РФ?', a: 'СВ, ВКС, ВМФ, РВСН, ВДВ', options: [
        'Только СВ и ВМФ',
        'СВ, ВКС, ВМФ, РВСН, ВДВ',
        'СВ, ВМФ и полиция'
      ], correct: 1 },
      { q: 'Что означает аббревиатура РВСН?', a: 'Ракетные войска стратегического назначения', options: [
        'Ракетные войска стратегического назначения',
        'Разведывательные войска',
        'Регулярные войска'
      ], correct: 0 },
      { q: 'Что означает аббревиатура ВДВ?', a: 'Воздушно-десантные войска', options: [
        'Военно-десантные войска',
        'Воздушно-десантные войска',
        'Воздушные войска'
      ], correct: 1 }
    ]
  },
  ak47: {
    title: 'Устройство АК-47',
    questions: [
      { q: 'Какой калибр патронов у АК-47?', a: '7,62×39 мм', options: [
        '5,45×39 мм',
        '7,62×39 мм',
        '9×18 мм'
      ], correct: 1 },
      { q: 'Ёмкость стандартного магазина АК-47?', a: '30 патронов', options: [
        '20 патронов',
        '30 патронов',
        '40 патронов'
      ], correct: 1 },
      { q: 'Какая деталь запирает канал ствола при выстреле?', a: 'Затвор', options: [
        'Затворная рама',
        'Затвор',
        'УСМ'
      ], correct: 1 }
    ]
  }
};

// ========== СОСТОЯНИЕ ==========

let state = {
  totalXP: 0,
  currentRankIndex: 0,
  goals: [],
  tasks: [],
  completedTasks: [],
  achievements: [],
  questProgress: {
    read_logic: false,
    program_5h: false, program_10h: false, program_20h: false,
    train_5: false, train_10: false, train_20: false,
    military_test: false,
    ak47_test: false
  },
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
    document.getElementById('xpToNext').textContent = `До ${nextRank.name}: ${nextRank.xp - state.totalXP} XP`;
  } else {
    document.getElementById('xpFill').style.width = '100%';
    document.getElementById('xpToNext').textContent = 'Максимальное звание!';
  }
  
  // Погоны в зависимости от звания
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
  const achievementIds = ['first_task', 'efreitor', 'sergeant', 'logic_book', 'programming', 'fitness', 'military_test', 'ak47', 'week_streak'];
  
  achievementIds.forEach(id => {
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
  list.innerHTML = state.goals.map((g, i) => `
    <div class="goal-item ${g.done ? 'done' : ''}" data-index="${i}">
      <div class="goal-check ${g.done ? 'checked' : ''}" data-index="${i}"></div>
      <span class="goal-text">${escapeHtml(g.text)}</span>
      <button class="delete-btn goal-delete" data-index="${i}">×</button>
    </div>
  `).join('');
}

function renderTasks() {
  const list = document.getElementById('tasksList');
  const today = new Date().toDateString();
  
  list.innerHTML = state.tasks.map((t, i) => `
    <div class="task-item ${t.done ? 'done' : ''}" data-index="${i}">
      <div class="task-check ${t.done ? 'checked' : ''}" data-index="${i}"></div>
      <span class="task-text">${escapeHtml(t.text)}</span>
      <span class="task-xp">+${t.xp} XP</span>
      <button class="delete-btn task-delete" data-index="${i}">×</button>
    </div>
  `).join('');
}

function renderRanks() {
  const container = document.getElementById('ranksProgress');
  container.innerHTML = RANKS.map((r, i) => {
    const unlocked = state.totalXP >= r.xp;
    const current = i === state.currentRankIndex;
    return `
      <div class="rank-item ${unlocked ? 'unlocked' : ''} ${current ? 'current' : ''}">
        <div class="rank-number">${i + 1}</div>
        <div class="rank-name">${r.name}</div>
        <div class="rank-req">${r.xp} XP</div>
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
  
  const quests = RANK_QUESTS[nextRank.id] || [
    { id: 'xp', name: `Набрать ${nextRank.xp} XP`, type: 'xp' }
  ];
  
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
  
  container.innerHTML = `
    <div class="quest-card">
      <h3 class="quest-title">Квесты для звания: ${nextRank.name}</h3>
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

function checkRankUp() {
  for (let i = RANKS.length - 1; i >= 0; i--) {
    if (state.totalXP >= RANKS[i].xp) {
      state.currentRankIndex = i;
      break;
    }
  }
}

function checkAchievements() {
  const toAdd = [];
  if (state.totalXP > 0 && !state.achievements.includes('first_task')) toAdd.push('first_task');
  if (state.currentRankIndex >= 1 && !state.achievements.includes('efreitor')) toAdd.push('efreitor');
  if (state.currentRankIndex >= 3 && !state.achievements.includes('sergeant')) toAdd.push('sergeant');
  if (state.questProgress.read_logic && !state.achievements.includes('logic_book')) toAdd.push('logic_book');
  if (state.programHours >= 10 && !state.achievements.includes('programming')) toAdd.push('programming');
  if (state.trainCount >= 20 && !state.achievements.includes('fitness')) toAdd.push('fitness');
  if (state.questProgress.military_test && !state.achievements.includes('military_test')) toAdd.push('military_test');
  if (state.questProgress.ak47_test && !state.achievements.includes('ak47')) toAdd.push('ak47');
  if (state.streakDays >= 7 && !state.achievements.includes('week_streak')) toAdd.push('week_streak');
  state.achievements.push(...toAdd);
}

function completeTask(index) {
  const task = state.tasks[index];
  if (!task || task.done) return;
  task.done = true;
  addXP(task.xp);
  
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

function completeGoal(index) {
  const goal = state.goals[index];
  if (!goal || goal.done) return;
  goal.done = true;
  
  const text = goal.text.toLowerCase();
  if (text.includes('логик') || text.includes('логике')) {
    state.questProgress.read_logic = true;
  }
  
  saveState();
  checkAchievements();
}

// ========== ТЕСТЫ ==========

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
    if (testId === 'structure') state.questProgress.military_test = true;
    if (testId === 'ak47') state.questProgress.ak47_test = true;
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
  if (text) {
    state.goals.push({ text, done: false });
    input.value = '';
    saveState();
    renderGoals();
  }
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
  const check = e.target.closest('.goal-check');
  const del = e.target.closest('.goal-delete');
  if (check) {
    completeGoal(parseInt(check.dataset.index));
    renderAll();
  }
  if (del) {
    state.goals.splice(parseInt(del.dataset.index), 1);
    saveState();
    renderGoals();
  }
});

document.getElementById('tasksList').addEventListener('click', (e) => {
  const check = e.target.closest('.task-check');
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

document.getElementById('startStructureTest').addEventListener('click', () => showTest('structure'));
document.getElementById('startAK47Test').addEventListener('click', () => showTest('ak47'));

document.getElementById('closeTest').addEventListener('click', () => {
  document.getElementById('testModal').classList.remove('active');
});

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    btn.classList.add('active');
    document.getElementById('tab-' + btn.dataset.tab).classList.add('active');
  });
});

// Добавление часов программирования и тренировок
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

// Дефолтные задачи если пусто
if (state.tasks.length === 0) {
  state.tasks = [
    { text: 'Утренняя зарядка', xp: 10, done: false },
    { text: 'Попрограммировать 1 час', xp: 15, done: false },
    { text: 'Прочитать 20 страниц', xp: 10, done: false }
  ];
}

renderAll();

// Плавная прокрутка
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target?.scrollIntoView({ behavior: 'smooth' });
  });
});
