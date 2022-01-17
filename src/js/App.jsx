import 'core-js/stable';
import 'regenerator-runtime/runtime';
import React from 'react';
import { render } from 'react-dom';

export default class App extends React.PureComponent {
    render() {
        return (
            <React.StrictMode>
                <div />
            </React.StrictMode>
        );
    }
}

render(
    <App />,
    document.getElementById('app-root')
);