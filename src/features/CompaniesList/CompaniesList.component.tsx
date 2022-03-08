import React from 'react';

//components
import { Card, Text } from '@geist-ui/core';

//types
export type CompanyData = {
	name: string;
	inn: number;
	contacts: {
		email?: string;
		phoneNumber?: string;
	};
};

export type CompaniesProps = {
	companies: CompanyData[];
};

//styles
import S from './CompaniesList.module.css';

export const CompaniesList: React.FC<CompaniesProps> = ({
	companies,
}) => {
	return (
		<div>
			{companies.map(({
				name, inn, contacts: { email, phoneNumber },
			}) => (
				<Card hoverable key={inn} className={S.card}>
					<Text h4>
						{name}
					</Text>
					<Text>
						Контакты:
						<br />
						{phoneNumber && `Телефон ${phoneNumber}`}
						{email && `Email ${email}`}
					</Text>
				</Card>
			))}
		</div>
	);
};
