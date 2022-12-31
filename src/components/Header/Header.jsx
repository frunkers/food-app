import { Component } from 'react';
import "./Header.css";

export default class Header extends Component {
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

					<div className="header__el header__el_search">
						<form className="header__form">
							<label htmlFor="search" className="header__label">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><circle cx="11.77" cy="11.77" r="8.99" stroke="#AAACAE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path stroke="#AAACAE" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.02 18.49 21.54 22"/></svg>
								<input className="header__search" placeholder='Search' id="search"></input>
							</label>
						</form>
					</div>
				</div>
			</header>
		)
	}
}