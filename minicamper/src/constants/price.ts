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
        value: 100,
    },
    {
        title: '3-7 дней',
        value: 90,
    },
    {
        title: '7-14 дней',
        value: 80,
    },
    {
        title: '14-30 дней',
        value: 70,
    },
    {
        title: '30 дней и более',
        value: 60,
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