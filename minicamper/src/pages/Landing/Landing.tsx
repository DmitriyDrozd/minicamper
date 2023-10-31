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
import {
    sendBook,
    sendFeedback
} from '../../service/mailService';
import {
    getBookHtml,
    getFeedbackHtml
} from '../../utils/mail';

interface LandingProps {
}

const Landing: FC<LandingProps> = () => {
    const submitClientCredentials = async (credentials: TFormBookSubmitCredentials): Promise<void> => {
        const html = getBookHtml(credentials);
        await sendBook(html);
    };

    const submitCallback = async (attributes: TFormCallBackSubmit): Promise<void> => {
        const html = getFeedbackHtml(attributes);
        await sendFeedback(html);
    };

    return (
        <>
            <Header/>
            <PageWrapper>
                <ContentWrapper>
                    <FormBook onSubmit={submitClientCredentials}/>
                </ContentWrapper>
                <Greetings/>
                <ContentWrapper>
                    <>
                        <Advantages/>
                        <Terms/>
                    </>
                </ContentWrapper>
                <Quote/>
                <ContentWrapper>
                    <Rules/>
                </ContentWrapper>
                <Gallery/>
                <ContentWrapper>
                    <>
                        <FAQ/>
                        <StayInTouch/>
                    </>
                </ContentWrapper>
                <Callback onSubmit={submitCallback}/>
            </PageWrapper>
            <Footer/>
        </>
    );
};

export default Landing;
