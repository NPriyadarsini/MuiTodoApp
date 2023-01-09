import { Button } from '@mui/material';
import { React } from 'react';
import TodoManager from '../../../services/todoManager';

const FilterButton = (context) => {
	const { data } = context;
	const { label, name } = data;

	return (
		<Button
			key={ name }
			role="filterButton"
			variant="outlined"
			color="inherit"
			disabled={ TodoManager.hasNoTodos(context) }
			onClick={ () => context.actions.setFilter(name) }
		>
			{label}
		</Button>
	);
};

export default FilterButton;
