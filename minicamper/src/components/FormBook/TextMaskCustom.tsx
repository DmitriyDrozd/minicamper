import {
    useEffect,
    useState
} from 'react';
import * as React from 'react';
import InputMask from 'react-input-mask';
import { getInputClassname } from '../../utils/styling';

export const TextMaskCustom = (props: any) => {
    return (
        <InputMask
            {...props}
            mask="+375 (99) 999-99-99"
        />
    );
};

export const TextMaskWrapper = React.forwardRef((props: any, ref) => {
    const { component: Component, ...other } = props;
    const [style, setStyle] = useState('');

    useEffect(() => {
        setStyle(getInputClassname());
    }, []);

    React.useImperativeHandle(ref, () => ({
        focus: () => {
            // logic to focus the rendered component from 3rd party belongs here
        },
        // hiding the value e.g. react-stripe-elements
    }));

    return <TextMaskCustom {...other} className={style} />;
});