import React from 'react';
import { useSelector } from 'react-redux';
import s from './Header.module.css';

import Wrapper from '../common/Wrapper/Wrapper';
import StyledLink from '../common/StyledLink/StyledLink';
import Logotype from '../common/Logotype/Logotype';
import SearchPanel from '../common/SearchPanel/SearchPanel';
import UserPanel from '../common/UserPanel/UserPanel';

const Header = (props) => {
	const selectedServices = useSelector(state => state.products.selectedServices);
	const basketItems = Object.keys(selectedServices).length;

	return (
		<header className={s.block}>
			<Wrapper>
				<div className={s.inner}>
					<ul className={s.links}>
						<li><StyledLink to='/'>Главная</StyledLink></li>
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
							<UserPanel />
						</div>
					</div>
				</div>
			</Wrapper>
		</header>
	);
}


export default Header;