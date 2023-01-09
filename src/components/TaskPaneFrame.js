import { Paper } from '@mui/material';
import { React } from 'react';
import TaskPane from './taskPane';

const TaskPaneFrame = (context) =>
	<Paper
		elevation={ 5 }
		className="panel margin"
	><TaskPane { ...context }/>
	</Paper>;

export default TaskPaneFrame;
