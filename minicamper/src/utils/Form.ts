import { useState } from 'react';

type TValidatedValue = string | Date | number;
type TValidator = (value: string | TValidatedValue) => boolean;

export const requiredRule: TValidator = (value: TValidatedValue) => !!value;

// +XXX (XX) XXX-XX-XX
export const phoneRule: TValidator = (value: TValidatedValue) => (value as string).replaceAll(/_/g, '').length === 19;

export const useValidation = (formFields: { [field: string]: TValidatedValue }) => {
    const [showErrors, setShowErrors] = useState(false);
    const errors: { [field: string]: boolean } = {};

    let hasError = false;

    for (const field in formFields) {
        const validations = [requiredRule]

        if (field === 'phone') {
            validations.push(phoneRule);
        }

        if (validations.some(rule => !rule(formFields[field]))) {
            errors[field] = true;
            hasError = true;
        }
    }

    return { errors, hasError, showErrors, setShowErrors };
}
