import { Checkbox } from '@mui/material';
import { React } from 'react';
import TodoManager from '../../../services/todoManager';

const ToggleAllCheckBox = (context) => {
	const { actions } = context;
	const selectAll = TodoManager.isAllChecked(context);
	const noTodos = TodoManager.hasNoTodos(context);

	return (
		<Checkbox
			role="toggleAllCheckBox"
			disabled={ noTodos }
			type="checkbox"
			checked={ selectAll }
			sx={ { color: 'inherit' } }
			onChange={ () => actions.toggleTodoList(!selectAll) }
		/>
	);
};

export default ToggleAllCheckBox;
