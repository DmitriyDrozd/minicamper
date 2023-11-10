import {
    Checkbox,
    FormControlLabel,
} from '@mui/material';
import Button from '@mui/material/Button';
import FormGroup from '@mui/material/FormGroup';
import TextField from '@mui/material/TextField';
import React, {
    FC,
    useState
} from 'react';
import { Link } from 'react-router-dom';
import { ROUTER } from '../../constants/routes';
import { ButtonStyle } from '../../style/styledButton';
import { useValidation } from '../../utils/Form';
import { TextMaskWrapper } from '../FormBook/TextMaskCustom';
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

/*
    текст ошибки валидации
 */
const helperText = 'Поле не должно быть пустым';

const FormCallBack: FC<FormCallBackProps> = ({onSubmit}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [question, setQuestion] = useState('');
    const {
        errors,
        hasError,
        setShowErrors,
        showErrors,
    } = useValidation({name, phone, email}); // todo: question validation

    const [isPersonalDataAllowed, setIsPersonalDataAllowed] = useState(false);
    const [isMailSent, setIsMailSent] = useState(false);
    const [submitLabel, setSubmitLabel] = useState('Перезвоните мне');

    const submitHandler = async () => {
        if (hasError) {
            setShowErrors(true);
            return;
        }

        setIsMailSent(true);
        setSubmitLabel('Вопрос отправлен!');

        await onSubmit({name, phone, email, question});
    };

    return (
        <FormGroup className={styles.FormCallBack}>
            <TextField
                required
                label="Ваше имя"
                variant="outlined"
                placeholder=""
                value={name}
                onChange={e => setName(e.target.value)}
                error={showErrors && errors.name}
                helperText={showErrors && errors.name && helperText}
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
            <TextField
                required
                label="Адрес электронной почты"
                variant="outlined"
                placeholder=""
                value={email}
                onChange={e => setEmail(e.target.value)}
                error={showErrors && errors.email}
                helperText={showErrors && errors.email && helperText}
            />
            <textarea
                required
                className={styles.Question}
                placeholder="Введите ваш вопрос"
                onChange={e => setQuestion(e.target.value)}
            />
            <FormControlLabel
                control={<Checkbox onChange={(e, checked) => setIsPersonalDataAllowed(checked)}/>}
                label={<span>Даю согласие на <Link to={ROUTER.politcnda}>обработку персональных данных</Link> *</span>}
            />
            <Button disabled={isMailSent || !isPersonalDataAllowed || (hasError && showErrors)} className={styles.Action} variant="contained"
                    onClick={submitHandler} sx={ButtonStyle}>{submitLabel}</Button>
        </FormGroup>
    );
};

export default FormCallBack;
