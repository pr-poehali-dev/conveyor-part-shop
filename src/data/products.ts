export interface Product {
  id: string;
  slug: string;
  name: string;
  category: string;
  categoryLabel: string;
  shortDescription: string;
  image: string;
  tagline: string;
  specs: { label: string; value: string }[];
  features: { icon: string; title: string; text: string }[];
  applications: string[];
  inStock: boolean;
  priceHint: string;
}

export const categories = [
  { id: 'rollers', label: 'Ролики' },
  { id: 'belts', label: 'Ленты' },
  { id: 'drums', label: 'Барабаны' },
  { id: 'idlers', label: 'Роликоопоры' },
] as const;

const ROLLER_IMG = 'https://cdn.poehali.dev/projects/b415b45c-979e-4225-9e40-94dd7ded346d/files/89b23a3c-638f-4dac-95fc-0eadd489cb9e.jpg';
const BELT_IMG = 'https://cdn.poehali.dev/projects/b415b45c-979e-4225-9e40-94dd7ded346d/files/5009240b-956c-443b-98ac-6f5b07c64480.jpg';
const DRUM_IMG = 'https://cdn.poehali.dev/projects/b415b45c-979e-4225-9e40-94dd7ded346d/files/29807f44-54eb-4d29-ad35-c31ca155849d.jpg';

