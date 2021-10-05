import { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, Pagination } from './components';

export const App = () => {
	const [users, setUsers] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [usersPerPage, setUsersPerPage] = useState(20);

	useEffect(() => {
		const getUsers = async () => {
			const res = await axios.get(
				'https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json'
			);
			setUsers(res.data);
		};

		getUsers();
	}, []);

	const lastUser = currentPage * usersPerPage;
	const firstUser = lastUser - usersPerPage;
	const currentUsers = users.slice(firstUser, lastUser);

	const paginate = (page: number) => setCurrentPage(page);

	return (
		<>
			<div>itrex users</div>;
			<Table data={currentUsers} />
			<Pagination
				usersLength={users.length}
				usersPerPage={usersPerPage}
				paginationOnClick={paginate}
			/>
		</>
	);
};
