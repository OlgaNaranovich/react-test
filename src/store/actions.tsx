// @ts-ignore
import {Dispatch} from 'redux';
import {TodoAction} from './types';
import {addTodoItem, editTodo, deleteTodo} from './actionCreator';

export const addNewTodo = (value: string) => (dispatch: Dispatch<TodoAction>) =>  {
	dispatch(addTodoItem(value));
};

export const editTodoItem = (value: string, index: number) => (dispatch: Dispatch<TodoAction>) => {
	dispatch(editTodo(value, index));
};

export const deleteTodoItem = (todoIndex: number) => (dispatch: Dispatch<TodoAction>) => {
	dispatch(deleteTodo(todoIndex));
};