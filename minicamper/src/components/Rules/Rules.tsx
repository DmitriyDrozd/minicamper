import React, { FC } from 'react';
import { isMobile } from '../../utils/device';
import styles from './Rules.module.sass';

interface RulesProps {
}

const rules = [
    {
        title: 'Планируем отпуск',
        description: 'Учтём расстояние, число человек и необходимое вам оборудование. Убедимся, что кемпер свободен на время вашего отпуска.',
    },
    {
        title: 'Бронируем',
        description: 'Автодом будет доступен и полностью готов к поездке — проверим всю технику и проведем химчистку к назначенной дате.',
    },
    {
        title: 'Заключаем договор',
        description: 'Внесение залога и оплаты. Ответим на вопросы о кемпере и условиях аренды. Расскажем все, что вам интересно о путешествии в доме на колёсах.',
    },
    {
        title: 'Передаём кемпер',
        description: 'Проверим состояние прицепа и всех систем, убедимся в исправности техники. После тщательного осмотра юридически зафиксируем наши отношения.',
    },
    {
        title: 'Проводим инструктаж',
        description: 'Покажем и расскажем, как залить воду, сменить кассету, сменить баллон газовой плиты и т. д.',
    },
    {
        title: 'Принимаем кемпер',
        description: 'Юридически оформим сдачу кемпера и с радостью послушаем о ярких впечатлениях, открытиях и событиях!',
    },
];
//fixme: ListItem constant width
const Rules: FC<RulesProps> = () => (
    <div id="rules" className={styles.Rules}>
        <div className={styles.Title}>
            <h2 className={styles.StickyTitle}>Правила аренды кемпера</h2>
        </div>
        <div className={styles.List}>
            {rules.map(({title, description}, index) => {
                const isDividerDisplayed = !isMobile() && index !== rules.length - 1;

                return (
                    <>
                        <div className={styles.Item} key={title}>
                            <div className={styles.Number}>{index + 1}</div>
                            <div className={styles.Title}>{title}</div>
                            <div className={styles.Description}>{description}</div>
                        </div>
                        {isDividerDisplayed && <div className={styles.Divider}/>}
                    </>
                );
            })}
        </div>
    </div>
);

export default Rules;
