export const ROUTE = {
    about: 'about',
    terms: 'terms',
    rules: 'rules',
    gallery: 'gallery',
    faq: 'faq',
    contacts: 'contacts',
};

export type TNavLink = {
    title: string,
    url: string,
}

export const LINKS: TNavLink[] = [
    {title: 'О нас', url: ROUTE.about},
    {title: 'Условия аренды', url: ROUTE.terms},
    {title: 'Правила аренды', url: ROUTE.rules},
    {title: 'Галерея', url: ROUTE.gallery},
    {title: 'Вопросы', url: ROUTE.faq},
    {title: 'Контакты', url: ROUTE.contacts}
];