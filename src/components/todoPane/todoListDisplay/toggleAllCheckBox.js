import { Checkbox, Grid } from '@mui/material';
import { React } from 'react';
import TodoManager from '../../../services/todoManager';

// eslint-disable-next-line max-lines-per-function
const ToggleAllCheckBox = (context) => {
	const { actions } = context;
	const selectAll = TodoManager.isAllChecked(context);
	const noTodos = TodoManager.hasNoTodos(context);
	const color = noTodos ? 'default' : 'inherit';

	return (
		<Grid className="toggleAll" container={ true }>
			<Checkbox
				role="toggleAllCheckBox"
				disabled={ noTodos }
				type="checkbox"
				checked={ selectAll }
				sx={ { 'color': { color },
					'&.Mui-checked': {
						color: { color },
					},
					'top': '-12px' } }
				onChange={ () => actions.toggleTodoList(!selectAll) }
			/>
			<Grid item={ true } xs={ 5.3 }>	Todo List</Grid>
		</Grid>
	);
};

export default ToggleAllCheckBox;
