import React from 'react';
import { YMaps } from '@pbe/react-yandex-maps';
import ReactDOM from 'react-dom/client';
import Theme from './layout/Theme/Theme';
import reportWebVitals from './reportWebVitals';
import Landing from './pages/Landing/Landing';
import './style/index.sass';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);

root.render(
    <React.StrictMode>
        <Theme>
            <YMaps>
                <Landing/>
            </YMaps>
        </Theme>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
