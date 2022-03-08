import React from 'react';

//components
import { Select, Text } from '@geist-ui/core';

//constants
import { regionOptions } from './options';

export const RegionFilter: React.FC = () => {
	return (
		<>
			<Text span small type='secondary'>
				Регионы для поиска
			</Text>

			<br />

			<Select width='100%' multiple placeholder='Искать по всем регионам'>
				{regionOptions.map((option) => (
					<Select.Option
						value={option.value}
						key={option.value}
					>
						{option.label}
					</Select.Option>
				))}
			</Select>
		</>
	);
};
