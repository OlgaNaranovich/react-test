import {todo, ITodoInitialState, TodoActionTypes, TodoAction} from './types';
import createDate from '../helper/createDate';

const currentDate = createDate();

export const reducer = (state = todo, action: TodoAction) => {
	switch (action.type) {
		case TodoActionTypes.ADD_TODO:
			return [
				{value: action.payload, date: currentDate},
				...state
			];

		case TodoActionTypes.EDIT_TODO:
			let newList = [
				{value: action.payload.value, date: currentDate},
				...state
			];
			return newList.filter((item: ITodoInitialState, itemIndex: number) => itemIndex !== (action.payload.index + 1));

		case TodoActionTypes.DELETE_TODO:
			return [...state].filter((item, i) => i !== action.payload);

		default:
			return state;
	}
}
