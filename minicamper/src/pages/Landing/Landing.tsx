import React, { FC } from 'react';
import Advantages from '../../components/Advantages/Advantages';
import Callback from '../../components/Callback/Callback';
import FAQ from '../../components/FAQ/FAQ';
import Footer from '../../components/Footer/Footer';
import FormBook, { TFormBookSubmitCredentials } from '../../components/FormBook/FormBook';
import { TFormCallBackSubmit } from '../../components/FormCallBack/FormCallBack';
import Gallery from '../../components/Gallery/Gallery';
import Greetings from '../../components/Greetings/Greetings';
import Header from '../../components/Header/Header';
import Quote from '../../components/Quote/Quote';
import Rules from '../../components/Rules/Rules';
import StayInTouch from '../../components/StayInTouch/StayInTouch';
import Terms from '../../components/Terms/Terms';
import ContentWrapper from '../../layout/ContentWrapper/ContentWrapper';
import PageWrapper from '../../layout/PageWrapper/PageWrapper';

interface LandingProps {
}

const Landing: FC<LandingProps> = () => {
    const submitClientCredentials = (credentials: TFormBookSubmitCredentials) => {
        alert('имейл отправлен!');
        console.log(credentials.name, credentials.date, credentials.daysCount, credentials.phone);
    }

    const submitCallback = (attributes: TFormCallBackSubmit) => {
        alert('мы вам перезвоним!');
        console.log(attributes.name, attributes.phone, attributes.email, attributes.question);
    }

    return (
        <>
            <Header />
            <PageWrapper>
                <ContentWrapper><FormBook onSubmit={submitClientCredentials} /></ContentWrapper>
                <ContentWrapper><Greetings /></ContentWrapper>
                <ContentWrapper><Advantages /></ContentWrapper>
                <ContentWrapper><Terms /></ContentWrapper>
                <ContentWrapper><Quote /></ContentWrapper>
                <ContentWrapper><Rules /></ContentWrapper>
                <ContentWrapper><Gallery /></ContentWrapper>
                <ContentWrapper><FAQ /></ContentWrapper>
                <ContentWrapper><StayInTouch /></ContentWrapper>
                <Callback onSubmit={submitCallback}/>
            </PageWrapper>
            <Footer />
        </>
    );
}

export default Landing;
