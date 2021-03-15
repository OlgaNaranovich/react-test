export enum TodoActionTypes {
	ADD_TODO = 'ADD_TODO',
	EDIT_TODO = 'EDIT_TODO',
	DELETE_TODO = 'DELETE_TODO'
}

export interface ITodoInitialState {
	value: string;
	date: string;
}

interface IEditTodoActionPayload {
	value: string;
	index: number;
}

interface IAddTodoAction {
	type: TodoActionTypes.ADD_TODO;
	payload: string;
}

interface IEditTodoAction {
	type: TodoActionTypes.EDIT_TODO;
	payload: IEditTodoActionPayload;
}

interface IDeleteTodoAction {
	type: TodoActionTypes.DELETE_TODO;
	payload: number;
}

export type TodoAction = IAddTodoAction | IEditTodoAction | IDeleteTodoAction;

const savedList = localStorage.todoList;
export const todo = savedList && Array.isArray(JSON.parse(savedList))
	? JSON.parse(savedList)
	: [];