import {
    Checkbox,
    FormControlLabel,
} from '@mui/material';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import React, {
    FC,
    useState
} from 'react';
import { PHONE_MASK } from '../../constants/form';
import { ButtonStyle } from '../../style/styledButton';
import { TextMaskCustom } from '../FormBook/TextMaskCustom';
import styles from './FormCallBack.module.sass';

export type TFormCallBackSubmit = {
    name: string,
    email: string,
    question: string,
    phone: string,
}

interface FormCallBackProps {
    onSubmit: (attributes: TFormCallBackSubmit) => Promise<void>;
}

const FormCallBack: FC<FormCallBackProps> = ({onSubmit}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('+375');
    const [email, setEmail] = useState('');
    const [question, setQuestion] = useState('');

    const [isPersonalDataAllowed, setIsPersonalDataAllowed] = useState(false);
    const [isMailSent, setIsMailSent] = useState(false);
    const [submitLabel, setSubmitLabel] = useState('Перезвоните мне');

    const submitHandler = async () => {
        setIsMailSent(true);
        setSubmitLabel('Вопрос отправлен!');

        await onSubmit({name, phone, email, question});
    };

    return (
        <FormGroup className={styles.FormCallBack}>
            <TextField required label="Ваше имя" variant="outlined" placeholder="" value={name}
                       onChange={e => setName(e.target.value)}/>
            <FormControl variant="standard">
                <InputLabel className={styles.InputLabel} htmlFor="formatted-text-mask-input">Номер
                    телефона</InputLabel>
                <Input
                    required
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    name="textmask"
                    placeholder={PHONE_MASK}
                    inputComponent={TextMaskCustom as any}
                />
            </FormControl>
            <TextField required label="Адрес электронной почты" variant="outlined" placeholder="" value={email}
                       onChange={e => setEmail(e.target.value)}/>
            <TextareaAutosize
                required
                className={styles.Question}
                minRows={6}
                placeholder="Введите ваш вопрос"
                onChange={e => setQuestion(e.target.value)}
            />
            <FormControlLabel control={<Checkbox onChange={(e, checked) => setIsPersonalDataAllowed(checked)}/>}
                              label="Даю согласие на обработку персональных данных *"/>
            <Button disabled={isMailSent || !isPersonalDataAllowed} className={styles.Action} variant="contained"
                    onClick={submitHandler} sx={ButtonStyle}>{submitLabel}</Button>
        </FormGroup>
    );
};

export default FormCallBack;
