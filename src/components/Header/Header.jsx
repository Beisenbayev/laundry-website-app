import React from 'react';
import { useSelector } from 'react-redux';
import {
	getSelectedServicesSelector
} from '../../redux/selectors/products-selector.js';
import {
	getUserDataSelector
} from '../../redux/selectors/user-selector.js';
import s from './Header.module.css';

import Wrapper from '../common/Wrapper/Wrapper';
import StyledLink from '../common/StyledLink/StyledLink';
import Logotype from '../common/Logotype/Logotype';
import SearchPanel from '../common/SearchPanel/SearchPanel';
import UserPanel from '../common/UserPanel/UserPanel';

const Header = (props) => {
	const selectedServices = useSelector(state => getSelectedServicesSelector(state));
	const profile = useSelector(state => getUserDataSelector(state));
   const username = profile ? profile.username : 'Войти';
	const basketItems = Object.keys(selectedServices).length;

	return (
		<header className={s.block}>
			<Wrapper>
				<div className={s.inner}>
					<ul className={s.links}>
						<li><StyledLink exact to='/'>Главная</StyledLink></li>
						<li><StyledLink to='/basket'>Корзина {basketItems ? `(${basketItems})`: ''}</StyledLink></li>
					</ul>

					<div className={s.logo}>
						<Logotype />
					</div>

					<div className={s.rightSide}>
						<div className={s.searchPanel}>
							<SearchPanel />
						</div>
						<div className={s.user}>
							<UserPanel username={username} />
						</div>
					</div>
				</div>
			</Wrapper>
		</header>
	);
}


export default Header;