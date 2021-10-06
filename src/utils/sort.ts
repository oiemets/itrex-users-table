export const sortBy = (sortby: string, arr: []) => {
	return arr.sort((a, b) => {
		let nameA = a[sortby];
		let nameB = b[sortby];
		if (nameA < nameB) {
			return -1;
		}
		if (nameA > nameB) {
			return 1;
		}
		return 0;
	});
};
