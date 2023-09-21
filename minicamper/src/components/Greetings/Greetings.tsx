import React, { FC } from 'react';
import styles from './Greetings.module.sass';

interface GreetingsProps {
}

const Greetings: FC<GreetingsProps> = () => (
    <div className={styles.Greetings}>
        <img className={styles.Picture} src="main.png"/>
        <div className={styles.GreetingsText}>
            <div>Путешествуйте<span>без границ</span></div>
            <div>Аренда автодома для настоящих искателей путешествий</div>
        </div>
    </div>
);

export default Greetings;
