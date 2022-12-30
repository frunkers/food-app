import { Component } from 'react';
import "./Categories.css";
import burger from "./img/burger.svg";
import drink from "./img/drink.svg";

const categories = [
	{name: "Burger", color: "#FB8C00", image: burger},
	{name: "Drink", color: "#1E88E5", image: drink}
];

export default class Category extends Component {
	constructor() {
		super();
		this.state = {
			isActive: 0
		}
	}

	handleActive = (index) => {
		this.setState({
			isActive: index
		})
	}

	render() {
		return (
			<ul className="category__list">
				{
					categories.map((el, index) => {
						const { name, color, image } = el;
						const { isActive } = this.state;

						return (
							<li onClick={() => this.handleActive(index)}
								className={"category__item" + (isActive === index ? " category__item_active": " category__item_hover")}
								style={{borderColor: `${color + 66}`}}
								tabIndex="0"
								key={name}>
								<div className="category__content" style={{background: `${color}` + 33}}>
									<img src={image} alt="burger" className="category__icon" />
									<p className="category__name">{name}</p>
								</div>
							</li>
						)
					})
				}
			</ul>
		)
	}
}