import React from 'react';

//components
import {
	AutoComplete,
	Page,
	Spacer,
} from '@geist-ui/core';
import {
	CompaniesList,
	Filters,
	SortSelect,
} from 'features';

export type SearchOption = {
	label: string;
	value: string;
};

const mockOptions: SearchOption[] = [
	{
		label: 'Гайка ГОСТ-АБОБУС-123',
		value: 'gaika123',
	},
	{
		label: 'Гайка ГОСТ-АБОБУС-124',
		value: 'gaika124',
	},
	{
		label: 'Гайка ГОСТ-АБОБУС-125',
		value: 'gaika125',
	},
	{
		label: 'Гайка ГОСТ-АБОБУС-126',
		value: 'gaika126',
	},
	{
		label: 'Гайка ГОСТ-АБОБУС-127',
		value: 'gaika127',
	},
	{
		label: 'Гайка ГОСТ-АБОБУС-128',
		value: 'gaika128',
	},
];

import { companies } from './companies';

export const SearchPage: React.FC = () => {
	//model
	const [options, setOptions] = React.useState<SearchOption[]>(mockOptions);

	const searchHandler = React.useCallback((query: string) => {
		if (query === '')
			setOptions(mockOptions);
		setOptions(mockOptions.filter((searchOption) => searchOption.label.toLocaleLowerCase().includes(query)));
	}, []);

	return (
		<Page>
			<Page.Body>
				<AutoComplete
					onSearch={searchHandler}
					options={options}
					width='100%'
					placeholder='Что будем закупать?' />

				<Spacer h={1} />

				<Filters />

				<Spacer h={1} />

				<SortSelect />

				<Spacer h={1} />

				<CompaniesList companies={companies} />
			</Page.Body>
		</Page>
	);
};
