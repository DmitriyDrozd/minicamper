/**
 * Сервисный сбор
 */
export const SERVICE_FEE = 40;

/**
 * Залог
 */
export const PLEDGE = 300;

/**
 * Минимальный срок
 */
export const MIN_TERM = 3;

/**
 * Минимальный опыт вождения
 */
export const MIN_DRIVING_EXPERIENCE = 3;

/**
 * Дифференцированный прайс
 */
export const DIFFERENT_PRICE = [
    {
        title: '1-3 дня',
        value: 80,
    },
    {
        title: '4-7 дней',
        value: 70,
    },
    {
        title: '8-14 дней',
        value: 60,
    },
    {
        title: '15-30 дней',
        value: 50,
    },
    {
        title: '31 день и более',
        value: 40,
    },
];

/**
 * Стоимость за километр
 */
export const KM_PRICE = 1

/**
 * Максимальная дальность доставки кемпера
 */
export const MAX_DISTANCE = 100

export type TDifferentPriceItem = {
    title: string,
    value: number,
    discount?: number,
};

export type TPrice = {
    serviceFee: number,
    pledge: number,
    minTerm: number,
    minDrivingExperience: number,
    differentPrice: TDifferentPriceItem[],
    kmPrice: number,
    maxDistance: number,
}