import { Button } from '@mui/material';
import { React } from 'react';
import TodoManager from '../../../services/todoManager';

const clearCompleted = (context) => {
	const hasCompletedTodo = TodoManager.hasCompletedTodo(context);

	return (
		<Button
			role="clearCompleted"
			variant="outlined"
			color="inherit"
			size="small"
			disabled={ !hasCompletedTodo }
			onClick={ () =>	context.actions.getClearCompleted() }
		>Clear Completed
		</Button>
	);
};

export default clearCompleted;
