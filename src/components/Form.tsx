import * as React from 'react';
import {createStyles, Theme} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { useTheme } from '@material-ui/core/styles';

const useStyles = ({palette}: Theme) => createStyles({
	root: {
		display: 'flex',
		flexDirection: 'column',
		backgroundColor: palette.background.default,
		color: palette.primary.main,
	},
});

const FormComponent = () => {
	const theme = useTheme();
	const classes = useStyles(theme);

	return (
		<form style={classes.root} noValidate autoComplete="off">
			<TextField id="standard-basic" label="Standard" />
		</form>
	);
};

export default FormComponent;
