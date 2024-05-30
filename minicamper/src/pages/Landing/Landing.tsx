import React, {
    FC,
    useEffect
} from 'react';
import {
    useLocation,
} from 'react-router-dom';
import Advantages from '../../components/Advantages/Advantages';
import Callback from '../../components/Callback/Callback';
import FAQ from '../../components/FAQ/FAQ';
import FormBook, { TFormBookSubmitCredentials } from '../../components/FormBook/FormBook';
import { TFormCallBackSubmit } from '../../components/FormCallBack/FormCallBack';
import Gallery from '../../components/Gallery/Gallery';
import Greetings from '../../components/Greetings/Greetings';
import Quote from '../../components/Quote/Quote';
import Rules from '../../components/Rules/Rules';
import StayInTouch from '../../components/StayInTouch/StayInTouch';
import Terms from '../../components/Terms/Terms';
import VivaBraslavBanner from '../../components/VivaBraslavBanner/VivaBraslavBanner';
import ContentWrapper from '../../layout/ContentWrapper/ContentWrapper';
import {
    sendBook,
    sendFeedback
} from '../../service/mailService';
import { GoogleTagManager } from '../../utils/GoogleTagManager';
import {
    getBookHtml,
    getFeedbackHtml
} from '../../utils/mail';
import { scrollToById } from '../../utils/scroll';
import { isMobile as getIsMobile } from '../../utils/device';

interface LandingProps {
}

const VIVA_BRASLAV_END_DATE = Date.parse('28 Jul 2024');

const Landing: FC<LandingProps> = () => {
    const location = useLocation();
    const isMobile = getIsMobile();

    useEffect(() => {
        const hash = location.state?.hash;

        if (hash) {
            scrollToById(hash);
        }
    }, []);

    const submitClientCredentials = async (credentials: TFormBookSubmitCredentials): Promise<void> => {
        const html = getBookHtml(credentials);
        GoogleTagManager.logBookEvent();
        await sendBook(html);
    };

    const submitCallback = async (attributes: TFormCallBackSubmit): Promise<void> => {
        const html = getFeedbackHtml(attributes);
        GoogleTagManager.logCallbackEvent();
        await sendFeedback(html);
    };

    const isVivaBannerActive = Date.now() < VIVA_BRASLAV_END_DATE;

    return (
        <>
            {
                isVivaBannerActive && (
                    <VivaBraslavBanner />
                )
            }
            {!isMobile && (
                <ContentWrapper>
                    <FormBook onSubmit={submitClientCredentials}/>
                </ContentWrapper>
            )}
            <Greetings/>
            <ContentWrapper>
                <>
                    <Advantages/>
                    <Terms/>
                    {isMobile && (
                        <FormBook onSubmit={submitClientCredentials}/>
                    )}
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
        </>
    );
};

export default Landing;
