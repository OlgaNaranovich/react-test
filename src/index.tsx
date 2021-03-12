import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {ThemeProvider} from '@material-ui/styles';
import customTheme from './styles/CustomeTheme';
import App from './App';
import {reducer} from './store/reducer';

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(()=>{
	localStorage.setItem('todoList', JSON.stringify(store.getState()));
});

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={customTheme}>
			<App />
		</ThemeProvider>
	</Provider>,
	document.querySelector('#root'),
);
