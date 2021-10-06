import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { Table, Pagination, Profile, Search, Select } from './components';
import styles from './app.module.css';
import bindStyles from 'classnames/bind';
import { User } from './types';

const styleNames = bindStyles.bind(styles);

export const App = () => {
	const [users, setUsers] = useState([]);
	const [currentUserIndex, setCurrentUserIndex] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [usersPerPage] = useState(20);
	const [input, setInput] = useState('');

	const [filterByState, setFilterByState] = useState('');

	const [sortBy, setSortBy] = useState(null);
	const [sortingOrder, setSortingOrder] = useState('asc');

	useEffect(() => {
		const getUsers = async () => {
			const res = await axios.get(
				'https://itrex-react-lab-files.s3.eu-central-1.amazonaws.com/react-test-api.json'
			);
			setUsers(res.data);
		};

		getUsers();
	}, []);

	const usersToSort = useMemo(() => {
		let sortedUsers = users.map((u: User) => ({ ...u, state: u.adress.state }));

		if (filterByState !== '') {
			sortedUsers = sortedUsers.filter(u => u.state === filterByState);
		}
		if (sortBy !== null) {
			sortedUsers.sort((a, b) => {
				if (a[sortBy] < b[sortBy]) {
					return sortingOrder === 'asc' ? -1 : 1;
				}
				if (a[sortBy] > b[sortBy]) {
					return sortingOrder === 'asc' ? 1 : -1;
				}
				return 0;
			});
		}

		return sortedUsers;
	}, [users, sortBy, sortingOrder, filterByState]);

	// pagination:
	const lastUser = currentPage * usersPerPage;
	const firstUser = lastUser - usersPerPage;
	const currentUsers = usersToSort.slice(firstUser, lastUser);

	const paginate = (page: number) => setCurrentPage(page);

	const headerClick = (name: any) => {
		setSortBy(name);
		setSortingOrder(sortingOrder === 'asc' ? 'desc' : 'asc');
	};

	const rowClick = (index: number) => setCurrentUserIndex(index);
	const btnClick = (action: string, num: number, maxNum: number) => {
		if (action === 'incr' && num < maxNum) {
			setCurrentPage(num + 1);
		}
		if (action === 'decr' && num > 1) {
			setCurrentPage(num - 1);
		}
	};

	const filteredUsers = currentUsers.filter(
		u =>
			u.lastName.toLowerCase().includes(input.toLowerCase()) ||
			u.firstName.toLowerCase().includes(input.toLowerCase())
	);

	const selectStateOptions = Array.from(
		new Set(users.map((u: User) => u.adress.state))
	).sort();

	const onSelect = (value: string) => setFilterByState(value);

	return (
		<div className={styleNames('root')}>
			<h1 className={styleNames('headerTitle')}>itrex users test app</h1>

			<div className={styleNames('header')}>
				<Search onchange={setInput} input={input} />
				<Select options={selectStateOptions} onChange={onSelect} />
			</div>

			<Table
				data={filteredUsers}
				order={sortingOrder}
				input={input}
				currentUserIndex={currentUserIndex}
				headerClick={headerClick}
				rowClick={rowClick}
			/>
			<Pagination
				usersLength={users.length}
				usersPerPage={usersPerPage}
				currentPage={currentPage}
				paginationOnClick={paginate}
				btnClick={btnClick}
			/>

			<Profile user={filteredUsers[currentUserIndex]} />
		</div>
	);
};
