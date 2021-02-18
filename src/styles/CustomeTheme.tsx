import { createMuiTheme } from '@material-ui/core/styles';

const customTheme = createMuiTheme({
	palette: {
		primary: {
			main: '#556cd6',
		},
		secondary: {
			main: '#19857b',
		},
		text: {
			primary: '#333',
			secondary: '#999999',
		},
		background: {
			default: '#e3e3e3',
		},
	},
	props: {
		MuiButtonBase: {
			disableRipple: true,
		},
	},
});

export default customTheme;