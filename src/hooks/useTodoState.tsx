import { useState } from 'react';
import createDate from '../helper/createDate';

export interface ITodoInitialState {
    value: string;
    date: string;
}

const todoValue = () => {
    const savedList = localStorage.todoList;
    const todoInitialState: ITodoInitialState[] = savedList && Array.isArray(JSON.parse(savedList))
        ? JSON.parse(savedList)
        : [];
    const [todo, setTodo] = useState(todoInitialState);

    const currentDate = createDate();
    const setCurrentValue = (currentList: ITodoInitialState[]) => {
        setTodo(currentList);
        localStorage.todoList = JSON.stringify(currentList);
    }

    return {
        todo,
        addTodo: (todoValue: string) => {
            const newList = [{value: todoValue, date: currentDate}, ...todo];
            setCurrentValue(newList);
        },
        editTodo: (newValue: string, todoIndex: number) => {
            const newList = [...todo].filter((item, i) => i !== todoIndex);
            newList.unshift({value: newValue, date: currentDate});
            setCurrentValue(newList);
        },
        deleteTodo: (todoIndex: number) => {
            const newList = todo.filter((item, itemIndex) => itemIndex !== todoIndex);
            setCurrentValue(newList);
        }
    };
};

export default todoValue;