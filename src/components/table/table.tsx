import { User } from '../../types';

type TableProps = {
	data: User[];
};

const headers = ['id', 'First Name', 'Last Name', 'Email', 'Phone', 'State'];

export const Table: React.FC<TableProps> = ({ data }) => {
	return (
		<table>
			<thead>
				<tr>
					{headers.map((h, i) => (
						<th key={i}>{h}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{data.map(({ id, firstName, lastName, email, phone, adress }, i) => (
					<tr key={id + '-' + i}>
						<td>{id}</td>
						<td>{firstName}</td>
						<td>{lastName}</td>
						<td>{email}</td>
						<td>{phone}</td>
						<td>{adress.state}</td>
					</tr>
				))}
			</tbody>
		</table>
	);
};
