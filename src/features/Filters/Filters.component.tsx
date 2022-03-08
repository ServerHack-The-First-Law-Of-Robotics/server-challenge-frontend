import React from 'react';

//components
import { Divider, Spacer } from '@geist-ui/core';
import {
	PurchasingVolumeFilter,
	RegionFilter,
	RevenueFilter,
	CompanyAgeFilter,
} from '../../entities';

export const Filters: React.FC = () => {
	return (
		<>
			<Divider align='start'>
				Фильтры

			</Divider>

			<Spacer h={0.5} />

			<PurchasingVolumeFilter />

			<Spacer h={0.5} />

			<RegionFilter />

			<Spacer h={0.5} />

			<RevenueFilter />

			<Spacer h={0.5} />

			<CompanyAgeFilter />
		</>
	);
};
