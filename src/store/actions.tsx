import {addTodoItem, editTodo, deleteTodo} from './actionCreator';
import {Dispatch} from 'redux';

export const addNewTodo = (value: string) => (dispatch: Dispatch) =>  {
	dispatch(addTodoItem(value));
};

export const editTodoItem = (value: string, index: number) => (dispatch: Dispatch) => {
	dispatch(editTodo(value, index));
};

export const deleteTodoItem = (todoIndex: number) => (dispatch: Dispatch) => {
	dispatch(deleteTodo(todoIndex));
};