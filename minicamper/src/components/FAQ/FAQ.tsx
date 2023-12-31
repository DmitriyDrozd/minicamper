import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import React, { FC } from 'react';
import { ROUTE } from '../../constants/routes';

import { CollapseIcon } from '../../icons/Collapse';
import { ExpandIcon } from '../../icons/Expand';
import { QuestionIcon } from '../../icons/Question';
import styles from './FAQ.module.sass';

const FAQs = [
    {
        question: 'Что такое кемпер?',
        answer: (
            <div>
                Это полноценное жилище на колесах. Кемперы бывают разные, но в большинстве из них предусмотрено обеспечение основных потребностей человека — сон, отдых, еда. Пространства в прицепе не так много, однако зонирование выполнено таким образом, чтобы сохранять функциональность и уют. Кемпер разделен на следующие зоны:
                <br/><b>Спальня и гостиная.</b> Это кровати или диваны — трансформеры, которые ночью используют для отдыха, а днем собирают и получают пространство для совместного времяпрепровождения, игр, просмотра фильмов или просто душевных бесед, предусмотрены розетки для зарядки гаджетов. Установлены шкафчики и полочки для хранения личных вещей, одежды, книг и прочих необходимых атрибутов отпуска.
                <br/><b>Кухня и место хранения продуктов</b> обязательно оборудована мойкой, столом для готовки блюд, есть встроенная газовая плита.
            </div>
        ),
    },
    {
        question: 'Какая категория прав нужна?',
        answer: (
            <div>
                Основной критерий: масса автодома не превышает 3,5 тонны и размещает менее 8 человек - это категория В.<br/><br/>
                <b>Безопасное поведение на дороге</b><br/>
                При управлении автомобилем с прицепом — кемпером не рекомендует совершать обгон, если впереди идущий транспорт движется со скоростью выше 60 км/ч, так как автосцепка предполагает больше времени на маневр. Длина сцепки превышает стандартную длину авто, поэтому во время обгона начинайте перестраиваться в соседний ряд только после того, как прицепное устройство окажется впереди обгоняемого автомобиля. Именно для этого нужны дополнительные зеркала заднего вида. Максимально допустимая скорость движения сцепки по трассе не должна превышать 70 км/ч. Это не только обезопасит вас во время движения, но позволит избежать существенного увеличения расхода топлива. При буксировке кемпера затраты на топливо увеличиваются на 20-30%.<br/><br/>
                Вот некоторые рекомендации, которые важно помнить при движении с прицепом на легковом автомобиле:<br/>
                <ul>
                    <li>Тормозной путь во время буксировки прицепа увеличивается в среднем на 4-5 секунд и от 10 до 30 метров, в зависимости от модели авто и кемпера.</li>
                    <li>Чтобы подняться в гору, стоит переключиться на пониженную передачу заранее, а не во время подъема.</li>
                    <li>Снижайте скорость перед спуском с горы, так как прицеп будет подталкивать автомобиль и ускорять его.</li>
                    <li>Крупногабаритный транспорт, автобусы, грузовики, создает воздушный поток, который снижает устойчивость автосцепки, поэтому на узких дорогах старайтесь держаться дальше от встречного потока.</li>
                    <li>Боковой ветер, особенно при буксировке кемпера на мосту, может создавать эффект паруса. В такой ситуации кемпер может отклониться от прямолинейного движения и начать “вилять”, снижая устойчивость вашего автомобиля. Раскачавшись, прицеп может утянуть за собой автомобиль и сцепка может выехать в кювет или перевернуться.</li>
                    <li>При повороте с автосцепкой кемпер смещается ближе к центру окружности. Если вы поворачиваете направо, заходите в поворот ближе к левому краю полосы, и наоборот. Если не учитывать этот момент, то прицеп может наехать на бордюр, повредить шины, колесные диски или днище. И в самом худшем варианте — перевернуться.</li>
                </ul>
                Если во время движения вы почувствовали, что прицеп начал вилять из стороны в сторону, не стоит натягивать автосцепку увеличением скорости, это небезопасно. Остановите автомобиль и проверьте состояние прицепного устройства, давление в шинах, а также расположение груза в кемпере. Не лишним будет убедиться, что подвеска авто и рама в полном порядке, и только после этого продолжать движение, снизив скорость.<br/><br/>
                Когда вы планируете сделать длительную остановку, присмотрите такое место, чтобы участок был ровным и без большого уклона. Колеса сцепного устройства обязательно зафиксируйте противооткатными упорами. Автомобиль поставьте на первую передачу.<br/><br/>
                Движение автосцепки задним ходом тоже требует подготовки. Обойдите вокруг кемпера и убедитесь, что ничто не помешает маневру. При повороте рулевое колесо поворачивается в сторону маневра, а после начала движения кемпера, рулевое колесо следует вывернуть в противоположном направлении и контролировать ход прицепного устройства через зеркала.<br/>
                <br/><b>Как правильно загружать кемпер?</b><br/>
                Каждый кемпер имеет инструкцию по эксплуатации, несоблюдение правил влечет аварийные ситуации при буксировке легкового прицепа и отказ в получении страховки в случае аварии. Какие правила нужно знать, чтобы избежать негативных сценариев на дороге:<br/>
                <ul>
                    <li>Нельзя загружать переднюю или заднюю часть кемпера, чтобы не смещать центр тяжести. Во время движения такая загрузка ускоряет автосцепку и приводит к проблемам с торможением.</li>
                    <li>Самый тяжелый груз, тент-палатка или что-то еще, должны быть расположены над осью кемпера. Если сместить расположение к передней части, это создаст проблемы с торможением, а нагрузка на заднюю часть будет раскачивать караван из стороны в сторону во время движения.</li>
                    <li>Если вы берете в дорогу что-то тяжелое, то располагайте такие вещи на полу, а не на верхних полках.</li>
                    <li>Опасные предметы (колюще-режущие, например, шампура), а также канистры с водой, габаритные предметы стоит располагать на полу или в шкафах, равномерно распределив вес по всему кемперу и зафиксировав их во избежание травматичных ситуаций и повреждения мебели и оборудования.</li>
                    <li>Верхние полки подойдут для легких вещей — полотенец, одежды, подушек и так далее.</li>
                </ul>
                Во время движения кемпер трясет, и плохо закрепленные вещи могут выпасть из шкафов и нанести ущерб самому кемперу. Для продолжения движения, уберите все вещи на полки и в шкафы, не оставляйте на кроватях и открытых полках. Распределяйте багаж равномерно по всем шкафам. Помните, что балансировка играет важную роль в устойчивости и безопасности движения автосцепки. Перед отправлением закройте все канистры с жидкостями, и слейте бачок туалета. Все это влияет в первую очередь на ваш комфорт и безопасность во время движения.<br/><br/>
                Это основные правила, соблюдение которых сделает ваше путешествие приятным и спокойным. Обязательно выслушайте инструкции сотрудников, они подскажут вам, какие особенности есть у выбранной вами модели кемпера. Не стесняйтесь задавать вопросы, как ведет себя автосцепка на дороге в разное время года, на разной поверхности и в разных погодных условиях, чем больше вы будете знать о прицепе, тем легче будет справиться с управлением сцепки автомобиля и прицепом — кемпером.
            </div>
        ),
    },
    {
        question: 'Как оплачивать аренду?',
        answer: (
            <div>
                <b>Оплата через систему "Расчет" (ЕРИП)</b><br/>
                <ol>
                    <li>Выберите пункт ЕРИП в интернет-банкинге, мобильном приложении</li>
                    <li>
                        Выберите последовательно вкладку:
                        <ul>
                            <li>Сервис E-POS</li>
                            <li>в появившемся окне введите номер лицевого счета, указанного менеджером</li>
                        </ul>
                    </li>
                    <li>Сумма к оплате появится автоматически</li>
                </ol>
                Если Вы осуществляете платеж в кассе банка, пожалуйста, сообщите кассиру о необходимости проведения платежа через систему ”Расчет“ (ЕРИП).<br/><br/>
                Для бронирования транспортного средства на заранее запланированную дату, заключается договор и вносится предоплата в размере 100рублей. Остаток суммы оплачивается не позднее трех дней до начала аренды. При отказе менее чем за семь суток до получения транспортного средства, предоплата не возвращается Арендатору.
            </div>
        ),
    },
    {
        question: 'Как заключить договор?',
        answer: (
            <div>
                Для заключения договора необходимо предоставить личные данные:
                <ul>
                    <li>ФИО</li>
                    <li>Дата рождения</li>
                    <li>Серия и номер паспорта, кем и когда выдан</li>
                    <li>Адрес регистрации</li>
                </ul>
            </div>
        ),
    },
    {
        question: 'Можно ли брать животных с собой?',
        answer: 'Перевозка животных в кемпере запрещена.',
    },
    {
        question: 'Куда поехать?',
        answer: 'Свяжитесь с нами любым удобным способом, мы готовы предложить Вам места для отличного кемпинга!',
    },
];

interface FaqProps {
}

interface FaqItemProps {
    question: string,
    answer: React.ReactNode | string,
    isExpanded: boolean,
    handleChange: (event: React.SyntheticEvent, isExpanded: boolean) => void
}

const expandIcon = <ExpandIcon/>;
const collapseIcon = <CollapseIcon/>;
const getId = (panel: string) => `${panel}-header`.replaceAll(/[?\s]/g, '');

const FaqItem: FC<FaqItemProps> = ({question, answer, isExpanded, handleChange}) => (
    <Accordion expanded={isExpanded} onChange={handleChange} id={getId(question)}>
        <AccordionSummary
            className={styles.TitleWrapper}
            expandIcon={isExpanded ? collapseIcon : expandIcon}
            aria-controls={`${question}-content`}
        >
            <span className={styles.QuestionTitle}>{question}</span>
        </AccordionSummary>
        <AccordionDetails>
            {answer}
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
        <div id={ROUTE.faq} className={styles.Faq}>
            <div className={styles.Title}>
                <div className={styles.StickyTitle}>
                    <h2>Часто задаваемые вопросы</h2>
                    <div className={styles.Icon}>
                        <QuestionIcon />
                    </div>
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
