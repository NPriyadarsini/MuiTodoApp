import { Button } from '@mui/material';
import { React } from 'react';
import TodoManager from '../../../services/todoManager';

const EditButton = (context) =>
	<Button
		role="editButton"
		className="actionButton"
		variant="outlined"
		color="inherit"
		disabled={ TodoManager.hasInput(context) }
		onClick={ () => context.actions.editTodo() }
	>EDIT</Button>;

export default EditButton;
