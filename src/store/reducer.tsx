import {todo, ADD_TODO, EDIT_TODO, DELETE_TODO, ITodoInitialState, IAction} from './types';
import createDate from '../helper/createDate';

const currentDate = createDate();

export const reducer = (state = todo, action: IAction) => {
	switch (action.type) {
		case ADD_TODO:
			return [
				{value: action.payload, date: currentDate},
				...state
			];

		case EDIT_TODO:
			let newList = [
				{value: action.payload.value, date: currentDate},
				...state
			];
			return newList.filter((item: ITodoInitialState, itemIndex: number) => itemIndex !== (action.payload.index + 1));

		case DELETE_TODO:
			return [...state].filter((item, i) => i !== action.payload);

		default:
			return state;
	}
}
