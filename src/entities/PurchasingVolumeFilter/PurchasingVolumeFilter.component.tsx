import React from 'react';

//hooks
import { useList } from 'react-use';

//components
import { Checkbox, Text } from '@geist-ui/core';

//types
import type { CheckboxEvent } from '@geist-ui/core/esm/checkbox';

//constants
import { purchasingVolumeFilterOptions } from './options';

export const PurchasingVolumeFilter: React.FC = () => {
	const [checkedList, { updateAt: setCheckedAt }] = useList(purchasingVolumeFilterOptions.map(() => false));
	const onChangeHandlers = React.useMemo(
		() => purchasingVolumeFilterOptions.map(
			(_, index) => (e: CheckboxEvent) => setCheckedAt(index, e.target.checked),
		),
		[purchasingVolumeFilterOptions],
	);

	return (
		<>
			<Text span small type='secondary'>
				Примерный объем закупки
			</Text>

			<Checkbox.Group value={[]}>
				{purchasingVolumeFilterOptions.map((option, index) => (
					<Checkbox
						onChange={onChangeHandlers[index]}
						value={option.value}
						key={option.value}
					>
						{option.label}
					</Checkbox>
				))}
			</Checkbox.Group>
		</>
	);
};
