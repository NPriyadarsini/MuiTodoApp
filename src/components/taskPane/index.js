import { Grid, Box } from '@mui/material';
import { React } from 'react';
import TaskList from './taskList';

const TaskPane = (context) =>
	<Grid className="taskPane" role="TaskPane">
		<Box>Tasks</Box>
		<Box className="taskList">
			<TaskList { ...context }/>
		</Box>
	</Grid>;

export default TaskPane;
