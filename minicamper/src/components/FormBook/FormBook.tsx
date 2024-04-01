import classNames from 'classnames';
import React, {
    FC,
    useState
} from 'react';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ru from 'date-fns/locale/ru';

import { ButtonStyle } from '../../style/styledButton';
import { useValidation } from '../../utils/Form';
import { BASIC_INPUT_ID } from '../../utils/styling';
import { TextMaskWrapper } from './TextMaskCustom';
import { isMobile as getIsMobile } from '../../utils/device';

import styles from './FormBook.module.sass';

export type TFormBookSubmitCredentials = {
    name: string,
    date: Date,
    daysCount: string,
    phone: string,
}

interface FormBookProps {
    onSubmit: (credentials: TFormBookSubmitCredentials) => Promise<void>;
}

/*
    текст ошибки валидации
 */
const helperText = 'Поле не должно быть пустым';

/**
 * форма бронирования
 * @constructor
 */
const FormBook: FC<FormBookProps> = ({onSubmit}) => {
    const today = new Date(Date.now());
    const isMobile = getIsMobile();
    const [name, setName] = useState('');
    const [date, setDate] = useState<Date>(today);
    const [phone, setPhone] = useState('');
    const [daysCount, setDaysCount] = useState('');
    const {
        errors,
        hasError,
        setShowErrors,
        showErrors
    } = useValidation({name, date, phone, daysCount});

    const [isMailSent, setIsMailSent] = useState(false);
    const [submitLabel, setSubmitLabel] = useState('Узнать о наличии');

    const submitHandler = async () => {
        if (hasError) {
            setShowErrors(true);
            return;
        }

        setIsMailSent(true);
        setSubmitLabel('Заявка отправлена!');

        await onSubmit({name, date, phone, daysCount});
    };

    return (
        <>
            { isMobile && (
                <div className={styles.Hint}>Вы можете узнать о наличии свободных дат, заполнив форму ниже, после этого мы Вам перезвоним.</div>
            ) }
            <FormGroup className={classNames(styles.FormBook, styles.FormBookResponsive)} row>
                <TextField
                    id={BASIC_INPUT_ID}
                    className={styles.FormItem}
                    label="Ваше имя"
                    variant="outlined"
                    placeholder=""
                    value={name}
                    onChange={e => setName(e.target.value)}
                    error={showErrors && errors.name}
                    helperText={showErrors && errors.name && helperText}
                />
                <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ru}>
                    <DatePicker
                        className={styles.BookDate}
                        label="Дата старта"
                        value={date}
                        onChange={(value) => {
                            value ? setDate(value) : setDate(today);
                        }}
                        minDate={today}
                    />
                </LocalizationProvider>
                <TextField
                    className={styles.FormItem}
                    inputProps={{inputMode: 'numeric', pattern: '[0-9]*', min: 3, type: 'number'}}
                    label="Количество дней"
                    variant="outlined"
                    placeholder="" value={daysCount} onChange={e => setDaysCount(e.target.value)}
                    error={showErrors && errors.daysCount}
                    helperText={showErrors && errors.daysCount && helperText}
                />
                <TextField
                    className={styles.FormItem}
                    label="Номер телефона"
                    variant="outlined"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    error={showErrors && errors.phone}
                    helperText={showErrors && errors.phone && 'Неверный номер телефона'}
                    InputProps={{
                        inputComponent: TextMaskWrapper,
                    }}
                />
                <Button disabled={isMailSent || (showErrors && hasError)} variant="contained" onClick={submitHandler}
                        sx={ButtonStyle}
                        className={styles.Submit}
                >{submitLabel}</Button>
            </FormGroup>
        </>
    );
};

export default FormBook;
