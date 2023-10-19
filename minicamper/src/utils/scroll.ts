export const scrollToById = (id: string) => () => {
    const element = window.document.querySelector(`#${id}`) as HTMLDivElement;
    const header = window.document.querySelector(`#header`);
    const body = window.document.querySelector('body');

    const elementY = element?.offsetTop || 0;
    const headerHeight = header?.clientHeight || 0;

    body?.scrollTo({top: elementY - headerHeight, behavior: 'smooth'});
};