export const products: Product[] = [
  {
    id: '1',
    slug: 'rolik-konveyernyy-102',
    name: 'Ролик конвейерный Ø102 мм',
    category: 'rollers',
    categoryLabel: 'Ролики',
    shortDescription: 'Стальной ролик для тяжёлых нагрузок с герметичными подшипниками.',
    image: ROLLER_IMG,
    tagline: 'Надёжный ход конвейера в любых условиях',
    specs: [
      { label: 'Диаметр', value: '102 мм' },
      { label: 'Длина', value: '150–2000 мм' },
      { label: 'Материал', value: 'Сталь 3, оцинковка' },
      { label: 'Подшипник', value: '6204 / 6205' },
      { label: 'Ресурс', value: 'до 30 000 ч' },
      { label: 'Нагрузка', value: 'до 2500 Н' },
    ],
    features: [
      { icon: 'Shield', title: 'Защита от пыли', text: 'Лабиринтное уплотнение защищает подшипник от абразива и влаги.' },
      { icon: 'Gauge', title: 'Низкое сопротивление', text: 'Точная балансировка снижает энергозатраты конвейера.' },
      { icon: 'Clock', title: 'Долгий ресурс', text: 'Закалённые дорожки качения работают до 30 000 часов.' },
    ],
    applications: ['Горнодобыча', 'Цементные заводы', 'Порты и терминалы', 'Сельское хозяйство'],
    inStock: true,
    priceHint: 'от 890 ₽',
  },
  {
    id: '2',
    slug: 'rolik-konveyernyy-133',
    name: 'Ролик конвейерный Ø133 мм',
    category: 'rollers',
    categoryLabel: 'Ролики',
    shortDescription: 'Усиленный ролик для магистральных конвейеров большой протяжённости.',
    image: ROLLER_IMG,
    tagline: 'Для магистральных конвейеров под высокой нагрузкой',
    specs: [
      { label: 'Диаметр', value: '133 мм' },
      { label: 'Длина', value: '250–2500 мм' },
      { label: 'Материал', value: 'Сталь, футеровка' },
      { label: 'Подшипник', value: '6306 / 6308' },
      { label: 'Ресурс', value: 'до 40 000 ч' },
      { label: 'Нагрузка', value: 'до 5000 Н' },
    ],
    features: [
      { icon: 'Shield', title: 'Тройное уплотнение', text: 'Многоконтурная защита для работы в запылённой среде.' },
      { icon: 'Weight', title: 'Высокая нагрузка', text: 'Выдерживает интенсивный поток тяжёлых материалов.' },
      { icon: 'Clock', title: 'Ресурс 40 000 ч', text: 'Минимум простоев на замену комплектующих.' },
    ],
    applications: ['Магистральные конвейеры', 'Карьеры', 'Металлургия'],
    inStock: true,
    priceHint: 'от 1 450 ₽',
  },
  {
    id: '3',
    slug: 'lenta-konveyernaya-rezinotkanevaya',
    name: 'Лента конвейерная резинотканевая',
    category: 'belts',
    categoryLabel: 'Ленты',
    shortDescription: 'Прочная многослойная лента для транспортировки сыпучих грузов.',
    image: BELT_IMG,
    tagline: 'Транспортировка сыпучих грузов без остановок',
    specs: [
      { label: 'Ширина', value: '400–2000 мм' },
      { label: 'Число прокладок', value: '3–6' },
      { label: 'Тип', value: 'ТК-200, ЕР-400' },
      { label: 'Прочность', value: 'до 400 Н/мм' },
      { label: 'Температура', value: '−45…+60 °C' },
      { label: 'Обкладка', value: '2–8 мм' },
    ],
    features: [
      { icon: 'Layers', title: 'Многослойный каркас', text: 'Тканевые прокладки обеспечивают прочность на разрыв.' },
      { icon: 'Snowflake', title: 'Морозостойкость', text: 'Сохраняет эластичность при −45 °C.' },
      { icon: 'Recycle', title: 'Ремонтопригодность', text: 'Возможна горячая и холодная стыковка на объекте.' },
    ],
    applications: ['Добыча угля', 'Переработка зерна', 'Строительные материалы', 'Логистика'],
    inStock: true,
    priceHint: 'от 1 200 ₽/м²',
  },
  {
    id: '4',
    slug: 'lenta-konveyernaya-pvh',
    name: 'Лента конвейерная ПВХ пищевая',
    category: 'belts',
    categoryLabel: 'Ленты',
    shortDescription: 'Гладкая лента для пищевых и упаковочных производств.',
    image: BELT_IMG,
    tagline: 'Гигиеничное решение для пищевой отрасли',
    specs: [
      { label: 'Ширина', value: '300–1200 мм' },
      { label: 'Толщина', value: '2–5 мм' },
      { label: 'Материал', value: 'ПВХ / ПУ' },
      { label: 'Цвет', value: 'белый, синий' },
      { label: 'Температура', value: '−10…+80 °C' },
      { label: 'Стандарт', value: 'FDA / пищевой' },
    ],
    features: [
      { icon: 'Sparkles', title: 'Лёгкая мойка', text: 'Гладкая поверхность не задерживает загрязнения.' },
      { icon: 'ShieldCheck', title: 'Пищевой допуск', text: 'Соответствует санитарным нормам для контакта с продуктами.' },
      { icon: 'Feather', title: 'Малый вес', text: 'Снижает нагрузку на приводные механизмы.' },
    ],
    applications: ['Пищевые производства', 'Упаковка', 'Фармацевтика'],
    inStock: true,
    priceHint: 'от 950 ₽/м²',
  },
  {
    id: '5',
    slug: 'baraban-privodnoy',
    name: 'Барабан приводной футерованный',
    category: 'drums',
    categoryLabel: 'Барабаны',
    shortDescription: 'Приводной барабан с резиновой футеровкой для надёжного сцепления.',
    image: DRUM_IMG,
    tagline: 'Сердце привода конвейерной линии',
    specs: [
      { label: 'Диаметр', value: '320–1250 мм' },
      { label: 'Длина обечайки', value: 'под ширину ленты' },
      { label: 'Футеровка', value: 'резина 8–12 мм' },
      { label: 'Вал', value: 'сталь 45' },
      { label: 'Балансировка', value: 'статическая' },
      { label: 'Покрытие', value: 'гладкое / ромб' },
    ],
    features: [
      { icon: 'Grip', title: 'Надёжное сцепление', text: 'Ромбовидная футеровка исключает проскальзывание ленты.' },
      { icon: 'Cog', title: 'Точная балансировка', text: 'Снижает вибрацию и износ подшипниковых узлов.' },
      { icon: 'Wrench', title: 'Под заказ', text: 'Изготовление по чертежам и посадочным размерам.' },
    ],
    applications: ['Приводные станции', 'Тяжёлые конвейеры', 'Обогатительные фабрики'],
    inStock: false,
    priceHint: 'по запросу',
  },
  {
    id: '6',
    slug: 'baraban-natyazhnoy',
    name: 'Барабан натяжной',
    category: 'drums',
    categoryLabel: 'Барабаны',
    shortDescription: 'Натяжной барабан для поддержания оптимального натяжения ленты.',
    image: DRUM_IMG,
    tagline: 'Стабильное натяжение — ровный ход ленты',
    specs: [
      { label: 'Диаметр', value: '250–1000 мм' },
      { label: 'Тип', value: 'гладкий' },
      { label: 'Вал', value: 'сталь 45' },
      { label: 'Подшипники', value: 'роликовые' },
      { label: 'Покрытие', value: 'антикоррозийное' },
      { label: 'Исполнение', value: 'по чертежу' },
    ],
    features: [
      { icon: 'Move', title: 'Точное натяжение', text: 'Обеспечивает равномерный ход ленты по всей трассе.' },
      { icon: 'Cog', title: 'Прочный вал', text: 'Выдерживает знакопеременные нагрузки натяжной станции.' },
      { icon: 'Wrench', title: 'Индивидуально', text: 'Производство под посадочные размеры конвейера.' },
    ],
    applications: ['Натяжные станции', 'Магистральные конвейеры'],
    inStock: true,
    priceHint: 'по запросу',
  },
  {
    id: '7',
    slug: 'rolikoopora-verhnyaya',
    name: 'Роликоопора верхняя желобчатая',
    category: 'idlers',
    categoryLabel: 'Роликоопоры',
    shortDescription: 'Трёхроликовая опора для формирования желоба ленты.',
    image: ROLLER_IMG,
    tagline: 'Формирует желоб и центрирует поток груза',
    specs: [
      { label: 'Тип', value: '3-роликовая' },
      { label: 'Угол наклона', value: '20° / 30° / 45°' },
      { label: 'Ширина ленты', value: '500–2000 мм' },
      { label: 'Ролики', value: 'Ø89 / Ø102' },
      { label: 'Каркас', value: 'сталь, окраска' },
      { label: 'Крепёж', value: 'в комплекте' },
    ],
    features: [
      { icon: 'Triangle', title: 'Желобчатая форма', text: 'Увеличивает вместимость и удерживает груз на ленте.' },
      { icon: 'Shield', title: 'Защита подшипников', text: 'Ролики с усиленным уплотнением для запылённой среды.' },
      { icon: 'PackageCheck', title: 'Готовый комплект', text: 'Поставляется с крепежом и роликами в сборе.' },
    ],
    applications: ['Грузонесущая ветвь', 'Карьерные конвейеры', 'Порты'],
    inStock: true,
    priceHint: 'от 2 300 ₽',
  },
  {
    id: '8',
    slug: 'rolikoopora-nizhnyaya',
    name: 'Роликоопора нижняя прямая',
    category: 'idlers',
    categoryLabel: 'Роликоопоры',
    shortDescription: 'Опора для холостой ветви ленты с одним роликом.',
    image: ROLLER_IMG,
    tagline: 'Поддержка холостой ветви конвейера',
    specs: [
      { label: 'Тип', value: 'прямая, 1-роликовая' },
      { label: 'Ширина ленты', value: '500–2000 мм' },
      { label: 'Ролик', value: 'Ø102 / Ø133' },
      { label: 'Каркас', value: 'сталь, окраска' },
      { label: 'Крепёж', value: 'в комплекте' },
      { label: 'Исполнение', value: 'стандарт' },
    ],
    features: [
      { icon: 'Minus', title: 'Ровная поддержка', text: 'Удерживает обратную ветвь ленты без провисания.' },
      { icon: 'Shield', title: 'Защита от абразива', text: 'Уплотнения продлевают ресурс в тяжёлых условиях.' },
      { icon: 'PackageCheck', title: 'В сборе', text: 'Готова к монтажу, с роликом и крепежом.' },
    ],
    applications: ['Холостая ветвь', 'Промышленные конвейеры'],
    inStock: true,
    priceHint: 'от 1 100 ₽',
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
