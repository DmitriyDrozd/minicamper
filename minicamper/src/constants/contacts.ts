export const ADDRESS = 'г. Минск, д. Большой Тростенец, ул. Луговая 6А';
export const ADDRESS_COORDINATES = [53.848834,27.707675];
export const PHONE = '+375 (44) 700-76-55';
export const PHONE_RAW = '375447007655'
export const EMAIL = 'admin@minicamper.by';
export const INSTAGRAM_ACCOUNT = "camper_arenda_by?utm_source=qr&igshid=YzU1NGVlODEzOA==";
export const UNP = '193645131';

export type TContacts = {
    address: string,
    addressCoordinates: number[],
    phone: string,
    phoneRaw: string,
    email: string,
    instagramAccount: string,
    unp: string,
}
