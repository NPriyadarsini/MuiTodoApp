import { React, useEffect } from 'react';
import './App.scss';
import TaskPane from './components/taskPane';
import TodoPane from './components/todoPane';
import TaskManager from './services/taskManager.js';
import Ticker from './services/ticker';
import BarChart from './components/todoPane/barChart';
import BarData from './components/todoPane/barData';

const App = (context) => {
	useEffect(() => TaskManager.init(context), []);
	useEffect(() => Ticker.start(context), []);

	const barData = {
		values: BarData(context),
	};

	return <div className="App" role="App">
		<div className="mainDiv">
			<div className="leftDiv"><b>TodoPane</b>{TodoPane(context)}
				<span><BarChart data={ barData }/></span>
			</div>
			<div className="rightDiv"><b>TaskPane</b>{TaskPane(context)}</div>
		</div>
	</div>;
};

export default App;
