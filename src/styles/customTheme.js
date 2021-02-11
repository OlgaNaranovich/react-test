import { createMuiTheme } from '@material-ui/core/styles';
import red from "@material-ui/core/colors/red";

const createMyTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#e3e3e3',
        },
    },
});

export default createMyTheme;