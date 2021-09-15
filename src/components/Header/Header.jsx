import React from 'react';
import s from './Header.module.css';

import Wrapper from '../common/Wrapper/Wrapper';
import StyledLink from '../common/StyledLink/StyledLink';
import Logotype from '../common/Logotype/Logotype';
import Search from '../common/Search/Search';
import User from '../common/User/User';

const Header = (props) => {
	return (
		<header className={s.block}>
			<Wrapper>
				<div className={s.inner}>
					<ul className={s.links}>
						<li><StyledLink to='/'>Главная</StyledLink></li>
						<li><StyledLink to='/basket'>Корзина</StyledLink></li>
					</ul>

					<div className={s.logo}>
						<Logotype />
					</div>

					<div className={s.rightSide}>
						<div className={s.searchPanel}>
							<Search />
						</div>
						<div className={s.user}>
							<User />
						</div>
					</div>
				</div>
			</Wrapper>
		</header>
	);
}


export default Header;