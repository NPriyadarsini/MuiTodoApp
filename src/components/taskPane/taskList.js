import { Grid } from '@mui/material';
import { React } from 'react';
import Task from './task.js';

const TaskList = (context) => {
	const { state: { taskList }} = context;

	return (

		<Grid role="TaskList">
			{ taskList.map((task) => Task({ ...context, data: task })) }
		</Grid>
	);
};

export default TaskList;
