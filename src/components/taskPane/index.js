import { Grid, Box } from '@mui/material';
import { React } from 'react';
import TaskList from './taskList';

const TaskPane = (context) =>
	<Grid className="taskPane" role="TaskPane">
		<Box span={ true }>Tasks</Box>
		<Box div={ true } className="taskList">{TaskList(context)}</Box>
	</Grid>;

export default TaskPane;
