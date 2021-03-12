import * as React from 'react';
import {useState} from 'react';
import {makeStyles, createStyles, useTheme} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import ModalPopup from './ModalPopup';
import {ITodoInitialState} from '../store/types';

interface ISaveTodoList {
	todo: ITodoInitialState[];
	saveTodo: Function;
}

const useStyles = makeStyles(() =>
	createStyles({
		root: {
			display: 'flex',
			flexDirection: 'column',
			'& label, & input': {
				paddingLeft: '20px'
			},
		},
	}),
);

const FormComponent = (props: ISaveTodoList) => {
	const {todo, saveTodo} = props;
	const [value, setValue] = useState('');
	const [openModal, setOpenModal] = React.useState(false);
	const theme = useTheme();
	const classes = useStyles(theme);

	const reset = () => {
		setValue('');
	}

	const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const formSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const isExist = !!todo.find(item => item.value === value);
		if (isExist) {
			setOpenModal(true);
		} else {
			if (value) saveTodo(value);
			reset();
		}
	}

	return (
		<>
			<form className={classes.root} noValidate autoComplete="off" onSubmit={formSubmit}>
				<TextField
					id="standard-basic"
					label="Add todo"
					value={value}
					onChange={changeInput} />
			</form>
			<ModalPopup
				open={openModal}
				setOpen={setOpenModal}
				currentValue={value}
				addTodo={saveTodo}
				resetValue={reset}/>
		</>
	);
};

export default FormComponent;
