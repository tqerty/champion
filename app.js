// ========== КОНСТАНТЫ ==========

const ACHIEVEMENT_XP = 25;
const THANK_YOU_LETTER_XP = 15;

const RANKS = [
  { id: 'ryadovoy', name: 'Рядовой', xp: 0, order: 0, modules: 1,
    desc: 'Начальное воинское звание. Первый шаг на пути воина.',
    requirements: '0 XP, выполнить базовые квесты',
    bonuses: '+0% XP, доступ к 1 модулю военки',
    capabilities: ['Ежедневные задачи', 'Цели', 'Модуль 1: Основы военной службы'],
    skill: null, dailyQuests: 3 },
  { id: 'efreitor', name: 'Ефрейтор', xp: 100, order: 1, modules: 2,
    desc: 'Звание за проявленную дисциплину и первые достижения.',
    requirements: '100 XP, книга по логике (90 стр)',
    bonuses: '+5% XP, +1 ежедневный квест',
    capabilities: ['Модуль 2: Тактика и оружие', 'Навык: Дисциплина I'],
    skill: 'Дисциплина I', dailyQuests: 4 },
  { id: 'ml_sergeant', name: 'Младший сержант', xp: 250, order: 2, modules: 3,
    desc: 'Командир отделения. Первый шаг в командовании.',
    requirements: '250 XP, 5ч программирования, 5 тренировок',
    bonuses: '+8% XP, доступ к спец-миссиям',
    capabilities: ['Модуль 3: Уставы и ритуалы', 'Сложные квесты'],
    skill: 'Лидерство I', dailyQuests: 4 },
  { id: 'sergeant', name: 'Сержант', xp: 500, order: 3, modules: 4,
    desc: 'Опытный командир. Ведёт подразделение в бою.',
    requirements: '500 XP, 10ч программирования, 10 тренировок, тест структуры ВС',
    bonuses: '+10% XP, новые типы задач',
    capabilities: ['Модуль 4: Оружие и тактика', 'Спец-миссии'],
    skill: 'Лидерство II', dailyQuests: 5 },
  { id: 'st_sergeant', name: 'Старший сержант', xp: 800, order: 4, modules: 5,
    desc: 'Заместитель командира взвода. Высокая ответственность.',
    requirements: '800 XP, 20ч программирования, 20 тренировок, тест АК-47',
    bonuses: '+12% XP',
    capabilities: ['Модуль 5: Тактическая подготовка'],
    skill: 'Тактика I', dailyQuests: 5 },
  { id: 'starshina', name: 'Старшина', xp: 1200, order: 5, modules: 6,
    desc: 'Старший по званию среди сержантов роты.',
    requirements: '1200 XP',
    bonuses: '+15% XP',
    capabilities: ['Модуль 6: Военная администрация'],
    skill: 'Организация I', dailyQuests: 5 },
  { id: 'praporshik', name: 'Прапорщик', xp: 1700, order: 6, modules: 7,
    desc: 'Специалист. Техническая и административная работа.',
    requirements: '1700 XP',
    bonuses: '+18% XP',
    capabilities: ['Модуль 7: Специальная подготовка'],
    skill: 'Специализация I', dailyQuests: 6 },
  { id: 'st_praporshik', name: 'Старший прапорщик', xp: 2300, order: 7, modules: 8,
    desc: 'Старший специалист. Руководство техническими подразделениями.',
    requirements: '2300 XP',
    bonuses: '+20% XP',
    capabilities: ['Модуль 8: Оперативное искусство'],
    skill: 'Специализация II', dailyQuests: 6 },
  { id: 'ml_lieutenant', name: 'Младший лейтенант', xp: 3000, order: 8, modules: 9,
    desc: 'Первое офицерское звание. Командир взвода.',
    requirements: '3000 XP, тест тактики',
    bonuses: '+22% XP, выбор специализации',
    capabilities: ['Модуль 9: Офицерская подготовка', 'Специализация: Стратег/Воин/Универсал'],
    skill: 'Командование I', dailyQuests: 6 },
  { id: 'lieutenant', name: 'Лейтенант', xp: 4000, order: 9, modules: 10,
    desc: 'Офицер. Командует взводом.',
    requirements: '4000 XP',
    bonuses: '+25% XP',
    capabilities: ['Модуль 10: Стратегическое мышление'],
    skill: 'Командование II', dailyQuests: 7 },
  { id: 'st_lieutenant', name: 'Старший лейтенант', xp: 5200, order: 10, modules: 11,
    desc: 'Старший офицер взвода. Заместитель командира роты.',
    requirements: '5200 XP, тест званий',
    bonuses: '+28% XP',
    capabilities: ['Модуль 11: Управление подразделением'],
    skill: 'Стратегия I', dailyQuests: 7 },
  { id: 'captain', name: 'Капитан', xp: 6600, order: 11, modules: 12,
    desc: 'Командир роты. Ключевая должность в структуре.',
    requirements: '6600 XP',
    bonuses: '+30% XP',
    capabilities: ['Модуль 12: Рота в бою'],
    skill: 'Стратегия II', dailyQuests: 8 },
  { id: 'major', name: 'Майор', xp: 8200, order: 12, modules: 13,
    desc: 'Заместитель командира батальона.',
    requirements: '8200 XP, тест устава',
    bonuses: '+33% XP',
    capabilities: ['Модуль 13: Батальонные операции'],
    skill: 'Оперативное искусство I', dailyQuests: 8 },
  { id: 'podpolkovnik', name: 'Подполковник', xp: 10000, order: 13, modules: 14,
    desc: 'Командир батальона.',
    requirements: '10000 XP',
    bonuses: '+35% XP',
    capabilities: ['Модуль 14: Тактика соединений'],
    skill: 'Оперативное искусство II', dailyQuests: 9 },
  { id: 'polkovnik', name: 'Полковник', xp: 12000, order: 14, modules: 15,
    desc: 'Командир полка.',
    requirements: '12000 XP',
    bonuses: '+38% XP',
    capabilities: ['Модуль 15: Полковая тактика'],
    skill: 'Стратегия III', dailyQuests: 9 },
  { id: 'gen_major', name: 'Генерал-майор', xp: 14500, order: 15, modules: 16,
    desc: 'Генеральское звание. Командует дивизией.',
    requirements: '14500 XP',
    bonuses: '+40% XP',
    capabilities: ['Модуль 16: Дивизионные операции'],
    skill: 'Стратегия IV', dailyQuests: 10 },
  { id: 'gen_lieutenant', name: 'Генерал-лейтенант', xp: 17500, order: 16, modules: 17,
    desc: 'Командует корпусом или армией.',
    requirements: '17500 XP',
    bonuses: '+42% XP',
    capabilities: ['Модуль 17: Армейские операции'],
    skill: 'Верховное командование I', dailyQuests: 10 },
  { id: 'gen_polkovnik', name: 'Генерал-полковник', xp: 21000, order: 17, modules: 18,
    desc: 'Высший генеральский состав.',
    requirements: '21000 XP',
    bonuses: '+45% XP',
    capabilities: ['Модуль 18: Стратегическое планирование'],
    skill: 'Верховное командование II', dailyQuests: 11 },
  { id: 'gen_armii', name: 'Генерал армии', xp: 25000, order: 18, modules: 19,
    desc: 'Высшее войсковое звание до Маршала.',
    requirements: '25000 XP',
    bonuses: '+48% XP',
    capabilities: ['Модуль 19: Военная доктрина государства'],
    skill: 'Верховное командование III', dailyQuests: 12 },
  { id: 'marshal', name: 'Маршал РФ', xp: 30000, order: 19, modules: 20,
    desc: 'Высшее воинское звание Российской Федерации.',
    requirements: '30000 XP',
    bonuses: '+50% XP',
    capabilities: ['Все модули', 'Максимальные возможности'],
    skill: 'Маршал', dailyQuests: 15 }
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
  },
  oath: {
    title: 'Военная присяга',
    questions: [
      { q: 'Перед чем приносится военная присяга?', options: ['Перед командиром', 'Перед Государственным флагом РФ и Боевым Знаменем', 'Перед строем'], correct: 1 },
      { q: 'Что клянётся соблюдать военнослужащий в присяге?', options: ['Только приказы', 'Конституцию РФ и воинские уставы', 'Только уставы'], correct: 1 },
      { q: 'Что защищает военнослужащий по присяге?', options: ['Только границы', 'Свободу, независимость и конституционный строй России', 'Только командиров'], correct: 1 }
    ]
  },
  duties: {
    title: 'Обязанности рядового',
    questions: [
      { q: 'Что обязан выполнять рядовой?', options: ['Только приказы', 'Требования воинских уставов и приказы командиров', 'Только уставы'], correct: 1 },
      { q: 'Чему должен быть верен военнослужащий?', options: ['Только командиру', 'Военной присяге', 'Только части'], correct: 1 },
      { q: 'Что должен дорожить военнослужащий?', options: ['Только оружием', 'Честью и боевой славой', 'Только формой'], correct: 1 }
    ]
  },
  symbols: {
    title: 'Символы и ритуалы',
    questions: [
      { q: 'Что такое Боевое Знамя?', options: ['Флаг части', 'Символ воинской части, чести и доблести', 'Награда'], correct: 1 },
      { q: 'Когда исполняется Гимн РФ?', options: ['Каждый день', 'При торжественных церемониях', 'Только на параде'], correct: 1 },
      { q: 'Какой день — День Победы?', options: ['22 июня', '9 мая', '7 ноября'], correct: 1 }
    ]
  },
  drill: {
    title: 'Строевая подготовка',
    questions: [
      { q: 'Что такое строй?', options: ['Марш', 'Установленное размещение военнослужащих для совместных действий', 'Команда'], correct: 1 },
      { q: 'Что такое шеренга?', options: ['Колонна', 'Строй, в котором военнослужащие на одной линии', 'Ряд'], correct: 1 },
      { q: 'На какую высоту выносится нога при строевом шаге?', options: ['5–10 см', '15–20 см', '25–30 см'], correct: 1 }
    ]
  }
};

