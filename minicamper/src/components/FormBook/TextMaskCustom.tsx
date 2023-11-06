import * as React from 'react';
import InputMask from 'react-input-mask';

export const TextMaskCustom = (props: any) => {
    return (
        <InputMask
            {...props}
            className="MuiInputBase-input MuiOutlinedInput-input css-17cvodc-MuiInputBase-input-MuiOutlinedInput-input"
            mask="+375 (99) 999-99-99"
        />
    );
};

export const TextMaskWrapper = React.forwardRef((props: any, ref) => {
    const { component: Component, ...other } = props;

    React.useImperativeHandle(ref, () => ({
        focus: () => {
            // logic to focus the rendered component from 3rd party belongs here
        },
        // hiding the value e.g. react-stripe-elements
    }));

    return <TextMaskCustom {...other} />;
});