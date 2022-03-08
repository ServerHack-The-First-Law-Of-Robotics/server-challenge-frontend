import React from 'react';

//hooks
import { useList } from 'react-use';

//components
import { Checkbox, Text } from '@geist-ui/core';

//types
import type { CheckboxEvent } from '@geist-ui/core/esm/checkbox';

//constants
import { companyAgeOptions } from './options';

export const CompanyAgeFilter: React.FC = () => {
	const [checkedList, { updateAt: setCheckedAt }] = useList(companyAgeOptions.map(() => false));
	const onChangeHandlers = React.useMemo(
		() => companyAgeOptions.map(
			(_, index) => (e: CheckboxEvent) => setCheckedAt(index, e.target.checked),
		),
		[companyAgeOptions],
	);

	return (
		<>
			<Text span small type='secondary'>
				Возраст компании
			</Text>

			<Checkbox.Group value={[]}>
				{companyAgeOptions.map((option, index) => (
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
