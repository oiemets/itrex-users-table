import { User } from '../../types';
import styles from './table.module.css';
import bindStyles from 'classnames/bind';

type TableProps = {
	data: User[];
	order: string;
	currentUserIndex: number;
	headerClick: (name: string) => void;
	rowClick: (index: number) => void;
};

const styleNames = bindStyles.bind(styles);

const headers = [
	{
		label: 'id',
		field: 'id',
	},
	{
		label: 'first name',
		field: 'firstName',
	},
	{
		label: 'last name',
		field: 'lastName',
	},
	{
		label: 'email',
		field: 'email',
	},
	{
		label: 'phone',
		field: 'phone',
	},
	{
		label: 'state',
		field: 'state',
	},
];

export const Table: React.FC<TableProps> = ({
	data,
	headerClick,
	order,
	currentUserIndex,
	rowClick,
}) => {
	return (
		<table className={styleNames('table')}>
			<thead className={styleNames('thead')}>
				<tr>
					{headers.map(({ label, field }, i) => (
						<th
							key={i}
							onClick={() => headerClick(field)}
							className={styleNames('th')}>
							{label}
							<div
								className={styleNames(
									order === 'asc' ? 'arrow-down' : 'arrow-up',
									'arrow'
								)}></div>
						</th>
					))}
				</tr>
			</thead>
			<tbody className={styleNames('tbody')}>
				{data.map(({ id, firstName, lastName, email, phone, adress }, i) => (
					<tr
						key={id + '-' + i}
						className={styleNames(
							currentUserIndex === i ? 'active-row' : '',
							'tr'
						)}
						onClick={() => rowClick(i)}>
						<td className={styleNames('td')}>{id}</td>
						<td className={styleNames('td')}>{firstName}</td>
						<td className={styleNames('td')}>{lastName}</td>
						<td className={styleNames('td')}>{email}</td>
						<td className={styleNames('td')}>{phone}</td>
						<td className={styleNames('td')}>{adress.state}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
