import { Paper, Box } from '@mui/material';
import { React } from 'react';
import TodoPane from './todoPane';

const TodoPaneFrame = (context) =>
	<Paper
		elevation={ 5 }
		className="panel"
	>
		<Box>TodoPane</Box>
		<TodoPane { ...context }/>
	</Paper>;

export default TodoPaneFrame;
