import {createStyles, makeStyles} from '@material-ui/core/styles';
import {Theme} from '@material-ui/core/styles/createMuiTheme.d.ts';

export const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		paper: {
			position: 'absolute',
			width: 400,
			backgroundColor: theme.palette.background.paper,
			boxShadow: theme.shadows[5],
			padding: theme.spacing(2, 4, 3),
			top: '50%',
			left: '50%',
			transform: 'translate(-50%, -50%)',
			minHeight: '150px',
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'space-around',

			'& .button-wrapper': {
				textAlign: 'center',

				'& button': {
					textTransform: 'uppercase',
					padding: '10px 20px',
					margin: '10px',
					width: '130px',
					cursor: 'pointer',
					border: '1px solid #b9b9b9',
					borderRadius: '3px',
					backgroundColor: theme.palette.background.paper,
					transition: 'all 0.2s ease'
				},

				'& button:hover': {
					backgroundColor: '#eeeeee'

				},
			}
		},
	}),
);