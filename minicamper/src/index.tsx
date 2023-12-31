import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom';
import { ROUTER } from './constants/routes';
import PageWrapper from './layout/PageWrapper/PageWrapper';

import Theme from './layout/Theme/Theme';
import reportWebVitals from './reportWebVitals';
import Landing from './pages/Landing/Landing';
import Politcnda from './pages/Politcnda/Politcnda';
import { ApplicationContextProvider } from './store/applicationContext';
import { GoogleTagManager } from './utils/GoogleTagManager';

import './style/index.sass';

GoogleTagManager.initialize();

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);

root.render(
    <React.StrictMode>
        <Theme>
            <ApplicationContextProvider>
                <Router>
                    <PageWrapper>
                        <Routes>
                            <Route path={ROUTER.politcnda} element={<Politcnda/>}/>
                            <Route path={ROUTER.landing} element={<Landing/>}/>
                        </Routes>
                    </PageWrapper>
                </Router>
            </ApplicationContextProvider>
        </Theme>
    </React.StrictMode>,
);

reportWebVitals();
