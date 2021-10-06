import { User } from '../../types';
import styles from './profile.module.css';
import bindStyles from 'classnames/bind';

type ProfileProps = {
	user: User;
};

const styleNames = bindStyles.bind(styles);

export const Profile: React.FC<ProfileProps> = ({ user }) => {
	return (
		<div className={styleNames('root')}>
			<h1 className={styleNames('title')}>Profile info:</h1>
			<dl className={styleNames('descList')}>
				<div className={styleNames('descItem')}>
					<dt className={styleNames('dt')}>Selected profile:</dt>
					<dd className={styleNames('dd')}>
						{user?.firstName} {user?.lastName}
					</dd>
				</div>

				<div className={styleNames('descItem')}>
					<dt className={styleNames('dt')}>Description:</dt>
					<dd className={styleNames('dd')}>{user?.description}</dd>
				</div>

				<div className={styleNames('descItem')}>
					<dt className={styleNames('dt')}>Address:</dt>
					<dd className={styleNames('dd')}>{user?.adress.streetAddress}</dd>
				</div>

				<div className={styleNames('descItem')}>
					<dt className={styleNames('dt')}>City:</dt>
					<dd className={styleNames('dd')}>{user?.adress.city}</dd>
				</div>

				<div className={styleNames('descItem')}>
					<dt className={styleNames('dt')}>State:</dt>
					<dd className={styleNames('dd')}>{user?.adress.state}</dd>
				</div>

				<div className={styleNames('descItem')}>
					<dt className={styleNames('dt')}>Index:</dt>
					<dd className={styleNames('dd')}>{user?.adress.zip}</dd>
				</div>
			</dl>
		</div>
	);
};
