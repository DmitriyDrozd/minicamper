import { TFormBookSubmitCredentials } from '../components/FormBook/FormBook';
import { TFormCallBackSubmit } from '../components/FormCallBack/FormCallBack';

const getClearPhone = (phone: string) => phone.replace(/[\s()-]/g, '');
const getEndDate = (date: Date, days: number) => {
    const res = new Date(date.valueOf());
    res.setDate(res.getDate() + days);

    return res.toLocaleDateString();
};

const getToday = () => {
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();

    return `${date} в ${time}`;
}

export const getBookHtml = ({name, date, daysCount, phone}: TFormBookSubmitCredentials): string => {
    return `<b>заявка создана </b>${getToday()}<br/><b>Номер телефона:</b>${getClearPhone(phone)}<br/><b>Имя: </b>${name}<br/><b>Запрошенная дата старта: </b>${date.toLocaleDateString()}<br/><b>Количество дней: </b>${daysCount}<br/><b>Дата окончания:</b>${getEndDate(date, +daysCount)}`;
};

export const getFeedbackHtml = ({name, email, question, phone}: TFormCallBackSubmit): string => {
    return `<b>Запрос на обратный звонок от </b>${getToday()}<br/><b>Номер телефона:</b>${getClearPhone(phone)}<br/><b>Имя: </b>${name}<br/><b>E-mail: </b>${email}<br/><b>Вопрос: </b>${question}`;
};