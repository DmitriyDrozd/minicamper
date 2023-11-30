export const scrollToById = (id: string) => () => {
    const element = document.querySelector(`#${id}`) as HTMLDivElement;
    const header = document.querySelector(`#header`);
    const headerHeight = header?.clientHeight || 0;
    const y = element.getBoundingClientRect().top + document.body.scrollTop - headerHeight;

    document.body.scrollTo({top: y, behavior: 'smooth'});
};