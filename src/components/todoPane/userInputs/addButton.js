import { Button } from '@mui/material';
import { React } from 'react';

const AddButton = (context) =>
	<Button
		role="addButton"
		className="actionButton"
		variant="outlined"
		color="inherit"
		size="large"
		onClick={ () => context.actions.addTodo() }
	>ADD</Button>;

export default AddButton;
