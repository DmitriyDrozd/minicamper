import * as React from 'react';
import { IMaskInput } from 'react-imask';

interface CustomProps {
    onChange: (event: { target: { name: string; value: string } }) => void;
    name: string;
}

export const TextMaskCustom = React.forwardRef<HTMLElement, CustomProps>(
    function TextMaskCustom(props) {
        const { onChange, ...other } = props;
        return (
            <IMaskInput
                {...other}
                mask="+375 (00) 000-00-00"
                definitions={{
                    '#': /[1-9]/,
                }}
                onAccept={(value: any) => onChange({ target: { name: props.name, value } })}
                overwrite
            />
        );
    },
);