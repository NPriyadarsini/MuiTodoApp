import { ButtonGroup } from '@mui/material';
import { React } from 'react';
import FilterButton from './filterButton.js';

const FilterBar = (context) => {
	const { config } = context;

	return	(
		<ButtonGroup
			role="filterBar"
			className="filter"
			size="small"
		>
			{
				config.filters.map((filter, id) =>
					<FilterButton
						key={ id }
						{ ...{ ...context, data: filter } }
					/>)
			}
		</ButtonGroup>
	);
};

export default FilterBar;
