import { YMaps } from '@pbe/react-yandex-maps';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.sass';
import reportWebVitals from './reportWebVitals';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import Landing from './pages/Landing/Landing';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);

const router = createBrowserRouter([
    {
        path: '/',
        element: <Landing/>,
    },
]);

root.render(
    <React.StrictMode>
        <YMaps>
            <RouterProvider router={router}/>
        </YMaps>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
