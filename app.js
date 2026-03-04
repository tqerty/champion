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
  { id: 'efreitor', name: 'Ефрейтор', xp: 50, order: 1, modules: 2,
    desc: 'Звание за проявленную дисциплину и первые достижения.',
    requirements: '50 XP, книга по логике (30 стр)',
    bonuses: '+5% XP, +1 ежедневный квест',
    capabilities: ['Модуль 2: Тактика и оружие', 'Навык: Дисциплина I'],
    skill: 'Дисциплина I', dailyQuests: 4 },
  { id: 'ml_sergeant', name: 'Младший сержант', xp: 120, order: 2, modules: 3,
    desc: 'Командир отделения. Первый шаг в командовании.',
    requirements: '250 XP, 5ч программирования, 5 тренировок',
    bonuses: '+8% XP, доступ к спец-миссиям',
    capabilities: ['Модуль 3: Уставы и ритуалы', 'Сложные квесты'],
    skill: 'Лидерство I', dailyQuests: 4 },
  { id: 'sergeant', name: 'Сержант', xp: 220, order: 3, modules: 4,
    desc: 'Опытный командир. Ведёт подразделение в бою.',
    requirements: '500 XP, 10ч программирования, 10 тренировок, тест структуры ВС',
    bonuses: '+10% XP, новые типы задач',
    capabilities: ['Модуль 4: Оружие и тактика', 'Спец-миссии'],
    skill: 'Лидерство II', dailyQuests: 5 },
  { id: 'st_sergeant', name: 'Старший сержант', xp: 350, order: 4, modules: 5,
    desc: 'Заместитель командира взвода. Высокая ответственность.',
    requirements: '800 XP, 20ч программирования, 20 тренировок, тест АК-47',
    bonuses: '+12% XP',
    capabilities: ['Модуль 5: Тактическая подготовка'],
    skill: 'Тактика I', dailyQuests: 5 },
  { id: 'starshina', name: 'Старшина', xp: 500, order: 5, modules: 6,
    desc: 'Старший по званию среди сержантов роты.',
    requirements: '1200 XP',
    bonuses: '+15% XP',
    capabilities: ['Модуль 6: Военная администрация'],
    skill: 'Организация I', dailyQuests: 5 },
  { id: 'praporshik', name: 'Прапорщик', xp: 700, order: 6, modules: 7,
    desc: 'Специалист. Техническая и административная работа.',
    requirements: '1700 XP',
    bonuses: '+18% XP',
    capabilities: ['Модуль 7: Специальная подготовка'],
    skill: 'Специализация I', dailyQuests: 6 },
  { id: 'st_praporshik', name: 'Старший прапорщик', xp: 950, order: 7, modules: 8,
    desc: 'Старший специалист. Руководство техническими подразделениями.',
    requirements: '2300 XP',
    bonuses: '+20% XP',
    capabilities: ['Модуль 8: Оперативное искусство'],
    skill: 'Специализация II', dailyQuests: 6 },
  { id: 'ml_lieutenant', name: 'Младший лейтенант', xp: 1250, order: 8, modules: 9,
    desc: 'Первое офицерское звание. Командир взвода.',
    requirements: '3000 XP, тест тактики',
    bonuses: '+22% XP, выбор специализации',
    capabilities: ['Модуль 9: Офицерская подготовка', 'Специализация: Стратег/Воин/Универсал'],
    skill: 'Командование I', dailyQuests: 6 },
  { id: 'lieutenant', name: 'Лейтенант', xp: 1600, order: 9, modules: 10,
    desc: 'Офицер. Командует взводом.',
    requirements: '4000 XP',
    bonuses: '+25% XP',
    capabilities: ['Модуль 10: Стратегическое мышление'],
    skill: 'Командование II', dailyQuests: 7 },
  { id: 'st_lieutenant', name: 'Старший лейтенант', xp: 2000, order: 10, modules: 11,
    desc: 'Старший офицер взвода. Заместитель командира роты.',
    requirements: '5200 XP, тест званий',
    bonuses: '+28% XP',
    capabilities: ['Модуль 11: Управление подразделением'],
    skill: 'Стратегия I', dailyQuests: 7 },
  { id: 'captain', name: 'Капитан', xp: 2500, order: 11, modules: 12,
    desc: 'Командир роты. Ключевая должность в структуре.',
    requirements: '6600 XP',
    bonuses: '+30% XP',
    capabilities: ['Модуль 12: Рота в бою'],
    skill: 'Стратегия II', dailyQuests: 8 },
  { id: 'major', name: 'Майор', xp: 3100, order: 12, modules: 13,
    desc: 'Заместитель командира батальона.',
    requirements: '8200 XP, тест устава',
    bonuses: '+33% XP',
    capabilities: ['Модуль 13: Батальонные операции'],
    skill: 'Оперативное искусство I', dailyQuests: 8 },
  { id: 'podpolkovnik', name: 'Подполковник', xp: 3800, order: 13, modules: 14,
    desc: 'Командир батальона.',
    requirements: '10000 XP',
    bonuses: '+35% XP',
    capabilities: ['Модуль 14: Тактика соединений'],
    skill: 'Оперативное искусство II', dailyQuests: 9 },
  { id: 'polkovnik', name: 'Полковник', xp: 4600, order: 14, modules: 15,
    desc: 'Командир полка.',
    requirements: '12000 XP',
    bonuses: '+38% XP',
    capabilities: ['Модуль 15: Полковая тактика'],
    skill: 'Стратегия III', dailyQuests: 9 },
  { id: 'gen_major', name: 'Генерал-майор', xp: 5500, order: 15, modules: 16,
    desc: 'Генеральское звание. Командует дивизией.',
    requirements: '14500 XP',
    bonuses: '+40% XP',
    capabilities: ['Модуль 16: Дивизионные операции'],
    skill: 'Стратегия IV', dailyQuests: 10 },
  { id: 'gen_lieutenant', name: 'Генерал-лейтенант', xp: 6600, order: 16, modules: 17,
    desc: 'Командует корпусом или армией.',
    requirements: '17500 XP',
    bonuses: '+42% XP',
    capabilities: ['Модуль 17: Армейские операции'],
    skill: 'Верховное командование I', dailyQuests: 10 },
  { id: 'gen_polkovnik', name: 'Генерал-полковник', xp: 8000, order: 17, modules: 18,
    desc: 'Высший генеральский состав.',
    requirements: '21000 XP',
    bonuses: '+45% XP',
    capabilities: ['Модуль 18: Стратегическое планирование'],
    skill: 'Верховное командование II', dailyQuests: 11 },
  { id: 'gen_armii', name: 'Генерал армии', xp: 9500, order: 18, modules: 19,
    desc: 'Высшее войсковое звание до Маршала.',
    requirements: '25000 XP',
    bonuses: '+48% XP',
    capabilities: ['Модуль 19: Военная доктрина государства'],
    skill: 'Верховное командование III', dailyQuests: 12 },
  { id: 'marshal', name: 'Маршал РФ', xp: 11500, order: 19, modules: 20,
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
    questTarget: 30,
    perTask: 3,
    questId: 'read_logic'
  }
];

