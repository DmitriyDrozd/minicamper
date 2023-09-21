import React, { FC } from 'react';
import Advantages from '../../components/Advantages/Advantages';
import Callback from '../../components/Callback/Callback';
import FAQ from '../../components/FAQ/FAQ';
import FormBook, { TFormBookSubmitCredentials } from '../../components/FormBook/FormBook';
import Gallery from '../../components/Gallery/Gallery';
import Greetings from '../../components/Greetings/Greetings';
import Quote from '../../components/Quote/Quote';
import Rules from '../../components/Rules/Rules';
import StayInTouch from '../../components/StayInTouch/StayInTouch';
import Terms from '../../components/Terms/Terms';
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
            <FormBook onSubmit={submitClientCredentials} />
            <Greetings />
            <Advantages />
            <Terms />
            <Quote />
            <Rules />
            <Gallery />
            <FAQ />
            <StayInTouch />
            <Callback />
        </PageWrapper>
    );
}

export default Landing;
