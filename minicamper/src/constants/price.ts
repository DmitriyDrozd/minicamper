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
 * Стоимость за сутки
 */
export const DAILY_PRICE = 100;
export const DAILY_PRICE_DISCOUNT = 70;
/**
 * Стоимость за километр
 */
export const KM_PRICE = 1
export const MAX_DISTANCE = 100

export type TPrice = {
    serviceFee: number,
    pledge: number,
    minTerm: number,
    minDrivingExperience: number,
    dailyPrice: number,
    dailyPriceDiscount?: number,
    kmPrice: number,
    maxDistance: number,
}