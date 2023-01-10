import Todo from './todo';
import TodoManager from '../../../services/todoManager';
import { React } from 'react';

const TodoList = (context) => {
	const { state } = context;
	const { filter } = state;
	const noTodos = TodoManager.hasNoTodos(context);

	const filteredTodo
	= TodoManager.filterTodos(context, filter);

	return noTodos
		? []
		: filteredTodo.map((todo, id) =>
			<Todo key={ id }{ ...{ ...context, data: todo } }/>);
};

export default TodoList;
