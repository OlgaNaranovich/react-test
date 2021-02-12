import { useState } from 'react';

const todoValue = () => {
    const todoInitialState: string[] = localStorage.todoList && Array.isArray(JSON.parse(localStorage.todoList))
        ? JSON.parse(localStorage.todoList)
        : [];
    const [todo, setTodo] = useState(todoInitialState);

    const setCurrentValue = (currentList: string[]) => {
        setTodo(currentList);
        localStorage.todoList = JSON.stringify(currentList);
    }

    return {
        todo,
        addTodo: (todoValue: string) => {
            const newList = [todoValue, ...todo];
            setCurrentValue(newList);
        },
        editTodo: (newValue: string, todoIndex: number) => {
            const newList = [...todo].filter((item, i) => i !== todoIndex);
            newList.unshift(newValue);
            setCurrentValue(newList);
        },
        deleteTodo: (todoIndex: number) => {
            const newList = todo.filter((item, itemIndex) => itemIndex !== todoIndex);
            setCurrentValue(newList);
        }
    };
};

export default todoValue;