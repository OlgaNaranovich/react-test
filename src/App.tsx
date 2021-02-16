import * as React from 'react';
import Container from '@material-ui/core/Container';
import FormComponent from './components/Form';
import TodoList from './components/TodoList';
import useTodoState from './useTodoState';

const App = () => {
	const {todo, addTodo, editTodo, deleteTodo} = useTodoState();

	return (
		<Container maxWidth="lg">
			<h1>Create your Todolist</h1>
			<FormComponent saveTodo={addTodo}/>
			<TodoList
				todo={todo}
				editTodo={editTodo}
				deleteTodo={deleteTodo}/>
		</Container>
	);
};

export default App;
