import React from 'react';

//hooks
import { useList } from 'react-use';

//components
import { Text, Checkbox } from '@geist-ui/core';

//types
import type { CheckboxEvent } from '@geist-ui/core/esm/checkbox';

//constants
import { revenueOptions } from './options';

export const RevenueFilter: React.FC = () => {
	const [checkedList, { updateAt: setCheckedAt }] = useList(revenueOptions.map(() => false));
	const onChangeHandlers = React.useMemo(
		() => revenueOptions.map(
			(_, index) => (e: CheckboxEvent) => setCheckedAt(index, e.target.checked),
		),
		[revenueOptions],
	);

	return (
		<>
			<Text span small type='secondary'>
				Выручка компании
			</Text>

			<Checkbox.Group value={[]}>
				{revenueOptions.map((option, index) => (
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
