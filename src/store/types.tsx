export const ADD_TODO = 'ADD_TODO';
export const EDIT_TODO = 'EDIT_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export interface ITodoInitialState {
	value: string;
	date: string;
}

interface IActionPayloadObject {
	value: string;
	index: number;
}

export interface IAction {
	type: string;
	payload: string | number | IActionPayloadObject;
}

const savedList = localStorage.todoList;
export const todo = savedList && Array.isArray(JSON.parse(savedList))
	? JSON.parse(savedList)
	: [];