const RANK_QUESTS = {
  efreitor: [
    { id: 'read_logic', name: 'Книга по логике (30 стр)', type: 'goal' },
    { id: 'xp_50', name: 'Набрать 50 XP', type: 'xp' }
  ],
  ml_sergeant: [
    { id: 'program_2h', name: 'Попрограммировать 2 часа', type: 'custom' },
    { id: 'train_3', name: 'Потренироваться 3 раза', type: 'custom' },
    { id: 'xp_120', name: 'Набрать 120 XP', type: 'xp' }
  ],
  sergeant: [
    { id: 'program_5h', name: 'Попрограммировать 5 часов', type: 'custom' },
    { id: 'train_5', name: 'Потренироваться 5 раз', type: 'custom' },
    { id: 'military_test', name: 'Тест: структура ВС РФ', type: 'test' },
    { id: 'xp_220', name: 'Набрать 220 XP', type: 'xp' }
  ],
  st_sergeant: [
    { id: 'program_8h', name: 'Попрограммировать 8 часов', type: 'custom' },
    { id: 'train_8', name: 'Потренироваться 8 раз', type: 'custom' },
    { id: 'ak47_test', name: 'Тест: АК-47', type: 'test' },
    { id: 'xp_350', name: 'Набрать 350 XP', type: 'xp' }
  ],
  starshina: [{ id: 'xp_500', name: 'Набрать 500 XP', type: 'xp' }],
  praporshik: [{ id: 'xp_700', name: 'Набрать 700 XP', type: 'xp' }],
  st_praporshik: [{ id: 'xp_950', name: 'Набрать 950 XP', type: 'xp' }],
  ml_lieutenant: [
    { id: 'tactics_test', name: 'Тест: тактика', type: 'test' },
    { id: 'xp_1250', name: 'Набрать 1250 XP', type: 'xp' }
  ],
  lieutenant: [{ id: 'xp_1600', name: 'Набрать 1600 XP', type: 'xp' }],
  st_lieutenant: [
    { id: 'ranks_test', name: 'Тест: звания', type: 'test' },
    { id: 'xp_2000', name: 'Набрать 2000 XP', type: 'xp' }
  ],
  captain: [{ id: 'xp_2500', name: 'Набрать 2500 XP', type: 'xp' }],
  major: [{ id: 'charter_test', name: 'Тест: устав', type: 'test' }, { id: 'xp_3100', name: 'Набрать 3100 XP', type: 'xp' }],
  podpolkovnik: [{ id: 'xp_3800', name: 'Набрать 3800 XP', type: 'xp' }],
  polkovnik: [{ id: 'xp_4600', name: 'Набрать 4600 XP', type: 'xp' }],
  gen_major: [{ id: 'xp_5500', name: 'Набрать 5500 XP', type: 'xp' }],
  gen_lieutenant: [{ id: 'xp_6600', name: 'Набрать 6600 XP', type: 'xp' }],
  gen_polkovnik: [{ id: 'xp_8000', name: 'Набрать 8000 XP', type: 'xp' }],
  gen_armii: [{ id: 'xp_9500', name: 'Набрать 9500 XP', type: 'xp' }],
  marshal: [{ id: 'xp_11500', name: 'Набрать 11500 XP', type: 'xp' }]
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

const CAMPAIGN_OPERATIONS = [
  { id: 'fundament', name: 'Операция «Фундамент»', desc: 'Базовые привычки', icon: '🏗', target: 7, type: 'streak', unit: 'дней' },
  { id: 'iron_discipline', name: 'Операция «Железная дисциплина»', desc: '30 дней без пропусков', icon: '⚙', target: 30, type: 'streak', unit: 'дней' },
  { id: 'engineer', name: 'Операция «Инженер»', desc: '50 часов кода', icon: '💻', target: 50, type: 'program', unit: 'часов' },
  { id: 'analyst', name: 'Операция «Аналитик»', desc: '100 решённых задач', icon: '🎯', target: 100, type: 'tasks', unit: 'задач' }
];

const TITLES = [
  { id: 'iron_discipline', name: 'Железная дисциплина', icon: '⚙', condition: s => s.streakDays >= 30 },
  { id: 'architect', name: 'Архитектор знаний', icon: '📚', condition: s => { const g = (s.goals || []).find(g => g.templateId === 'logic_book'); return (s.programHours || 0) + (g ? (g.currentValue || 0) : 0) >= 100; } },
  { id: 'strategist_year', name: 'Стратег года', icon: '🎖', condition: s => s.currentRankIndex >= 9 }
];

const SECRET_MISSION_XP = 30;
const MISSED_DAY_PENALTY = 0.05;
const DEMOBILIZATION_THRESHOLD = 7;
const REHAB_DAYS_NEEDED = 3;
const CHEST_XP_MIN = 5;
const CHEST_XP_MAX = 25;

// Тренировка солдата: нормативы по званиям (отжимания, приседания, икры/нога 10кг, скручивания, велосипед, книжка)
const SOLDIER_TRAINING_STANDARDS = [
  { rank: 0, pushups: 15, squats: 40, calves: 15, crunches: 15, bicycle: 15, book: 8 },
  { rank: 1, pushups: 25, squats: 60, calves: 20, crunches: 20, bicycle: 20, book: 10 },
  { rank: 2, pushups: 35, squats: 80, calves: 25, crunches: 25, bicycle: 25, book: 12 },
  { rank: 3, pushups: 40, squats: 95, calves: 30, crunches: 30, bicycle: 30, book: 15 },
  { rank: 4, pushups: 50, squats: 100, calves: 30, crunches: 35, bicycle: 35, book: 20 },
  { rank: 5, pushups: 55, squats: 110, calves: 35, crunches: 40, bicycle: 40, book: 22 },
  { rank: 6, pushups: 60, squats: 120, calves: 40, crunches: 45, bicycle: 45, book: 25 },
  { rank: 7, pushups: 65, squats: 130, calves: 45, crunches: 50, bicycle: 50, book: 28 },
  { rank: 8, pushups: 70, squats: 140, calves: 50, crunches: 55, bicycle: 55, book: 30 },
  { rank: 9, pushups: 75, squats: 150, calves: 55, crunches: 60, bicycle: 60, book: 32 },
  { rank: 10, pushups: 80, squats: 160, calves: 60, crunches: 65, bicycle: 65, book: 35 },
  { rank: 11, pushups: 85, squats: 170, calves: 65, crunches: 70, bicycle: 70, book: 38 },
  { rank: 12, pushups: 90, squats: 180, calves: 70, crunches: 75, bicycle: 75, book: 40 },
  { rank: 13, pushups: 95, squats: 190, calves: 75, crunches: 80, bicycle: 80, book: 42 },
  { rank: 14, pushups: 100, squats: 200, calves: 80, crunches: 85, bicycle: 85, book: 45 },
  { rank: 15, pushups: 105, squats: 210, calves: 85, crunches: 90, bicycle: 90, book: 48 },
  { rank: 16, pushups: 110, squats: 220, calves: 90, crunches: 95, bicycle: 95, book: 50 },
  { rank: 17, pushups: 115, squats: 230, calves: 95, crunches: 100, bicycle: 100, book: 55 },
  { rank: 18, pushups: 120, squats: 240, calves: 100, crunches: 110, bicycle: 110, book: 60 },
  { rank: 19, pushups: 130, squats: 250, calves: 110, crunches: 120, bicycle: 120, book: 65 }
];

const RESISTANCE_BAND_EXERCISES = [
  { id: 'band_arms', name: 'Резина на руки', resistance: '5–10 кг', desc: 'На каждую руку' },
  { id: 'band_legs', name: 'Резина на ноги', resistance: '15 кг', desc: 'Приседания, отведения' }
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
    program_2h: false, program_5h: false, program_8h: false,
    train_3: false, train_5: false, train_8: false,
    military_test: false, tactics_test: false, ranks_test: false,
    ak47_test: false, charter_test: false,
    oath_test: false, duties_test: false, symbols_test: false, drill_test: false
  },
  testsPassed: {},
  programHours: 0,
  trainCount: 0,
  streakDays: 0,
  lastTaskDate: null,
  consecutiveMisses: 0,
  demobilized: false,
  rehabDays: 0,
  hardcoreMode: false,
  strategicGoal: null,
  secretMissionActive: null,
  secretMissionDate: null,
  skills: { discipline: 0, focus: 0, intelligence: 0, endurance: 0 },
  skillXP: { discipline: 0, focus: 0, intelligence: 0, endurance: 0 },
  hallOfFame: { maxStreak: 0, maxDayXP: 0, fastestRankUp: null },
  dayXP: 0,
  lastRankUpDate: null,
  titles: [],
  lastChestDate: null,
  soldierTraining: {
    records: { pushups: 50, squats: 100, calves: 30, crunches: 30, bicycle: 30, book: 15 },
    workoutHistory: []
  }
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
  checkDisciplinaryConsequences();
  checkMedals();
  checkTitles();
  trySpawnSecretMission();
}

