import { createClassFromLiteSpec } from 'react-vega-lite';

export default createClassFromLiteSpec('BarChart', {
	description: 'A simple bar chart with embedded data.',
	width: 200,
	height: 200,
	mark: 'arc',
	encoding: {
		color: { field: 'todos',
			type: 'nominal' },
		theta: { field: 'number',
			type: 'quantitative',
			title: 'Number of Todos' },
	},
});
