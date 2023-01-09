import { React, useEffect } from 'react';
import './App.scss';
import TaskManager from './services/taskManager.js';
import Ticker from './services/ticker';
import { Box } from '@mui/material';
import TodoPaneFrame from './components/TodoPaneFrame';
import TaskPaneFrame from './components/TaskPaneFrame';

// eslint-disable-next-line max-lines-per-function
const App = (context) => {
	useEffect(() => TaskManager.init(context), []);
	useEffect(() => Ticker.start(context), []);

	return <Box className="App" role="App">
		<TodoPaneFrame { ...context }/>
		<TaskPaneFrame { ...context }/>
	</Box>;
};

export default App;
