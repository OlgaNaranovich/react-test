import '@testing-library/jest-dom';
import * as React from 'react';
import {render, fireEvent, getByLabelText, getByTitle} from '@testing-library/react';
import FormComponent from '../../src/components/Form';

describe('Form Component', () => {
	let inputValue;
	const todo = [{value: 'Todo item', date: 'Feb 17, 2021, 12:16 PM'}];
	const saveTodo = jest.fn();
	const { container } = render(<FormComponent saveTodo={saveTodo} todo={todo}/>);
	const form = getByTitle(container, 'Form');
	const input = getByLabelText(container, 'Add todo');

	it('calls "onSubmit" if value is not empty and not duplicate', () => {
		inputValue = 'New todo';

		fireEvent.change(input, { target: { value: inputValue } });
		expect(input.value).toBe(inputValue);
		fireEvent.submit(form);
		expect(saveTodo).toBeCalled();
	});

	it('open modal popup if value is not empty and duplicate', () => {
		inputValue = 'Todo item';
		const setOpenModal = jest.fn();
		const handleClick = jest.spyOn(React, 'useState');

		handleClick.mockImplementation(openModal => [openModal, setOpenModal]);
		fireEvent.change(input, { target: { value: inputValue } });
		expect(input.value).toBe(inputValue);
		fireEvent.submit(form);
		expect(setOpenModal).toBeTruthy();
	});
});