const ALL_TEST_IDS = ['structure', 'tactics', 'ranks_mil', 'ak47', 'charter', 'oath', 'duties', 'symbols', 'drill'];

const MEDALS = [
  { id: 'streak_7', icon: '🥇', name: '7 дней без пропуска', desc: 'Выполняй задачи 7 дней подряд', check: s => s.streakDays >= 7 },
  { id: 'streak_30', icon: '🏅', name: '30 дней без пропуска', desc: 'Месяц дисциплины', check: s => s.streakDays >= 30 },
  { id: 'tasks_100', icon: '🎯', name: '100 задач выполнено', desc: 'Сто побед над собой', check: s => (s.totalTasksCompleted || 0) >= 100 },
  { id: 'learn_50h', icon: '🧠', name: '50 часов обучения', desc: 'Программирование + чтение', check: s => { const g = (s.goals || []).find(g => g.templateId === 'logic_book'); return (s.programHours || 0) + (g ? (g.currentValue || 0) : 0) >= 50; } },
  { id: 'all_tests_medal', icon: '📋', name: 'Курсант-отличник', desc: 'Все военные тесты пройдены', check: s => ALL_TEST_IDS.every(id => s.questProgress[TEST_TO_QUEST[id]] || s.testsPassed[id]) },
  { id: 'thank_you_3', icon: '📜', name: 'Три благодарности', desc: 'Три благодарственных письма', check: s => (s.thankYouLetters || 0) >= 3 }
];

