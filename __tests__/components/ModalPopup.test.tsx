import '@testing-library/jest-dom';
import * as React from 'react';
import {render, fireEvent} from '@testing-library/react';
import ModalPopup from '../../src/components/ModalPopup';

describe('Modal Popup component', () => {
	const isOpen = true;
	const addTodo = jest.fn();
	const resetValue = jest.fn();
	const setOpen = jest.fn();
	const currentValue = 'test';
	const {getByText} = render(<ModalPopup
		open={isOpen}
		addTodo={addTodo}
		currentValue={currentValue}
		resetValue={resetValue}
		setOpen={setOpen}/>);
	const addButton = getByText('Add');
	const cancelButton = getByText('Cancel');

	it('if "Add" button was clicked', () => {
		fireEvent.click(addButton);
		expect(addTodo).toBeCalled();
	});

	it('if "Cancel" button was clicked', () => {
		fireEvent.click(cancelButton);
		expect(setOpen).toBeCalled();
	});
});




