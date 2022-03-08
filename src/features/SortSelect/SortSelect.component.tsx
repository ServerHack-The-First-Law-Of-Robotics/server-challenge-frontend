import React from 'react';

//components
import { Select, Text } from '@geist-ui/core';

//constants
import { sortOptions } from './options';

export const SortSelect: React.FC = () => {
	return (
		<div>
			<Text small type='secondary'>
				Сортировка
			</Text>

			<br />

			<Select initialValue={sortOptions[0].value}>
				{sortOptions.map((option) => (
					<Select.Option value={option.value} key={option.value}>
						{option.label}
					</Select.Option>
				))}
			</Select>
		</div>
	);
};
