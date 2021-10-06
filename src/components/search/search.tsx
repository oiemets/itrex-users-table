import styles from './search.module.css';
import bindStyles from 'classnames/bind';

const styleNames = bindStyles.bind(styles);

type SearchProps = {
	input: string;
	onchange: (query: string) => void;
};

export const Search: React.FC<SearchProps> = ({ input, onchange }) => {
	return (
		<input
			className={styleNames('input')}
			value={input}
			onChange={e => onchange(e.target.value)}
			placeholder='Search by name'
		/>
	);
};
