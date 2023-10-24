const HOST = 'https://minicamper.by:8080';
const MAIL_PATH = {
    book: 'book',
    feedback: 'feedback',
};

const getOptions = (html: string) => ({
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify({html}),
});

const makePOSTRequest = async (path: string, options: any): Promise<void> => {
    const url = `${HOST}/${path}`;

    const res = await fetch(url, options);
    return res.json();
};

export const sendBook = async (html: string): Promise<void> => {
    const options = getOptions(html);

    return await makePOSTRequest(MAIL_PATH.book, options);
};

export const sendFeedback = async (html: string): Promise<void> => {
    const options = getOptions(html);

    return await makePOSTRequest(MAIL_PATH.feedback, options);
};
