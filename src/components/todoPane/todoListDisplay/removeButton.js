import { Delete } from '@mui/icons-material';
import { Button } from '@mui/material';
import { React } from 'react';

const RemoveButton = (context) => {
	const { actions, data } = context;

	return (
		<Button
			className="iconButton"
			role="removeButton"
			color="inherit"
			onClick={ () => actions.removeTodo(data) }
		>
			<Delete fontSize="small"/>
		</Button>
	);
};

export default RemoveButton;
