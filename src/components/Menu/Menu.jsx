import { Component } from 'react';
import "./Menu.css";
import home from "../../assets/img/icons/home.svg";
import homeActive from "../../assets/img/icons/homeActive.svg";
import like from "../../assets/img/icons/like.svg";
import likeActive from "../../assets/img/icons/likeActive.svg";
import notification from "../../assets/img/icons/notification.svg";
import notificationActive from "../../assets/img/icons/notificationActive.svg";
import buy from "../../assets/img/icons/buy.svg";
import buyActive from "../../assets/img/icons/buyActive.svg";

const menuIcons = [
	{default: home, active: homeActive, alt: "home"},
	{default: like, active: likeActive, alt: "like"},
	{default: notification, active: notificationActive, alt: "notification"},
	{default: buy, active: buyActive, alt: "buy"},
];

export default class Menu extends Component {
	constructor() {
		super();
		this.state = {
			isActive: 0
		}	
	}
	
	handleActive = (index) => {
		this.setState({
			isActive: index
		});
	}

	render() {
		const { isActive } = this.state;

		return (
			<section className="menu">
				<div className="menu__container">
					<nav className="menu-wrap">
						<ul className="menu__list">
							{
								menuIcons.map((el, index) => {
									return (
										<li onClick={() => this.handleActive(index)} className="menu__item" tabIndex="0" key={el.alt}>
											<img src={isActive === index ? el.active : el.default} alt={el.alt} className="menu__icon" />
										</li>
									)
								})
							}
						</ul>
					</nav>
				</div>
			</section>
		)
	}
}