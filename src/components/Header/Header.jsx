import { Component } from 'react';
import "./Header.css";
import avatar from "./img/avatar.jpg";

class Header extends Component {
	render() {
		return (
			<header className="header">
				<div className="header__container">
					<div tabIndex="0" className="header__menu header__el">
						<div className="header__content">
							<div className="header__item"></div>
							<div className="header__item header__item_2"></div>
							<div className="header__item header__item_3"></div>
						</div>
					</div>

					

					<div tabIndex="0" className="avatar header__el">
						<img src={avatar} alt="avatar" className="avatar__icon" />
					</div>
				</div>
			</header>
		)
	}
}

export default Header;