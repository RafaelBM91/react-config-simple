import * as React from 'react';
import { Text } from './styled';
import { Component } from './Component';
import './sass.scss';
import * as CatMeme from './assets/cat.jpg';
import * as Svg from './assets/kiwi.svg';

export const App: React.FunctionComponent<{}> = ({}) => {
    return (
        <div className="app-container">
            <h1>Hello Word..!</h1>
            <Text>styled-component example...</Text>
            <p>environment: {process.env.TEST}</p>
            <br/>
            <img className="image" src={CatMeme} alt="CatMeme" />
            <br/>
            <Component />
            <br/>
            <img src={Svg} alt="Kiwi"/>
        </div>
    );
}
