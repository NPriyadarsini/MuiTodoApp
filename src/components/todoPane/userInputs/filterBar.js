import { ButtonGroup } from '@mui/material';
import { React } from 'react';
import FilterButton from './filterButton.js';

const FilterBar = (context) => {
	const { config } = context;

	return	(
		<ButtonGroup
			role="filterBar"
			className="filter"
		>
			{config.filters.map((filter) =>
				FilterButton({ ...context, data: filter }))}
		</ButtonGroup>
	);
};

export default FilterBar;
