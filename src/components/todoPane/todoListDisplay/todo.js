import { Grid } from '@mui/material';
import { React } from 'react';
import RemoveButton from './removeButton';
import TodoCheckBox from './todoCheckBox';

const Todo = (context) => {
	const { actions, data } = context;
	const { id, todo } = data;

	return (
		<Grid key={ id } container={ true } className="todo" role="todo">
			<TodoCheckBox { ...context }/>
			<Grid
				xs={ 4 }
				sx={ { 'textAlign': 'left', 'margin-left': '3px' } }
				role="setEditing"
				onClick={ () => actions.setEditing(data) }
			>{todo}
			</Grid>
			<RemoveButton { ...context }/>
		</Grid>
	);
};

export default Todo;