const SPECIALIZATIONS = [
  { id: 'strategist', icon: '🧠', name: 'Стратег-инженер', desc: 'Учёба, математика, программирование' },
  { id: 'warrior', icon: '🏋️', name: 'Воин', desc: 'Физподготовка, выносливость' },
  { id: 'universal', icon: '⚔️', name: 'Мастер на все руки', desc: 'Универсал — всё вместе' }
];

const MILITARY_DOCTRINE = [
  'Не пропускать тренировки',
  'Не обманывать систему',
  'Улучшаться каждый день',
  'Выполнять приказы (свои цели)',
  'Дорожить честью и славой'
];

// ========== СОСТОЯНИЕ ==========

let state = {
  totalXP: 0,
  currentRankIndex: 0,
  goals: [],
  tasks: [],
  achievements: [],
  lastTaskResetDate: null,
  totalTasksCompleted: 0,
  thankYouLetters: 0,
  specialization: null,
  questProgress: {
    read_logic: false,
    program_5h: false, program_10h: false, program_20h: false,
    train_5: false, train_10: false, train_20: false,
    military_test: false, tactics_test: false, ranks_test: false,
    ak47_test: false, charter_test: false,
    oath_test: false, duties_test: false, symbols_test: false, drill_test: false
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
  updateQuestProgressFromGoals();
  recalculateRank();
  resetDailyTasksIfNeeded();
  checkMedals();
}

function resetDailyTasksIfNeeded() {
  const today = new Date().toDateString();
  if (state.lastTaskResetDate !== today) {
    state.tasks.forEach(t => { t.done = false; });
    state.lastTaskResetDate = today;
    saveState();
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
  
  const readiness = getCombatReadiness();
  const readinessEl = document.getElementById('combatReadiness');
  const dot = readinessEl?.querySelector('.readiness-dot');
  const textEl = document.getElementById('readinessText');
  if (readinessEl) readinessEl.className = 'combat-readiness readiness-' + readiness;
  if (dot) dot.textContent = readiness === 'high' ? '🟢' : readiness === 'medium' ? '🟡' : '🔴';
  if (textEl) textEl.textContent = readiness === 'high' ? 'Высокая' : readiness === 'medium' ? 'Средняя' : 'Критическая';
}

function updateShoulderStraps(rankOrder) {
  const insigniaContainers = document.querySelectorAll('.strap-insignia');
  const [html, layout] = getRankInsigniaHTML(rankOrder);
  insigniaContainers.forEach(container => {
    container.className = 'strap-insignia ' + layout;
    container.innerHTML = html;
  });
  document.querySelectorAll('.strap').forEach(strap => {
    strap.style.background = rankOrder < 6 ? '#4a3728' : rankOrder < 12 ? '#2d3a2d' : '#3d3520';
  });
}

function getRankInsigniaHTML(rankOrder) {
  const star = (cls = '') => `<span class="insignia-star ${cls}">★</span>`;
  const stripe = '<span class="insignia-stripe"></span>';
  const stripeWide = '<span class="insignia-stripe wide"></span>';
  if (rankOrder === 0) return ['', 'empty'];
  if (rankOrder === 1) return [stripe, 'stripes'];
  if (rankOrder === 2) return [stripe + stripe, 'stripes'];
  if (rankOrder === 3) return [stripe + stripe + stripe, 'stripes'];
  if (rankOrder === 4) return [stripeWide, 'stripes'];
  if (rankOrder === 5) return [stripeWide + stripe, 'stripes'];
  if (rankOrder === 6) return [star() + star(), 'stars'];
  if (rankOrder === 7) return [star() + star() + star(), 'stars'];
  if (rankOrder >= 8 && rankOrder <= 11) return [Array(rankOrder - 7).fill(0).map(() => star()).join(''), 'stars'];
  if (rankOrder >= 12 && rankOrder <= 14) return [Array(rankOrder - 11).fill(0).map(() => star('big')).join(''), 'stars'];
  return [star('marshal'), 'stars'];
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

function renderCareerTimeline() {
  const container = document.getElementById('careerTimeline');
  if (!container) return;
  const maxShow = 10;
  const start = Math.max(0, state.currentRankIndex - 2);
  const end = Math.min(RANKS.length, start + maxShow);
  const visible = RANKS.slice(start, end);
  container.innerHTML = `
    <div class="timeline-track">
      ${visible.map((r, idx) => {
        const i = start + idx;
        const unlocked = state.totalXP >= r.xp && allQuestsCompletedForRank(i);
        const current = i === state.currentRankIndex;
        return `
          <div class="timeline-node ${unlocked ? 'unlocked' : ''} ${current ? 'current' : ''}" data-rank="${i}">
            <div class="timeline-dot"></div>
            <div class="timeline-label">${r.name}</div>
          </div>
        `;
      }).join('')}
    </div>
    <p class="timeline-you">Ты здесь: <strong>${RANKS[state.currentRankIndex].name}</strong></p>
  `;
}

function renderRankDetail() {
  const container = document.getElementById('rankDetailCard');
  if (!container) return;
  const r = RANKS[state.currentRankIndex];
  container.innerHTML = `
    <div class="rank-detail">
      <h3>${r.name}</h3>
      <p class="rank-desc">${r.desc || ''}</p>
      <div class="rank-meta">
        <div><strong>📌 Требования:</strong> ${r.requirements || r.xp + ' XP'}</div>
        <div><strong>🎁 Бонусы:</strong> ${r.bonuses || ''}</div>
        <div><strong>🔓 Возможности:</strong></div>
        <ul>${(r.capabilities || []).map(c => `<li>${c}</li>`).join('')}</ul>
        ${r.skill ? `<div><strong>Навык:</strong> ${r.skill}</div>` : ''}
      </div>
    </div>
  `;
}

function renderMilitaryTabs() {
  const rank = RANKS[state.currentRankIndex];
  const modules = rank?.modules || 1;
  const tabOrder = ['structure','oath','duties','symbols','drill','tactics','ranks_mil','ak47','charter','tactical_combat','squad_drill','topography','military_basics','discipline_charter'];
  document.querySelectorAll('.tab-btn').forEach(btn => {
    const testId = btn.dataset.test;
    if (testId) {
      const questKey = TEST_TO_QUEST[testId];
      const passed = state.questProgress[questKey] || state.testsPassed[testId];
      const check = btn.querySelector('.tab-check');
      if (check) {
        check.textContent = passed ? ' ✓' : '';
        check.classList.toggle('passed', !!passed);
      }
    }
    const tabId = btn.dataset.tab;
    const tabIdx = tabOrder.indexOf(tabId);
    const moduleForTab = tabIdx < 5 ? 1 : 2;
    btn.classList.toggle('locked', tabIdx >= 0 && moduleForTab > modules);
  });
}

function renderOfficersSection() {
  const section = document.getElementById('officers');
  const navLink = document.querySelector('a[href="#officers"]');
  const isOfficer = state.currentRankIndex >= 8;
  if (section) {
    section.style.display = isOfficer ? 'block' : 'none';
  }
  if (navLink) {
    navLink.style.display = isOfficer ? 'flex' : 'none';
  }
}

function renderMedals() {
  const container = document.getElementById('medalsGrid');
  if (!container) return;
  state.medals = state.medals || [];
  container.innerHTML = MEDALS.map(m => {
    const unlocked = state.medals.includes(m.id);
    return `
      <div class="medal-item ${unlocked ? 'unlocked' : ''}" data-id="${m.id}">
        <div class="medal-icon">${m.icon}</div>
        <div class="medal-name">${m.name}</div>
        <div class="medal-desc">${m.desc}</div>
      </div>
    `;
  }).join('');
}

function renderDoctrine() {
  const container = document.getElementById('doctrineList');
  if (!container) return;
  container.innerHTML = MILITARY_DOCTRINE.map((rule, i) => `
    <div class="doctrine-item">
      <span class="doctrine-num">${i + 1}</span>
      <span class="doctrine-text">${rule}</span>
    </div>
  `).join('');
}

function renderSpecialization() {
  const container = document.getElementById('specializationGrid');
  if (!container) return;
  const canChoose = state.currentRankIndex >= 8;
  const current = state.specialization;
  container.innerHTML = SPECIALIZATIONS.map(s => `
    <div class="spec-item ${current === s.id ? 'selected' : ''} ${!canChoose ? 'locked' : ''}" data-id="${s.id}">
      <div class="spec-icon">${s.icon}</div>
      <div class="spec-name">${s.name}</div>
      <div class="spec-desc">${s.desc}</div>
      ${!canChoose ? '<p class="spec-lock">Требуется: Младший лейтенант</p>' : ''}
    </div>
  `).join('');
}

function initSpecializationClick() {
  const container = document.getElementById('specializationGrid');
  if (!container) return;
  container.onclick = (e) => {
    const item = e.target.closest('.spec-item');
    if (!item || item.classList.contains('locked')) return;
    if (state.currentRankIndex < 8) return;
    state.specialization = item.dataset.id;
    saveState();
    renderSpecialization();
  };
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

function getXPMultiplier() {
  const rank = RANKS[state.currentRankIndex];
  if (!rank || !rank.bonuses) return 1;
  const m = rank.bonuses.match(/\+(\d+)% XP/);
  return m ? 1 + parseInt(m[1]) / 100 : 1;
}

function addXP(amount) {
  const mult = getXPMultiplier();
  state.totalXP += Math.round(amount * mult);
  checkRankUp();
  checkAchievements();
  checkMedals();
  saveState();
}

function awardThankYouLetter() {
  state.thankYouLetters = (state.thankYouLetters || 0) + 1;
  addXP(THANK_YOU_LETTER_XP);
  saveState();
}

function checkMedals() {
  state.medals = state.medals || [];
  MEDALS.forEach(m => {
    if (!state.medals.includes(m.id) && m.check(state)) {
      state.medals.push(m.id);
    }
  });
}

function getCombatReadiness() {
  if (!state.lastTaskDate) return 'critical';
  const now = new Date();
  const last = new Date(state.lastTaskDate);
  const diff = Math.floor((now - last) / (1000 * 60 * 60 * 24));
  if (diff <= 1) return 'high';
  if (diff <= 3) return 'medium';
  return 'critical';
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

function recalculateRank() {
  let newRankIndex = 0;
  for (let i = RANKS.length - 1; i >= 0; i--) {
    if (state.totalXP >= RANKS[i].xp && allQuestsCompletedForRank(i)) {
      newRankIndex = i;
      break;
    }
  }
  state.currentRankIndex = newRankIndex;
}

function checkRankUp() {
  const oldRankIndex = state.currentRankIndex;
  recalculateRank();
  if (state.currentRankIndex > oldRankIndex) {
    showRankUpAnimation(RANKS[state.currentRankIndex]);
  }
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
  state.totalTasksCompleted = (state.totalTasksCompleted || 0) + 1;
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
  charter: 'charter_test',
  oath: 'oath_test',
  duties: 'duties_test',
  symbols: 'symbols_test',
  drill: 'drill_test'
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
  renderCareerTimeline();
  renderRankDetail();
  renderRanks();
  renderQuests();
  renderMilitaryTabs();
  renderOfficersSection();
  renderMedals();
  renderDoctrine();
  renderSpecialization();
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
  initSpecializationClick();
  
  document.getElementById('thankYouLetterBtn')?.addEventListener('click', () => {
    if (confirm('Выдать благодарственное письмо за доблестное решение сложных задач и достойные поступки? (+15 XP)')) {
      awardThankYouLetter();
      renderAll();
    }
  });
  
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
