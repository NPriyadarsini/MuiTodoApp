import { RemoveCircle } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { React } from 'react';

const RemoveButton = (context) => {
	const { actions, data } = context;

	return (
		<IconButton
			className="iconButton"
			role="removeButton"
			color="inherit"
			onClick={ () => actions.removeTask(data) }
		><RemoveCircle fontSize="small"/></IconButton>
	);
};

export default RemoveButton;
