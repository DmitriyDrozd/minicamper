import React, { FC } from 'react';
import styles from './Greetings.module.sass';

interface GreetingsProps {
}

const Greetings: FC<GreetingsProps> = () => (
    <div className={styles.Greetings}>
        <img className={styles.Picture} src="main.jpg" alt='кемпер'/>
        <div className={styles.GreetingsText}>
            <div className={styles.Rent}>Аренда автодома для настоящих искателей путешествий</div>
            <div className={styles.Travel}><div className={styles.Description}>Путешествуйте</div><div className={styles.Title}>без границ</div></div>
        </div>
    </div>
);

export default Greetings;
