import { React } from 'react';
import Input from './input.js';
import FilterBar from './filterBar.js';
import ActionButton from './actionButton';
import { Box, Grid } from '@mui/material';

const UserInputs = (context) =>
	<Box className="userInputs" role="userInputs">
		<Grid>
			<Input { ...context }/>
			<ActionButton { ...context }/>
		</Grid>
		<Grid>
			<FilterBar { ...context }/>
		</Grid>
	</Box>;

export default UserInputs;
