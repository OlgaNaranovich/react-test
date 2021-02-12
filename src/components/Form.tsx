import React, {useState} from 'react';
import {makeStyles, createStyles, Theme} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import {useTheme} from '@material-ui/core/styles';

interface ISaveTodoList {
	saveTodo: Function;
}

const useStyles = makeStyles(({palette}: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			flexDirection: 'column',
			backgroundColor: palette.background.default,
			'& label, & input': {
				paddingLeft: '20px'
			},
		},
	}),
);

const FormComponent = (props: ISaveTodoList) => {
	const {saveTodo} = props;
	const [value, setValue] = useState('');
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
		saveTodo(value);
		reset();
	}
	return (
		<form className={classes.root} noValidate autoComplete="off" onSubmit={formSubmit}>
			<TextField
				id="standard-basic"
				label="Add todo"
				value={value}
				onChange={changeInput} />
		</form>
	);
};

export default FormComponent;
