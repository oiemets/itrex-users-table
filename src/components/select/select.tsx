import styles from './select.module.css';
import bindStyles from 'classnames/bind';

const styleNames = bindStyles.bind(styles);

type SelectProps = {
	options: string[];
	onChange: (value: string) => void;
};

export const Select: React.FC<SelectProps> = ({ options, onChange }) => {
	return (
		<div className={styleNames('root')}>
			<select
				className={styleNames('select')}
				onChange={e => onChange(e.target.value)}>
				<option value='' className={styleNames('titleOption')}>
					Filter by state
				</option>
				{options.map(value => (
					<option key={value} value={value} className={styleNames('option')}>
						{value}
					</option>
				))}
			</select>
		</div>
	);
};
