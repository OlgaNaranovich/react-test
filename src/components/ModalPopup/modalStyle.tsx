import {createStyles, makeStyles} from '@material-ui/core/styles';
import {Theme} from '@material-ui/core/styles/createMuiTheme.d.ts';

function rand() {
	return Math.round(Math.random() * 20) - 10;
}

export function getModalStyle() {
	const top = 50 + rand();
	const left = 50 + rand();

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		paper: {
			position: 'absolute',
			width: 400,
			backgroundColor: theme.palette.background.paper,
			border: '2px solid #000',
			boxShadow: theme.shadows[5],
			padding: theme.spacing(2, 4, 3),
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)'
		},
	}),
);