import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { App } from './App';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        color: #000;
    }
`;

ReactDOM.render(
    <>
        <GlobalStyle />
        <App />
    </>,
    document.getElementById('app')
);
