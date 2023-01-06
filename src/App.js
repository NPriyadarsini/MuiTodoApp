import { React, useEffect } from 'react';
import './App.scss';
import TaskPane from './components/taskPane';
import TodoPane from './components/todoPane';
import TaskManager from './services/taskManager.js';
import Ticker from './services/ticker';
import { Box, Paper } from '@mui/material';

// eslint-disable-next-line max-lines-per-function
const App = (context) => {
	useEffect(() => TaskManager.init(context), []);
	useEffect(() => Ticker.start(context), []);

	return <Box className="App" role="App">
		<Paper
			elevation={ 5 }
			className="panel"
		>TodoPane{TodoPane(context)}
		</Paper>
		<Paper
			elevation={ 5 }
			className="panel margin"
		>TaskPane{TaskPane(context)}
		</Paper>
	</Box>;
};

export default App;