function trySpawnSecretMission() {
  if (state.demobilized) return;
  const today = new Date().toDateString();
  if (state.secretMissionDate === today) return;
  if (Math.random() < 0.15) {
    state.secretMissionActive = { xp: SECRET_MISSION_XP };
    state.secretMissionDate = today;
    saveState();
  }
}

function checkDisciplinaryConsequences() {
  const today = new Date();
  const lastDate = state.lastTaskDate ? new Date(state.lastTaskDate) : null;
  if (!lastDate) return;
  
  const diffDays = Math.floor((today - lastDate) / (1000 * 60 * 60 * 24));
  if (diffDays <= 1) return;
  
  const missedDays = diffDays - 1;
  state.consecutiveMisses = missedDays;
  
  if (state.demobilized) {
    state.rehabDays = 0;
  } else if (missedDays >= DEMOBILIZATION_THRESHOLD) {
    state.demobilized = true;
  }
  saveState();
}

function applyMissedDayPenalty() {
  const disciplineLevel = state.skills?.discipline || 0;
  const effectiveMisses = Math.max(0, (state.consecutiveMisses || 0) - disciplineLevel);
  const penalty = 1 - Math.min(0.5, effectiveMisses * MISSED_DAY_PENALTY);
  return Math.max(0.5, penalty);
}

