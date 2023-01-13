import { TextField } from '@mui/material';
import { React } from 'react';

const getEnterKeyAction = (context) =>
	(context.state.editing ? 'editTodo' : 'addTodo');

const actionKeys = {
	Enter: (context) => context.actions[getEnterKeyAction(context)](context),
	Escape: (context) => context.actions.setInput(''),
};
const inputStyle = {
	'& label.Mui-focused': {
		color: 'white',
	},
	'& .MuiInput-underline:after': {
		borderBottomColor: 'white',
	},
	'& .MuiOutlinedInput-root': {
		'& fieldset': {
			borderColor: 'white',
		},
		'&:hover fieldset': {
			borderColor: 'white',
		},
		'&.Mui-focused fieldset': {
			borderColor: 'white',
		},
	},
};

const Input = (context) => {
	const { state } = context;

	return (
		<TextField
			placeholder="Enter The Task"
			variant="outlined"
			sx={ inputStyle }
			shrink={ true }
			size="small"
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
