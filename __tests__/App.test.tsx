import '@testing-library/jest-dom';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {render} from '@testing-library/react';
import App from '../src/App';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
});

it('renders title', () => {
	const {getByText} = render(<App />);
	expect(getByText('Create your Todolist')).toBeInTheDocument();
});