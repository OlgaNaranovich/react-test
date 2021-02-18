import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import customTheme from './styles/CustomeTheme';
import App from './App';

ReactDOM.render(
	<ThemeProvider theme={customTheme}>
		<App />
	</ThemeProvider>,
	document.querySelector('#root'),
);
