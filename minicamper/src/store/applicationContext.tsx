import React, {
    RefObject,
    useContext,
    useRef,
} from 'react';
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
    DAILY_PRICE,
    DAILY_PRICE_DISCOUNT,
    KM_PRICE,
    MAX_DISTANCE,
    MIN_DRIVING_EXPERIENCE,
    MIN_TERM,
    PLEDGE,
    SERVICE_FEE,
    TPrice
} from '../constants/price';

interface IApplicationContext {
    contacts: TContacts,
    price: TPrice,
}

const DEFAULT_STORE: IApplicationContext = {
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
        dailyPrice: DAILY_PRICE,
        dailyPriceDiscount: DAILY_PRICE_DISCOUNT,
        kmPrice: KM_PRICE,
        maxDistance: MAX_DISTANCE,
    },
};

// @ts-ignore
const AppContext = React.createContext<RefObject<IApplicationContext>>(null);

export const useApplicationContext = (): IApplicationContext => {
    const context: RefObject<IApplicationContext> = useContext(AppContext);

    return context.current || { ...DEFAULT_STORE };
}

export const ApplicationContextProvider = ({ children }: { children: React.ReactElement }) => {
    const store = useRef({...DEFAULT_STORE});

    return (
        <AppContext.Provider value={store}>
            {children}
        </AppContext.Provider>
    )};
