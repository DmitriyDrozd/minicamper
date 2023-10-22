import React, {
    FC,
    useState
} from 'react';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import ru from 'date-fns/locale/ru';

import {
    PHONE_MASK
} from '../../constants/form';
import { ButtonStyle } from '../../style/styledButton';
import styles from './FormBook.module.sass';
import { TextMaskCustom } from './TextMaskCustom';

export type TFormBookSubmitCredentials = {
    name: string,
    date: Date,
    daysCount: string,
    phone: string,
}

interface FormBookProps {
    onSubmit: (credentials: TFormBookSubmitCredentials) => void;
}

/**
 * форма бронирования
 * @constructor
 */
const FormBook: FC<FormBookProps> = ({onSubmit}) => {
    const today = new Date(Date.now());
    const [name, setName] = useState('');
    const [date, setDate] = useState<Date>(today);
    const [phone, setPhone] = useState('+375');
    const [daysCount, setDaysCount] = useState('');
    const submitHandler = () => onSubmit({name, date, phone, daysCount});

    return (
        <FormGroup className={styles.FormBook} row>
            <TextField className={styles.FormItem} label="Ваше имя" variant="outlined" placeholder="" value={name}
                       onChange={e => setName(e.target.value)}/>
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
                label="Количество дней" variant="outlined"
                placeholder="" value={daysCount} onChange={e => setDaysCount(e.target.value)}/>
            <FormControl variant="standard" className={styles.FormItem}>
                <InputLabel className={styles.InputLabel} htmlFor="formatted-text-mask-input">Номер телефона</InputLabel>
                <Input
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    name="textmask"
                    placeholder={PHONE_MASK}
                    inputComponent={TextMaskCustom as any}
                />
            </FormControl>
            <Button className={styles.FormItem} variant="contained" onClick={submitHandler} sx={ButtonStyle}
            >Узнать о наличии</Button>
        </FormGroup>
    );
};

export default FormBook;