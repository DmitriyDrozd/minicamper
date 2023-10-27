
const makePOSTRequest = async (html: string, path: string): Promise<void> => {
    const url = `https://minicamper.by/mailer/${path}`;
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

export const sendBook = async (html: string): Promise<void> => {
    return await makePOSTRequest(html, 'book');
};

export const sendFeedback = async (html: string): Promise<void> => {
    return await makePOSTRequest(html, 'feedback');
};
