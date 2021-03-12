import {ADD_TODO, DELETE_TODO, EDIT_TODO} from './types';

export const addTodoItem = (newValue: string) => ({type: ADD_TODO, payload: newValue});
export const editTodo = (value: string, index: number) => ({type: EDIT_TODO, payload: {value, index}});
export const deleteTodo = (todoIndex: number) => ({type: DELETE_TODO, payload: todoIndex});