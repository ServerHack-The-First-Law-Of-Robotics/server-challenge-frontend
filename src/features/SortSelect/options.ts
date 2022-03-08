export type SortOption = {
	label: string;
	value: string;
};

export const sortOptions: SortOption[] = [
	{
		label: 'Релевантность',
		value: 'relevance',
	},
	{
		label: 'Выручка',
		value: 'revenue',
	},
	{
		label: 'Надежность',
		value: 'reliability',
	},
	{
		label: 'Опыт в тендерах',
		value: 'experience',
	},
];

