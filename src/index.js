import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import App from './App';
import createMyTheme from './styles/customTheme';

ReactDOM.render(
    <ThemeProvider theme={createMyTheme}>
        <App />
    </ThemeProvider>,
    document.querySelector('#root'),
);