import { React } from 'react';
import AddButton from './addButton';
import EditButton from './editButton';

const actionButton = (context) => (context.state.editing
	? <EditButton { ...context }/>
	: <AddButton { ...context }/>);

export default actionButton;
