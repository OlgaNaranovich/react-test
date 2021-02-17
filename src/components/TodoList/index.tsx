import * as React from 'react';
import {useEffect, useState} from 'react';
import {ITodoInitialState} from '../../hooks/useTodoState';
import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    TextField,
    Checkbox,
    IconButton
} from '@material-ui/core';
import {Edit, Delete, CheckCircleRounded} from '@material-ui/icons';
import useStyles from './useStyles';

interface ITodoList {
    todo: ITodoInitialState[];
    editTodo: Function;
    deleteTodo: Function;
}

const initialChecked: number[] = [];

const TodoList = (props: ITodoList) => {
    const {todo, editTodo, deleteTodo} = props;
    const classes = useStyles();

    const [checked, setChecked] = useState(initialChecked);
    const [editValue, setEditValue] = useState('');
    const [editStatus, setEditStatus] = useState(todo.map(() => false));

    useEffect(() => {
        setEditStatus(todo.map(() => false));
    }, [todo]);

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
        setEditStatus(todo.map(() => false));

    }

    const changeEditValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditValue(e.target.value);
    };

    const changeEditStatus = (index: number) => {
        return [...editStatus].map((item, i) => i === index);
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
            {todo.map((item, index) => {
                const labelId = `checkbox-${item.value}`;
                return (
                    <Box key={item.value + index} className="item-wrapper">
                        <ListItem
                            className="list-item"
                            role={undefined}
                            dense
                            button
                            onClick={handleToggle(index)}>
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={checked.indexOf(index) !== -1}
                                    tabIndex={-1}
                                    disableRipple
                                    inputProps={{ 'aria-labelledby': labelId }}
                                />
                            </ListItemIcon>
                            <ListItemText id={labelId} primary={item.value} />
                            <ListItemSecondaryAction className="secondary-action">
                                <ListItemText className="item-date" primary={item.date} />
                                <IconButton
                                    edge="end"
                                    aria-label="edit"
                                    onClick={() => editItem(item.value, index)}>
                                    <Edit />
                                </IconButton>
                                <IconButton
                                    edge="end"
                                    aria-label="delete"
                                    onClick={() => deleteItem(index)}>
                                    <Delete/>
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                        <div className={`editable-field ${!editStatus[index] ? "hidden" : ""}`}>
                            <div className="editable-field_wrapper">
                                <TextField
                                    id="standard-basic"
                                    label="Edit todo"
                                    value={editValue}
                                    autoFocus={true}
                                    onChange={changeEditValue}/>
                                <IconButton className="save-button" onClick={() => saveChanges(editValue, index)}>
                                    <CheckCircleRounded color="secondary"/>
                                </IconButton>
                            </div>
                        </div>
                    </Box>
                );
            })}
        </List>
    );
}

export default TodoList;
