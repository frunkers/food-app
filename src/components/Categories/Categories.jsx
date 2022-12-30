import { Component } from 'react';
import "./Categories.css";
import burger from "./img/burger.svg";
import drink from "./img/drink.svg";

class Category extends Component {
	constructor() {
		super();
		this.state = {
			setActiveIndex: 0
		}
	}

	handleActive = (index) => {
		this.setState({
			setActiveIndex: index
		})
	}

	render() {
		return (
			<ul className="category__list">
				<li onClick={() => this.handleActive(0)}
					className={"category__item " + (this.state.setActiveIndex === 0 ? "category__item_active": "")}
					style={{borderColor: "#FB8C0066"}}
					tabIndex="0">
					<div className="category__content" style={{background: "#FB8C0033"}}>
						<img src={burger} alt="burger" className="category__icon" />
						<p className="category__name">Burger</p>
					</div>
				</li>
				
				<li onClick={() => this.handleActive(1)}
					className={"category__item " + (this.state.setActiveIndex === 1 ? "category__item_active": "")}
					style={{borderColor: "#1E88E566"}}
					tabIndex="0">
					<div className="category__content" style={{background: "#1E88E533"}}>
						<img src={drink} alt="drink" className="category__icon" />
						<p className="category__name">Drink</p>
					</div>
				</li>
			</ul>
		)
	}
}

export default Category;