function resetConsecutiveMisses() {
  state.consecutiveMisses = 0;
}

function advanceRehabilitation() {
  if (!state.demobilized) return;
  state.rehabDays = (state.rehabDays || 0) + 1;
  if (state.rehabDays >= REHAB_DAYS_NEEDED) {
    state.demobilized = false;
    state.rehabDays = 0;
  }
}

function resetDailyTasksIfNeeded() {
  const today = new Date().toDateString();
  if (state.lastTaskResetDate !== today) {
    state.tasks.forEach(t => { t.done = false; });
    state.lastTaskResetDate = today;
    state.dayXP = 0;
    saveState();
  }
}

function saveState() {
  localStorage.setItem('champion_state', JSON.stringify(state));
}

// ========== КВЕСТЫ: пересчёт из целей (исправление бага) ==========

function updateQuestProgressFromGoals() {
  state.questProgress.read_logic = false;
  const logicTarget = 30;
  state.goals.forEach(g => {
    if (g.templateId === 'logic_book' || (g.text && (g.text.toLowerCase().includes('логик') || g.text.toLowerCase().includes('логике')))) {
      if (g.templateId === 'logic_book') {
        state.questProgress.read_logic = (g.currentValue || 0) >= Math.min(logicTarget, g.questTarget || 30);
      } else {
        state.questProgress.read_logic = (g.currentValue || 0) >= logicTarget || g.done;
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
  
  const status = getMissionStatus();
  const statusEl = document.getElementById('missionStatus');
  const statusDot = statusEl?.querySelector('.status-dot');
  const statusText = document.getElementById('statusText');
  if (statusEl) statusEl.className = 'mission-status status-' + status;
  if (statusDot) statusDot.textContent = status === 'active' ? '🟢' : status === 'prep' ? '🟡' : '🔴';
  if (statusText) statusText.textContent = status === 'active' ? 'В строю' : status === 'prep' ? 'На подготовке' : 'В резерве';
  
  document.getElementById('hardcoreMode').checked = !!state.hardcoreMode;
}

function getMissionStatus() {
  if (!state.lastTaskDate) return 'reserve';
  const diff = Math.floor((new Date() - new Date(state.lastTaskDate)) / (1000 * 60 * 60 * 24));
  if (diff <= 1) return 'active';
  if (diff <= 3) return 'prep';
  return 'reserve';
}

function canOpenChest() {
  const today = new Date().toDateString();
  return state.lastChestDate !== today;
}

function openDailyChest() {
  if (!canOpenChest()) return;
  const xp = CHEST_XP_MIN + Math.floor(Math.random() * (CHEST_XP_MAX - CHEST_XP_MIN + 1));
  state.lastChestDate = new Date().toDateString();
  addXP(xp, 'bonus');
  saveState();
  renderAll();
  const btn = document.getElementById('chestBtn');
  if (btn) {
    btn.classList.add('chest-opened');
    btn.querySelector('.chest-icon').textContent = '✨';
    btn.querySelector('.chest-label').textContent = `+${xp} XP!`;
    setTimeout(() => renderAll(), 2000);
  }
}

function renderDailyChest() {
  const container = document.getElementById('dailyChestContainer');
  const btn = document.getElementById('chestBtn');
  const label = document.getElementById('chestLabel');
  const timer = document.getElementById('chestTimer');
  if (!container || !btn) return;
  
  const available = canOpenChest();
  container.classList.toggle('available', available);
  container.classList.toggle('claimed', !available);
  btn.disabled = !available;
  btn.classList.remove('chest-opened');
  
  if (label) label.textContent = available ? 'Открыть сундук!' : 'Уже открыт сегодня';
  if (timer) {
    if (available) {
      timer.textContent = '';
    } else {
      const now = new Date();
      const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
      const ms = tomorrow - now;
      const h = Math.floor(ms / 3600000);
      const m = Math.floor((ms % 3600000) / 60000);
      timer.textContent = `Через ${h}ч ${m}м`;
    }
  }
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
    const progress = g.templateId ? ` (${g.currentValue || 0}/${g.questTarget || 30})` : '';
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
  const demob = state.demobilized;
  list.innerHTML = state.tasks.map((t, i) => {
    const isComplex = t.xp >= 20;
    const blocked = demob && isComplex;
    return `
    <div class="task-item ${t.done ? 'done' : ''} ${blocked ? 'blocked' : ''}" data-index="${i}">
      <div class="task-check ${t.done ? 'checked' : ''}" data-index="${i}" data-toggle></div>
      <span class="task-text">${escapeHtml(t.text)}</span>
      <span class="task-xp">+${t.xp} XP</span>
      ${blocked ? '<span class="task-blocked">Блок</span>' : ''}
      <button class="delete-btn task-delete" data-index="${i}">×</button>
    </div>
  `}).join('');
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

function renderDisciplineBanner() {
  const el = document.getElementById('disciplineBanner');
  if (!el) return;
  if (state.demobilized) {
    el.style.display = 'block';
    el.className = 'banner banner-discipline banner-demob';
    el.innerHTML = `⚠️ Демобилизация! Сложные миссии заблокированы. Реабилитация: ${state.rehabDays || 0}/${REHAB_DAYS_NEEDED} дней подряд. Выполняй задачи 3 дня подряд для восстановления.`;
  } else if ((state.consecutiveMisses || 0) > 0) {
    el.style.display = 'block';
    el.className = 'banner banner-discipline';
    el.innerHTML = `❌ Пропущено ${state.consecutiveMisses} дн. Штраф -${Math.min(50, state.consecutiveMisses * 5)}% XP. Выполни задачи — штраф сбросится.`;
  } else {
    el.style.display = 'none';
  }
}

function renderSecretMissionBanner() {
  const el = document.getElementById('secretMissionBanner');
  if (!el) return;
  if (state.secretMissionActive && state.secretMissionDate === new Date().toDateString() && !state.demobilized) {
    el.style.display = 'block';
    el.className = 'banner banner-secret';
    el.innerHTML = `⚠️ Срочное задание! Выполни любую сложную задачу (≥15 XP) сегодня — получи +${SECRET_MISSION_XP} XP!`;
  } else {
    el.style.display = 'none';
  }
}

function renderTitles() {
  const el = document.getElementById('titlesDisplay');
  if (!el) return;
  const titles = (state.titles || []).map(id => TITLES.find(t => t.id === id)).filter(Boolean);
  el.innerHTML = titles.length ? titles.map(t => `<span class="title-badge">${t.icon} ${t.name}</span>`).join(' ') : '';
}

function renderStrategicGoal() {
  const el = document.getElementById('strategicContent');
  if (!el) return;
  const goal = state.strategicGoal;
  if (!goal) {
    el.innerHTML = `
      <input type="text" id="strategicGoalInput" placeholder="Например: Достичь Лейтенанта до конца года">
      <button class="btn btn-primary" id="setStrategicGoal">Установить цель</button>
    `;
    return;
  }
  const targetRank = goal.targetRank;
  if (targetRank !== null) {
    const percent = Math.min(100, Math.round((state.totalXP / RANKS[targetRank].xp) * 100));
    el.innerHTML = `
      <div class="strategic-goal"><strong>${escapeHtml(goal.text)}</strong></div>
      <div class="strategic-progress"><div class="strategic-bar" style="width:${percent}%"></div></div>
      <p>${percent}% выполнения</p>
    `;
  } else {
    el.innerHTML = `<div class="strategic-goal"><strong>${escapeHtml(goal.text)}</strong></div>`;
  }
}

function renderCampaign() {
  const el = document.getElementById('campaignList');
  if (!el) return;
  const getProgress = (op) => {
    if (op.type === 'streak') return Math.min(op.target, state.streakDays);
    if (op.type === 'program') return Math.min(op.target, state.programHours);
    if (op.type === 'tasks') return Math.min(op.target, state.totalTasksCompleted || 0);
    return 0;
  };
  el.innerHTML = CAMPAIGN_OPERATIONS.map(op => {
    const progress = getProgress(op);
    const done = progress >= op.target;
    return `
      <div class="campaign-op ${done ? 'done' : ''}">
        <div class="campaign-icon">${op.icon}</div>
        <div class="campaign-info">
          <div class="campaign-name">${op.name}</div>
          <div class="campaign-desc">${op.desc}</div>
          <div class="campaign-bar"><div class="campaign-fill" style="width:${(progress/op.target)*100}%"></div></div>
          <div class="campaign-progress">${progress}/${op.target} ${op.unit}</div>
        </div>
      </div>
    `;
  }).join('');
}

function renderSkills() {
  const el = document.getElementById('skillsGrid');
  if (!el) return;
  const skillData = [
    { id: 'discipline', name: 'Дисциплина', icon: '📌', desc: 'Меньше штрафов' },
    { id: 'focus', name: 'Фокус', icon: '🎯', desc: 'Больше XP за сложные задачи' },
    { id: 'intelligence', name: 'Интеллект', icon: '🧠', desc: 'Элитные миссии' },
    { id: 'endurance', name: 'Физ. выносливость', icon: '🏋️', desc: 'Бонус за тренировки' }
  ];
  el.innerHTML = skillData.map(s => {
    const level = (state.skills || {})[s.id] || 0;
    const xp = (state.skillXP || {})[s.id] || 0;
    const need = 50 + level * 25;
    return `
      <div class="skill-item">
        <div class="skill-icon">${s.icon}</div>
        <div class="skill-name">${s.name}</div>
        <div class="skill-desc">${s.desc}</div>
        <div class="skill-level">Ур. ${level}/10</div>
        <div class="skill-xp-bar"><div class="skill-xp-fill" style="width:${(xp/need)*100}%"></div></div>
      </div>
    `;
  }).join('');
}

function renderHallOfFame() {
  const el = document.getElementById('hallGrid');
  if (!el) return;
  const h = state.hallOfFame || {};
  el.innerHTML = `
    <div class="hall-item">
      <div class="hall-icon">🔥</div>
      <div class="hall-label">Самая длинная серия</div>
      <div class="hall-value">${h.maxStreak || state.streakDays || 0} дней</div>
    </div>
    <div class="hall-item">
      <div class="hall-icon">⚡</div>
      <div class="hall-label">Самый продуктивный день</div>
      <div class="hall-value">${h.maxDayXP || 0} XP</div>
    </div>
    <div class="hall-item">
      <div class="hall-icon">📈</div>
      <div class="hall-label">Текущее звание</div>
      <div class="hall-value">${RANKS[state.currentRankIndex].name}</div>
    </div>
  `;
}

function renderSoldierTraining() {
  const rankIdx = state.currentRankIndex;
  const std = SOLDIER_TRAINING_STANDARDS[Math.min(rankIdx, SOLDIER_TRAINING_STANDARDS.length - 1)];
  const rec = state.soldierTraining?.records || {};
  
  const standardsEl = document.getElementById('trainingStandards');
  if (standardsEl) {
    const passed = (key) => (rec[key] || 0) >= std[key];
    standardsEl.innerHTML = `
      <h3>Норматив для звания: ${RANKS[rankIdx].name}</h3>
      <div class="standards-grid">
        <div class="std-item ${passed('pushups') ? 'passed' : ''}"><span class="std-icon">💪</span><span>Отжимания</span><strong>${std.pushups}</strong></div>
        <div class="std-item ${passed('squats') ? 'passed' : ''}"><span class="std-icon">🦵</span><span>Приседания</span><strong>${std.squats}</strong></div>
        <div class="std-item ${passed('calves') ? 'passed' : ''}"><span class="std-icon">🦶</span><span>Икры (10 кг)</span><strong>${std.calves}</strong>/ногу</div>
        <div class="std-item ${passed('crunches') ? 'passed' : ''}"><span class="std-icon">📦</span><span>Скручивания</span><strong>${std.crunches}</strong></div>
        <div class="std-item ${passed('bicycle') ? 'passed' : ''}"><span class="std-icon">🚴</span><span>Велосипед</span><strong>${std.bicycle}</strong></div>
        <div class="std-item ${passed('book') ? 'passed' : ''}"><span class="std-icon">📖</span><span>Книжка</span><strong>${std.book}</strong></div>
      </div>
      <div class="standards-resistance">
        <h4>Резина</h4>
        <p>Руки: 5–10 кг на каждую. Ноги: 15 кг. Добавь повторения в форму ниже.</p>
      </div>
    `;
  }
  
  const logEl = document.getElementById('trainingLog');
  if (logEl) {
    const prog = (val, target) => Math.min(100, Math.round(((val || 0) / (target || 1)) * 100));
    const myRecords = `
      <h4>Мои рекорды</h4>
      <div class="records-grid records-with-bars">
        <div class="record-card"><div class="record-name">💪 Отжимания</div><div class="record-val"><strong>${rec.pushups || 0}</strong></div><div class="record-bar"><div class="record-fill" style="width:${prog(rec.pushups, 50)}%"></div></div><div class="record-hint">макс 50</div></div>
        <div class="record-card"><div class="record-name">🦵 Приседания</div><div class="record-val"><strong>${rec.squats || 0}</strong></div><div class="record-bar"><div class="record-fill" style="width:${prog(rec.squats, 100)}%"></div></div><div class="record-hint">макс 100</div></div>
        <div class="record-card"><div class="record-name">🦶 Икры 10кг</div><div class="record-val"><strong>${rec.calves || 0}</strong>/ногу</div><div class="record-bar"><div class="record-fill" style="width:${prog(rec.calves, 30)}%"></div></div></div>
        <div class="record-card"><div class="record-name">📦 Скручивания</div><div class="record-val"><strong>${rec.crunches || 0}</strong></div><div class="record-bar"><div class="record-fill" style="width:${prog(rec.crunches, 30)}%"></div></div></div>
        <div class="record-card"><div class="record-name">🚴 Велосипед</div><div class="record-val"><strong>${rec.bicycle || 0}</strong></div><div class="record-bar"><div class="record-fill" style="width:${prog(rec.bicycle, 30)}%"></div></div></div>
        <div class="record-card"><div class="record-name">📖 Книжка</div><div class="record-val"><strong>${rec.book || 0}</strong></div><div class="record-bar"><div class="record-fill" style="width:${prog(rec.book, 15)}%"></div></div></div>
      </div>
    `;
    const history = (state.soldierTraining?.workoutHistory || []).slice(-5).reverse();
    logEl.innerHTML = myRecords + (history.length ? `
      <h4>Последние тренировки</h4>
      <div class="workout-history">
        ${history.map(w => `<div class="workout-item">${w.date}: ${w.pushups || 0} отж, ${w.squats || 0} присед, ${w.calves || 0} икры</div>`).join('')}
      </div>
    ` : '');
  }
  
  const formEl = document.getElementById('trainingForm');
  if (formEl) {
    formEl.innerHTML = `
      <h4>Записать тренировку</h4>
      <div class="training-inputs">
        <label>Отжимания <input type="number" id="inPushups" min="0" placeholder="40"></label>
        <label>Приседания <input type="number" id="inSquats" min="0" placeholder="95"></label>
        <label>Икры/ногу (10кг) <input type="number" id="inCalves" min="0" placeholder="30"></label>
        <label>Скручивания <input type="number" id="inCrunches" min="0" placeholder="30"></label>
        <label>Велосипед <input type="number" id="inBicycle" min="0" placeholder="30"></label>
        <label>Книжка <input type="number" id="inBook" min="0" placeholder="15"></label>
        <label>Резина руки (5–10кг) <input type="number" id="inBandArms" min="0" placeholder="повторений"></label>
        <label>Резина ноги (15кг) <input type="number" id="inBandLegs" min="0" placeholder="повторений"></label>
      </div>
      <button class="btn btn-primary" id="saveWorkoutBtn">Сохранить тренировку</button>
    `;
    formEl.querySelector('#saveWorkoutBtn')?.addEventListener('click', saveSoldierWorkout);
  }
}

function saveSoldierWorkout() {
  const getVal = id => parseInt(document.getElementById(id)?.value) || 0;
  const workout = {
    date: new Date().toLocaleDateString('ru'),
    pushups: getVal('inPushups'),
    squats: getVal('inSquats'),
    calves: getVal('inCalves'),
    crunches: getVal('inCrunches'),
    bicycle: getVal('inBicycle'),
    book: getVal('inBook'),
    bandArms: getVal('inBandArms'),
    bandLegs: getVal('inBandLegs')
  };
  if (!workout.pushups && !workout.squats && !workout.calves && !workout.crunches && !workout.bicycle && !workout.book && !workout.bandArms && !workout.bandLegs) return;
  
  state.soldierTraining = state.soldierTraining || { records: {}, workoutHistory: [] };
  state.soldierTraining.workoutHistory = state.soldierTraining.workoutHistory || [];
  state.soldierTraining.workoutHistory.push(workout);
  
  const rec = state.soldierTraining.records || {};
  if (workout.pushups > (rec.pushups || 0)) rec.pushups = workout.pushups;
  if (workout.squats > (rec.squats || 0)) rec.squats = workout.squats;
  if (workout.calves > (rec.calves || 0)) rec.calves = workout.calves;
  if (workout.crunches > (rec.crunches || 0)) rec.crunches = workout.crunches;
  if (workout.bicycle > (rec.bicycle || 0)) rec.bicycle = workout.bicycle;
  if (workout.book > (rec.book || 0)) rec.book = workout.book;
  state.soldierTraining.records = rec;
  
  state.trainCount = (state.trainCount || 0) + 1;
  addXP(5, 'task');
  saveState();
  renderAll();
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
      if (q.id === 'program_2h') return state.programHours >= 2;
      if (q.id === 'program_5h') return state.programHours >= 5;
      if (q.id === 'program_8h') return state.programHours >= 8;
      if (q.id === 'train_3') return state.trainCount >= 3;
      if (q.id === 'train_5') return state.trainCount >= 5;
      if (q.id === 'train_8') return state.trainCount >= 8;
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
  let mult = 1;
  const rank = RANKS[state.currentRankIndex];
  if (rank && rank.bonuses) {
    const m = rank.bonuses.match(/\+(\d+)% XP/);
    mult = m ? 1 + parseInt(m[1]) / 100 : 1;
  }
  if (state.hardcoreMode) mult *= 1.25;
  return mult;
}

function addXP(amount, source) {
  let mult = getXPMultiplier();
  if (state.hardcoreMode && source !== 'bonus') mult *= 0.8;
  const penalty = applyMissedDayPenalty();
  mult *= penalty;
  const base = Math.round(amount * mult);
  state.totalXP += base;
  state.dayXP = (state.dayXP || 0) + base;
  if (source === 'task' && base >= 15) distributeSkillXP(base * 0.15);
  checkRankUp();
  checkAchievements();
  checkMedals();
  updateHallOfFame();
  saveState();
}

function distributeSkillXP(amount) {
  state.skills = state.skills || { discipline: 0, focus: 0, intelligence: 0, endurance: 0 };
  state.skillXP = state.skillXP || { discipline: 0, focus: 0, intelligence: 0, endurance: 0 };
  const skills = ['discipline', 'focus', 'intelligence', 'endurance'];
  const idx = Math.floor(Math.random() * skills.length);
  const skill = skills[idx];
  state.skillXP[skill] = (state.skillXP[skill] || 0) + amount;
  const xpForLevel = 50 + (state.skills[skill] || 0) * 25;
  if (state.skillXP[skill] >= xpForLevel && (state.skills[skill] || 0) < 10) {
    state.skills[skill] = (state.skills[skill] || 0) + 1;
    state.skillXP[skill] -= xpForLevel;
  }
}

function updateHallOfFame() {
  state.hallOfFame = state.hallOfFame || { maxStreak: 0, maxDayXP: 0, fastestRankUp: null };
  if (state.streakDays > (state.hallOfFame.maxStreak || 0)) state.hallOfFame.maxStreak = state.streakDays;
  if ((state.dayXP || 0) > (state.hallOfFame.maxDayXP || 0)) state.hallOfFame.maxDayXP = state.dayXP;
}

function checkTitles() {
  state.titles = state.titles || [];
  TITLES.forEach(t => {
    if (!state.titles.includes(t.id) && t.condition(state)) state.titles.push(t.id);
  });
}

function awardThankYouLetter() {
  state.thankYouLetters = (state.thankYouLetters || 0) + 1;
  addXP(THANK_YOU_LETTER_XP, 'bonus');
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
    addXP(ACHIEVEMENT_XP, 'bonus');
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
      if (q.id === 'program_2h') return state.programHours >= 2;
      if (q.id === 'program_5h') return state.programHours >= 5;
      if (q.id === 'program_8h') return state.programHours >= 8;
      if (q.id === 'train_3') return state.trainCount >= 3;
      if (q.id === 'train_5') return state.trainCount >= 5;
      if (q.id === 'train_8') return state.trainCount >= 8;
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
    state.lastRankUpDate = new Date().toISOString();
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
  if (getLogicPagesRead() >= 30) unlockAchievement('logic_pages');
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
  let xp = task.xp;
  if (state.secretMissionActive && state.secretMissionDate === new Date().toDateString() && !state.demobilized) {
    xp += SECRET_MISSION_XP;
    state.secretMissionActive = null;
  }
  addXP(xp, 'task');
  resetConsecutiveMisses();
  advanceRehabilitation();
  
  if (task.goalId) {
    const goal = state.goals.find(g => g.id === task.goalId);
    if (goal) {
      goal.currentValue = (goal.currentValue || 0) + (goal.perTask || 1);
      if (goal.currentValue >= (goal.questTarget || 30)) {
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
      if (goal.currentValue < (goal.questTarget || 30)) {
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
  renderDailyChest();
  renderDisciplineBanner();
  renderSecretMissionBanner();
  renderTitles();
  renderAchievements();
  renderGoals();
  renderTasks();
  renderStrategicGoal();
  renderCareerTimeline();
  renderRankDetail();
  renderRanks();
  renderQuests();
  renderCampaign();
  renderSkills();
  renderHallOfFame();
  renderSoldierTraining();
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
    const idx = parseInt(check.dataset.index);
    const task = state.tasks[idx];
    if (task && state.demobilized && task.xp >= 20) return;
    completeTask(idx);
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
  
  document.getElementById('hardcoreMode')?.addEventListener('change', (e) => {
    state.hardcoreMode = e.target.checked;
    saveState();
    renderAll();
  });
  
  document.addEventListener('click', (e) => {
    if (e.target.id === 'setStrategicGoal') {
      const input = document.getElementById('strategicGoalInput');
      const text = input?.value?.trim();
      if (text) {
        state.strategicGoal = { text, targetRank: null, targetYear: new Date().getFullYear() };
        const m = text.match(/[Лл]ейтенант|[Кк]апитан|[Мм]айор|[Сс]ержант|[Ее]фрейтор/);
        if (m) {
          const idx = RANKS.findIndex(r => r.name.toLowerCase().includes(m[0].toLowerCase()));
          if (idx >= 0) state.strategicGoal.targetRank = idx;
        }
        saveState();
        renderAll();
      }
    }
  });
  
  document.getElementById('chestBtn')?.addEventListener('click', () => {
    if (canOpenChest()) openDailyChest();
  });
  
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
