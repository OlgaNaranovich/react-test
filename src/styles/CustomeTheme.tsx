import { createMuiTheme } from '@material-ui/core/styles';

const customTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        background: {
            default: '#e3e3e3',
        },
    },
});

export default customTheme;