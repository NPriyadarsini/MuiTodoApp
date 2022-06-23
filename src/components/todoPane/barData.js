import TodoManager from '../../../src/services/todoManager';

const BarData = (context) => (TodoManager.hasNoTodos(context) === true
	? []
	: TodoManager.getBarData(context));

export default BarData;
