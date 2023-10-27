
const makePOSTRequest = async (html: string, subject: string, path: string): Promise<void> => {
    const url = `http://minicamper.by/mailer/${path}`;
    const options = {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
        },
        subject,
        html: JSON.stringify({html})
    }

    const res = await fetch(url, options);
    return res.json();
};

export const sendBook = async (html: string): Promise<void> => {
    return await makePOSTRequest(html, 'Заявка - наличие свободных дат', 'book');
};

export const sendFeedback = async (html: string): Promise<void> => {
    return await makePOSTRequest(html, 'Заявка - возникли вопросы', 'feedback');
};
