import styles from './pagination.module.css';
import bindStyles from 'classnames/bind';

type PaginationProps = {
	usersLength: number;
	usersPerPage: number;
	currentPage: number;
	paginationOnClick: (page: number) => void;
	btnClick: (action: string, num: number, maxNum: number) => void;
};

const styleNames = bindStyles.bind(styles);

export const Pagination: React.FC<PaginationProps> = ({
	usersLength,
	usersPerPage,
	currentPage,
	paginationOnClick,
	btnClick,
}) => {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(usersLength / usersPerPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div className={styleNames('root')}>
			<ul className={styleNames('ul')}>
				<li
					className={styleNames('li', 'btn')}
					onClick={() => btnClick('decr', currentPage, pageNumbers.length)}>
					previous
				</li>
				{pageNumbers.map((n, i) => (
					<li
						key={n + i}
						onClick={() => paginationOnClick(n)}
						className={styleNames('li', n === currentPage ? 'active' : '')}>
						{n}
					</li>
				))}
				<li
					className={styleNames('li', 'btn')}
					onClick={() => btnClick('incr', currentPage, pageNumbers.length)}>
					next
				</li>
			</ul>
		</div>
	);
};
