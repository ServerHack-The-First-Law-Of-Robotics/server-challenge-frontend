export type PurchasingVolumeFilterOption = {
	label: string;
	value: string;
};

export const purchasingVolumeFilterOptions: PurchasingVolumeFilterOption[] = [
	{
		label: 'до 10.000р',
		value: '1',
	},
	{
		label: '10.000-100.000р',
		value: '2',
	},
	{
		label: '100.000-500.000р',
		value: '3',
	},
	{
		label: '500.000-1.000.000р',
		value: '4',
	},
	{
		label: 'более 1.000.000р',
		value: '5',
	},
];
