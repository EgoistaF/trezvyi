export type Service = {
  title: string;
  shortTitle: string;
  description: string;
  /** Нижняя граница цены в сомах. Единственный источник правды по ценам. */
  priceFrom: number;
  /** Готовая подпись вида «от 1000 сом», собирается из priceFrom. */
  price: string;
  image: string;
  message: string;
  featured?: boolean;
  href?: string;
};

export function formatPriceFrom(amount: number) {
  return `от ${amount} сом`;
}

const serviceList = [
  {
    title: "Трезвый водитель",
    shortTitle: "Город",
    description:
      "Водитель приедет по указанному адресу и доставит вас на вашем автомобиле.",
    priceFrom: 1000,
    image: "/images/driver.jpg",
    message: "Здравствуйте! Я хочу вызвать трезвого водителя.",
    featured: true,
    href: "/trezvyi-voditel-bishkek",
  },
  {
    title: "Запуск автомобиля",
    shortTitle: "Запуск автомобиля",
    description: "Поможем запустить автомобиль, если разрядился аккумулятор.",
    priceFrom: 500,
    image: "/images/jump-start.jpg",
    message: "Здравствуйте! Мне нужна помощь с запуском автомобиля.",
  },
  {
    title: "Доставка бензина",
    shortTitle: "Доставка бензина",
    description: "Привезём топливо туда, где остановился автомобиль.",
    priceFrom: 400,
    image: "/images/fuel.jpg",
    message: "Здравствуйте! Мне нужна доставка бензина.",
  },
  {
    title: "Подкачка колёс",
    shortTitle: "Подкачка колёс",
    description: "Поможем подкачать колесо и продолжить поездку.",
    priceFrom: 400,
    image: "/images/tire-pump.jpg",
    message: "Здравствуйте! Мне нужна подкачка колеса.",
  },
  {
    title: "Буксировка",
    shortTitle: "Буксировка",
    description: "Организуем аккуратную буксировку автомобиля.",
    priceFrom: 1000,
    image: "/images/tow.jpg",
    message: "Здравствуйте! Мне нужна буксировка автомобиля.",
  },
] satisfies Omit<Service, "price">[];

export const services: Service[] = serviceList.map((service) => ({
  ...service,
  price: formatPriceFrom(service.priceFrom),
}));

export const primaryService = services[0];
