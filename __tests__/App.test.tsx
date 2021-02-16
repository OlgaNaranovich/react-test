import * as React from 'react';
import * as ReactDOM from 'react-dom';
import '@testing-library/jest-dom';
import {render} from '@testing-library/react';
import App from '../src/App';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<App />, div);
});

it('renders learn react link', () => {
	const { getByText } = render(<App />);
	const linkElement = getByText(/Create your Todolist/i);
	expect(linkElement).toBeInTheDocument();
});