import { Grid } from '@mui/material';
import { React } from 'react';
import RemoveButton from './removeButton';
import TodoCheckBox from './todoCheckBox';

const Todo = (context) => {
	const { actions, data } = context;
	const { id, todo } = data;

	return (
		<Grid key={ id } container={ true } className="todo" role="todo">
			<Grid item={ true } xs={ 0.8 }><TodoCheckBox { ...context }/>
			</Grid>
			<Grid
				item={ true }
				xs={ 4 }
				sx={ { textAlign: 'left' } }
				role="setEditing"
				onClick={ () => actions.setEditing(data) }
			>{todo}
			</Grid>
			<Grid item={ true } xs={ 1.5 }><RemoveButton { ...context }/>
			</Grid>
		</Grid>
	);
};

export default Todo;
