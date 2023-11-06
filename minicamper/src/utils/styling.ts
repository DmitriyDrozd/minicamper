export const BASIC_INPUT_ID = 'basic-input-id';

export const getInputClassname = () => {
    const element = document.querySelector(`#${BASIC_INPUT_ID}`);

    if (!element) {
        return '';
    }

    return element.className;
}