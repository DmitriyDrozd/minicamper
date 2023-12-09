import TagManager from 'react-gtm-module';
import { gtmId } from '../constants/GTM';

const EVENT_NAME = {
    bookEvent: 'bookEvent',
    callBackEvent: 'callBackEvent',
}

export class GoogleTagManager {
    static initialize () {
        TagManager.initialize({
            gtmId,
        });
    }

    static sendEvent (event: string) {
        TagManager.dataLayer({ dataLayer: { event } });
    }

    static logBookEvent () {
        GoogleTagManager.sendEvent(EVENT_NAME.bookEvent);
    }

    static logCallbackEvent () {
        GoogleTagManager.sendEvent(EVENT_NAME.callBackEvent);
    }
}


