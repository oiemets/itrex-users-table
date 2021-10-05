type PaginationProps = {
	usersLength: number;
	usersPerPage: number;
	paginationOnClick: (page: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
	usersLength,
	usersPerPage,
	paginationOnClick,
}) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(usersLength / usersPerPage); i++) {
		pageNumbers.push(i);
	}
	return (
		<nav>
			<ul>
				{pageNumbers.map((n, i) => (
					<li key={n + i} onClick={() => paginationOnClick(n)}>
						{n}
					</li>
				))}
			</ul>
		</nav>
	);
};
