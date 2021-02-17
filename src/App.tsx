import * as React from 'react';
import Container from '@material-ui/core/Container';
import FormComponent from './components/Form';
import TodoList from './components/TodoList';
import useTodoState from './hooks/useTodoState';

const App = () => {
	const {todo, addTodo, editTodo, deleteTodo} = useTodoState();

	return (
		<Container maxWidth="lg">
			<FormComponent
				todo={todo}
				saveTodo={addTodo}/>
			<TodoList
				todo={todo}
				editTodo={editTodo}
				deleteTodo={deleteTodo}/>
		</Container>
	);
};

export default App;
