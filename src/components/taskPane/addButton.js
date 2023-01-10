import { AddCircle } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { React } from 'react';

const AddButton = (context) => {
	const { actions, data } = context;

	return (
		<IconButton
			className="iconButton"
			role="addButton"
			color="inherit"
			onClick={ () => actions.addTaskToTodo(data) }
		><AddCircle fontSize="small"/></IconButton>
	);
};

export default AddButton;
