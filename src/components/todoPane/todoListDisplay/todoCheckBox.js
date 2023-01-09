import { Checkbox } from '@mui/material';
import { React } from 'react';

const CheckBox = (context) => {
	const { data } = context;
	const { completed } = data;

	return (
		<Checkbox
			role="toggleTodo"
			type="checkbox"
			size="small"
			checked={ completed }
			sx={ { color: 'inherit', top: '-10px' } }
			onChange={ () => context.actions.toggleTodo(data) }
		/>);
};

export default CheckBox;
