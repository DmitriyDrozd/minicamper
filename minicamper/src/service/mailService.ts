import { makePOSTRequest } from './service';

export const sendBook = async (html: string): Promise<void> => {
    return await makePOSTRequest(html, 'mailer/book');
};

export const sendFeedback = async (html: string): Promise<void> => {
    return await makePOSTRequest(html, 'mailer/feedback');
};
