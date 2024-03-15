import {
    DEFAULT_STORE,
    IApplicationContext
} from '../store/types';

export const makePOSTRequest = async (html: string, path: string): Promise<void> => {
    const url = `https://minicamper.by/${path}`;
    const options = {
        method: 'POST',
        headers: {
            Accept: '*/*',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ html })
    }

    const res = await fetch(url, options);
    return res.json();
};

export const makeGETRequest = async (path: string): Promise<IApplicationContext> => {
    const url = `https://minicamper.by/${path}`;
    // const url = `http://127.0.0.1:3001/${path}`;

    try {
        const res = await fetch(url);
        return res.json();
    } catch(e) {
        console.error(e);
        return DEFAULT_STORE;
    }
};