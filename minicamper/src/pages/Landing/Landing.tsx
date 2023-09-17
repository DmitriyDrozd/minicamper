import React, { FC } from 'react';
import styles from './Landing.module.sass';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';

interface LandingProps {
}

const Landing: FC<LandingProps> = () => (
    <PageWrapper>
        <div className={styles.Landing}>
            Landing Page
        </div>
    </PageWrapper>
);

export default Landing;
