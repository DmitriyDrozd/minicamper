import React, { FC } from 'react';
import { ROUTE } from '../../constants/routes';
import { CampervanIcon } from '../../icons/Campervan';
import { DriversLicenseIcon } from '../../icons/DriversLicense';
import { HomeIcon } from '../../icons/Home';
import { Icon } from '../../icons/Icon';
import { MoneyHandIcon } from '../../icons/MoneyHand';
import { SnowflakeIcon } from '../../icons/Snowflake';
import styles from './Advantages.module.sass';

interface AdvantagesProps {
}

const advantages = [
    {
        title: 'Мобильность',
        description: 'Домашний комфорт в любом уголке мира',
        icon: <Icon><CampervanIcon/></Icon>,
    },
    {
        title: 'Комфорт',
        description: 'Наличие кровати, газовой плиты, умывальника, USB разъёмов, а также стол и стулья, маркиза по правому борту',
        icon: <Icon><HomeIcon/></Icon>,
    },
    {
        title: 'B-категория',
        description: 'Вес и габаритные характеристики позволяют буксировать наш прицеп без категорий BE и CE',
        icon: <Icon><DriversLicenseIcon/></Icon>,
    },
    {
        title: 'В любое время года',
        description: 'Всесезонное использование благодаря хорошей теплоизоляции, встроенному газовому отоплению и вебасто',
        icon: <Icon><SnowflakeIcon/></Icon>,
    },
    {
        title: 'Экономичность',
        description: 'Стоимость путешествия для 2-3 человек как для одного',
        icon: <Icon><MoneyHandIcon/></Icon>,
    },
];

const Advantages: FC<AdvantagesProps> = () => (
    <section id={ROUTE.about} className={styles.Advantages}>
        <h2 className={styles.Title}>Преимущества путешествовать с нами</h2>
        <div className={styles.AdvantagesList}>{advantages.map(({title, description, icon}) => (
            <div className={styles.Advantage} key={title}>
                {icon}
                <h3 className={styles.AdvantageTitle}>{title}</h3>
                <span>{description}</span>
            </div>
        ))}
        </div>
    </section>
);

export default Advantages;
