import {
    Checkbox,
    FormControlLabel
} from '@mui/material';
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
import { TextMaskCustom } from '../FormBook/TextMaskCustom';
import styles from './FormCallBack.module.sass';


export type TFormCallBackSubmit = {
    name: string,
    email: string,
    question: string,
    phone: string,
}

interface FormCallBackProps {
    onSubmit: (attributes: TFormCallBackSubmit) => void;
}

const FormCallBack: FC<FormCallBackProps> = ({onSubmit}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('+375');
    const [email, setEmail] = useState('');
    const [question, setQuestion] = useState('');
    const submitHandler = () => onSubmit({name, phone, email, question});


    return (
        <FormGroup className={styles.FormCallBack}>
            <TextField label="Ваше имя" variant="outlined" placeholder="" value={name}
                       onChange={e => setName(e.target.value)}/>
            <FormControl variant="standard">
                <InputLabel htmlFor="formatted-text-mask-input">Номер телефона</InputLabel>
                <Input
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    name="textmask"
                    placeholder={PHONE_MASK}
                    inputComponent={TextMaskCustom as any}
                />
            </FormControl>
            <TextField label="Адрес электронной почты" variant="outlined" placeholder="" value={email}
                       onChange={e => setEmail(e.target.value)}/>
            <FormControlLabel required control={<Checkbox />} label="Даю согласие на обработку персональных данных" />
            <Button variant="contained" onClick={submitHandler}>Перезвоните мне</Button>
        </FormGroup>
    );
}

export default FormCallBack;
