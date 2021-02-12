import React, {useState} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import TextField from '@material-ui/core/TextField';

interface ITodoList {
    todo: string[];
    editTodo: Function;
    deleteTodo: Function;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 'lg',
            backgroundColor: theme.palette.background.paper,

            '& .hidden': {
                display: 'none'
            },

            '& .editable-field': {
                position: 'absolute',
                background: '#fff',
                width: '100%',

                '& .MuiTextField-root': {
                    width: '85%'
                }
            }
        },
    }),
);

const TodoList = (props: ITodoList) => {
    const {todo, editTodo, deleteTodo} = props;
    const classes = useStyles();

    const [checked, setChecked] = useState([]);
    const [editValue, setEditValue] = useState('');
    const [editStatus, setEditStatus] = useState(todo.map((item, i) => i = false));


    const handleToggle = (value: number) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    };

    const saveChanges = (newValue: string, todoIndex: number) => {
        editTodo(newValue, todoIndex);
        setEditStatus(changeEditStatus(todoIndex));

    }

    const changeEditValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditValue(e.target.value);
    };

    const changeEditStatus = (index: number) => {
        const state = [...editStatus];
        state[index] = !state[index];
        return state;
    };

    const editItem = (todoValue: string, todoIndex: number) => {
        setEditValue(todoValue);
        setEditStatus(changeEditStatus(todoIndex));

    }
    const deleteItem = (todoIndex: number) => {
        deleteTodo(todoIndex);
    }

    return (
        <List className={classes.root}>
            {todo.map((value, index) => {
                const labelId = `checkbox-${value}`;

                return (
                    <ListItem key={value} role={undefined} dense button onClick={handleToggle(index)}>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={checked.indexOf(index) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ 'aria-labelledby': labelId }}
                            />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={value} />
                        <div className="editable-field">
                            <div className={!editStatus[index] ? "hidden" : ""}>
                                <TextField
                                    id="standard-basic"
                                    label="Edit todo"
                                    value={editValue}
                                    autoFocus={true}
                                    onChange={changeEditValue}/>
                                <IconButton onClick={() => saveChanges(editValue, index)}>
                                    <CheckCircleRoundedIcon color="secondary"/>
                                </IconButton>
                            </div>
                        </div>
                        <ListItemSecondaryAction>
                            <IconButton
                                edge="end"
                                aria-label="edit"
                                onClick={() => editItem(value, index)}>
                                <EditIcon />
                            </IconButton>
                            <IconButton
                                edge="end"
                                aria-label="delete"
                                onClick={() => deleteItem(index)}>
                                <DeleteIcon/>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                );
            })}
        </List>
    );
}

export default TodoList;
