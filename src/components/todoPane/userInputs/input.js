import { TextareaAutosize } from '@mui/material';
import { React } from 'react';

const getEnterKeyAction = (context) =>
	(context.state.editing ? 'editTodo' : 'addTodo');

const actionKeys = {
	Enter: (context) => context.actions[getEnterKeyAction(context)](context),
	Escape: (context) => context.actions.setInput(''),
};
const Input = (context) => {
	const { state } = context;

	return (

		<TextareaAutosize
			placeholder="Enter The Task"
			minRows={ 2 }
			variant="standard"
			role="input"
			type="text"
			value={ state.input }
			onChange={ (evt) =>
				context.actions.setInput(evt.target.value) }
			onKeyUp={ (evt) => {
				actionKeys[evt.code] && actionKeys[evt.code](context);
			} }
		/>
	);
};

export default Input;
