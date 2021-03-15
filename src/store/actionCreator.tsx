import {TodoActionTypes} from './types';

export const addTodoItem = (newValue: string) => ({
    type: TodoActionTypes.ADD_TODO,
    payload: newValue
});
export const editTodo = (value: string, index: number) => ({
    type: TodoActionTypes.EDIT_TODO,
    payload: {value, index}
});
export const deleteTodo = (todoIndex: number) => ({
    type: TodoActionTypes.DELETE_TODO,
    payload: todoIndex
});