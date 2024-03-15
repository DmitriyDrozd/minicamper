import {
    ADDRESS,
    ADDRESS_COORDINATES,
    EMAIL,
    INSTAGRAM_ACCOUNT,
    PHONE,
    PHONE_RAW,
    TContacts,
    UNP
} from '../constants/contacts';
import {
    DIFFERENT_PRICE,
    KM_PRICE,
    MAX_DISTANCE,
    MIN_DRIVING_EXPERIENCE,
    MIN_TERM,
    PLEDGE,
    SERVICE_FEE,
    TPrice
} from '../constants/price';

export interface IApplicationContext {
    contacts: TContacts,
    price: TPrice,
}

export const DEFAULT_STORE: IApplicationContext = {
    contacts: {
        address: ADDRESS,
        addressCoordinates: ADDRESS_COORDINATES,
        phone: PHONE,
        phoneRaw: PHONE_RAW,
        email: EMAIL,
        instagramAccount: INSTAGRAM_ACCOUNT,
        unp: UNP,
    },
    price: {
        serviceFee: SERVICE_FEE,
        pledge: PLEDGE,
        minTerm: MIN_TERM,
        minDrivingExperience: MIN_DRIVING_EXPERIENCE,
        differentPrice: DIFFERENT_PRICE,
        kmPrice: KM_PRICE,
        maxDistance: MAX_DISTANCE,
    },
};