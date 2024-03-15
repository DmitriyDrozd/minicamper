import React, {
    RefObject,
    useContext,
    useRef,
} from 'react';
import { getCMSData } from '../service/CmsService';
import {
    DEFAULT_STORE,
    IApplicationContext
} from './types';

// @ts-ignore
const AppContext = React.createContext<RefObject<IApplicationContext>>(null);

export const useApplicationContext = (): IApplicationContext => {
    const context: RefObject<IApplicationContext> = useContext(AppContext);

    return context.current || { ...DEFAULT_STORE };
}

// const updateCMSData = async (store: IApplicationContext) => {
//     const data = await getCMSData();
//     const { contacts, price } = data;
//
//     store.contacts = contacts;
//     store.price = price;
// };

export const ApplicationContextProvider = ({ children }: { children: React.ReactElement }) => {
    const store = useRef({...DEFAULT_STORE});

    // useEffect(() => {
    //     updateCMSData(store.current); // not updating the store. Change store to hook with useEffect
    // }, []);

    return (
        <AppContext.Provider value={store}>
            {children}
        </AppContext.Provider>
    )};
