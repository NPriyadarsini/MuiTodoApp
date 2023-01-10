import { React } from 'react';
import TodoList from './todoList.js';
import ToggleAllCheckBox from './toggleAllCheckBox.js';
import ClearCompleted from './clearCompleted';
import { Box, Grid } from '@mui/material';

const TodoListDisplay = (context) =>
	<Box className="todoList" role="TodoListDisplay">
		<Grid>
			<ToggleAllCheckBox { ...context }/>
			Todo List
		</Grid>
		<Grid>
			<TodoList { ...context }/>
		</Grid>
		<Grid>
			<ClearCompleted { ...context }/>
		</Grid>
	</Box>;

export default TodoListDisplay;
