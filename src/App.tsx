import * as React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {addNewTodo, editTodoItem, deleteTodoItem} from './store/actions';
import {ITodoInitialState} from './store/types';
import Container from '@material-ui/core/Container';
import FormComponent from './components/Form';
import TodoList from './components/TodoList';

interface IApp {
	todo: ITodoInitialState[],
	addTodo: Function,
	editTodo: Function,
	deleteTodo: Function
}

const App = (props: IApp) => {
	const {todo, addTodo, editTodo, deleteTodo} = props;

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

const mapStateToProps = (state: ITodoInitialState[]) => ({
	todo: state,
});

const mapDispatchToProps = (dispatch:any) => ({
	addTodo: bindActionCreators(addNewTodo, dispatch),
	editTodo: bindActionCreators(editTodoItem, dispatch),
	deleteTodo: bindActionCreators(deleteTodoItem, dispatch)
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);
