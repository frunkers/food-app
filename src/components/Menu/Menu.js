import { Component } from 'react';
import './Menu.css';
import home from './img/home.svg';
import homeActive from './img/homeActive.svg';
import like from './img/like.svg';
import likeActive from './img/likeActive.svg';
import notification from './img/notification.svg';
import notificationActive from './img/notificationActive.svg';
import buy from './img/buy.svg';
import buyActive from './img/buyActive.svg';


class Menu extends Component {
	constructor() {
		super();
		this.state = {
			setActiveIndex: 0
		}	
	}
	
	active = (index) => {
		this.setState({
			setActiveIndex: index
		});
	}

	render() {
		return (
			<section className="menu">
				<div className="menu__container">
					<nav className="menu-wrap">
						<ul className="menu__list">
							<li onClick={() => this.active(0)} className="menu__item" tabIndex="0">
								<img src={this.state.setActiveIndex == 0 ? homeActive : home} alt="home" className="menu__icon" />
							</li>

							<li onClick={() => this.active(1)} className="menu__item" tabIndex="0">
								<img src={this.state.setActiveIndex == 1 ? likeActive : like} alt="like" className="menu__icon" />
							</li>

							<li className="menu__item" tabIndex="0">
								<div className="menu__search">
									<div className="menu__search-shadow">
										<svg className="menu__icon menu__icon_search" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 60 60"><circle cx="30" cy="30" r="30" fill="url(#a)"/><circle cx="29.77" cy="29.77" r="8.99" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"/><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M36.02 36.49 39.54 40"/><defs><linearGradient id="a" x1="25.16" x2="65.24" y1="-18" y2="-4.41" gradientUnits="userSpaceOnUse"><stop stopColor="#F9881F"/><stop offset="1" stopColor="#FF774C"/></linearGradient></defs></svg>
									</div>
								</div>
							</li>

							<li onClick={() => this.active(3)} className="menu__item" tabIndex="0">
								<img src={this.state.setActiveIndex == 3 ? notificationActive : notification} alt="notification" className="menu__icon" />
							</li>

							<li onClick={() => this.active(4)} className="menu__item" tabIndex="0">
								<img src={this.state.setActiveIndex == 4 ? buyActive : buy} alt="buy" className="menu__icon" />
							</li>
						</ul>
					</nav>
				</div>
			</section>
		)
	}
}

export default Menu;