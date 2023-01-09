import { Grid } from '@mui/material';
import { React } from 'react';
import TodoListDisplay from './todoListDisplay';
import UserInputs from './userInputs';

const TodoPane = (context) =>
	<Grid className="todoPane" role="TodoPane">
		<UserInputs { ...context }/>
		<TodoListDisplay { ...context }/>
	</Grid>;

export default TodoPane;
