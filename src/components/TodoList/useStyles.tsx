import {createStyles, makeStyles} from '@material-ui/core/styles';
import {Theme} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%',
			backgroundColor: theme.palette.background.paper,

			'& .MuiListItem-container': {
				display: 'flex'
			},

			'& .item-wrapper': {
				position: 'relative'
			},

			'& .item-date': {
				display: 'inline-block',
				color: theme.palette.text.secondary,
				fontSize: '12px'
			},

			'& .secondary-action': {
				position: 'relative',
				transform: 'translateY(0)',
				display: 'flex',
				alignItems: 'center',
				marginLeft: '16px',
				width: '100%',
				maxWidth: '200px'
			},

			'& .MuiTypography-body2': {
				fontSize: 'inherit'
			},

			'& .editable-field': {
				position: 'absolute',
				width: '100%',
				height: '100%',
				top: '0',
				zIndex: '5',

				'&.hidden': {
					display: 'none'
				},

				'& .MuiTextField-root': {
					width: '100%'
				}
			},

			'& .editable-field_wrapper': {
				height: '98%',
				display: 'flex',
				background: '#ffffff',
				justifyContent: 'space-between',
				alignItems: 'center',
				padding: '0 20px 0 55px',

				'& .save-button': {
					paddingRight: '6px'
				}
			},

			[theme.breakpoints.down('sm')]: {
				'& .MuiListItem-root': {
					padding: '4px'
				},

				'& .secondary-action': {
					borderBottom: '1px solid #c8c8c8'
				},

				'& .MuiListItemIcon-root': {
					minWidth: 'auto'
				},

				'& .editable-field': {
					'& .editable-field_wrapper': {
						padding: '0',

						'&.hidden': {
							display: 'none'
						}
					},
				}
			}
		},
	}),
);

export default useStyles;