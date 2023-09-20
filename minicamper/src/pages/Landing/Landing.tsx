import React, { FC } from 'react';
import FormBook, { TFormBookSubmitCredentials } from '../../components/FormBook/FormBook';
import styles from './Landing.module.sass';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';

interface LandingProps {
}

const Landing: FC<LandingProps> = () => {
    const submitClientCredentials = (credentials: TFormBookSubmitCredentials) => {
        alert('имейл отправлен!');
        console.log(credentials.name, credentials.date, credentials.daysCount, credentials.phone);
    }

    return (
        <PageWrapper>
            <div className={styles.Landing}>
                <FormBook onSubmit={submitClientCredentials}/>
            </div>
        </PageWrapper>
    );
}

export default Landing;
