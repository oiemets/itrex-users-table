import { useState, useMemo } from 'react';

// export const useSortedData = (users: [], sortBy = null, order = null) => {
// 	const [sortByField, setSortByField] = useState(sortBy);
// 	const [sortingOrder, setSortingOrder] = useState(order);

// 	const sortedUsers = useMemo(() => {
// 		let usersToSort = [...users];

// 		if (sortByField !== null) {
// 			usersToSort.sort((a, b) => {
// 				if (a[sortByField] < b[sortByField]) {
// 					return sortingOrder === 'asc' ? -1 : 1;
// 				}
// 				if (a[sortByField] > b[sortByField]) {
// 					return sortingOrder === 'asc' ? 1 : -1;
// 				}
// 				return 0;
// 			});
// 		}
// 		return usersToSort;
// 	}, [users, sortByField, sortingOrder]);

// 	return { users: sortedUsers };
// };

export const useSortedData = (
	users: any,
	config: { sortBy: string; order: string }
) => {
	const [sortConfig, setSortConfig] = useState(config);

	const sortedUsers = useMemo(() => {
		let usersToSort = [...users];

		if (sortConfig !== null) {
			usersToSort.sort((a, b) => {
				if (a[sortConfig.sortBy] < b[sortConfig.sortBy]) {
					return sortConfig.order === 'asc' ? -1 : 1;
				}
				if (a[sortConfig.sortBy] > b[sortConfig.sortBy]) {
					return sortConfig.order === 'asc' ? 1 : -1;
				}
				return 0;
			});
		}
		return usersToSort;
	}, [users, sortConfig]);

	const setConfig = (sortBy: string) => {
		let order = 'asc';
		if (
			sortConfig &&
			sortConfig.sortBy === sortBy &&
			sortConfig.order === 'asc'
		) {
			order = 'desc';
		}
		setSortConfig({ sortBy, order });
	};

	return { items: sortedUsers, setConfig };
};
