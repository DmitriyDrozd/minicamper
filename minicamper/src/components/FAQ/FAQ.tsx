import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Typography
} from '@mui/material';
import React, { FC } from 'react';
import { CollapseIcon } from '../../icons/Collapse';
import { ExpandIcon } from '../../icons/Expand';
import { QuestionIcon } from '../../icons/Question';
import styles from './FAQ.module.sass';

const FAQs = [
    {
        question: 'Что такое кемпер?',
        answer: 'Это полноценное жилище на колесах. Кемперы бывают разные, но в большинстве из них предусмотрено обеспечение основных потребностей человека — сон, отдых, еда. Пространства в прицепе не так много, однако зонирование выполнено таким образом, чтобы сохранять функциональность и уют. Кемпер разделен на следующие зоны:\n' +
            '\nСпальня и гостиная. Это кровати или диваны — трансформеры, которые ночью используют для отдыха, а днем собирают и получают пространство для совместного времяпрепровождения, игр, просмотра фильмов или просто душевных бесед, предусмотрены розетки для зарядки гаджетов. Установлены шкафчики и полочки для хранения личных вещей, одежды, книг и прочих необходимых атрибутов отпуска.\n' +
            '\nКухня и место хранения продуктов обязательно оборудована мойкой, столом для готовки блюд, есть встроенная газовая плита.',
    },
    {
        question: 'Какая категория прав нужна?',
        answer: '',
    },
    {
        question: 'Как оплачивать аренду?',
        answer: '',
    },
    {
        question: 'Как заключить договор?',
        answer: '',
    },
    {
        question: 'Можно ли брать животных с собой?',
        answer: '',
    },
    {
        question: 'Куда поехать?',
        answer: '',
    },
];

interface FaqProps {
}

interface FaqItemProps {
    question: string,
    answer: string,
    isExpanded: boolean,
    handleChange: (event: React.SyntheticEvent, isExpanded: boolean) => void
}

const expandIcon = <ExpandIcon/>;
const collapseIcon = <CollapseIcon/>;

const FaqItem: FC<FaqItemProps> = ({question, answer, isExpanded, handleChange}) => (
    <Accordion expanded={isExpanded} onChange={handleChange}>
        <AccordionSummary
            expandIcon={isExpanded ? collapseIcon : expandIcon}
            aria-controls={`${question}-content`}
            id={`${question}-header`}
        >
            <span className={styles.QuestionTitle}>{question}</span>
        </AccordionSummary>
        <AccordionDetails>
            <span>{answer}</span>
        </AccordionDetails>
    </Accordion>
);

const Faq: FC<FaqProps> = () => {
    const [expanded, setExpanded] = React.useState<string | false>(false);
    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <div className={styles.Faq}>
            <div className={styles.Title}>
                <h2>Часто задаваемые вопросы</h2>
                <div className={styles.Icon}>
                    <QuestionIcon />
                </div>
            </div>
            <div className={styles.Questions}>
                {FAQs.map(({question, answer}) => (
                    <FaqItem
                        key={question}
                        question={question}
                        answer={answer}
                        isExpanded={expanded === question}
                        handleChange={handleChange(question)}
                    />
                ))}
            </div>
        </div>
    );
};

export default Faq;
