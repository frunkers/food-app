import { Component } from 'react';
import './Categories.css';
import pizza from './img/pizza.png';
import burger from './img/burger.png';
import sausage from './img/sausage.png';

class Category extends Component {
	constructor(props) {
		super(props);
		this.state = {
			setActiveIndex: 1
		}
	}

	active = (index) => {
		this.setState({
			setActiveIndex: index
		})
	}

	render() {
		return (
			<ul className="category__list">
				<li onClick={() => this.active(0)}
					className={"category__item " + (this.state.setActiveIndex == 0 ? "category__item_active": "")}
					style={{borderColor: "#F4511E66"}}
					tabIndex="0">
					<div className="category__content" style={{background: "#F4511E33"}}>
						<img src={pizza} alt="pizza" className="category__icon" />
						<p className="category__name">Pizza</p>
					</div>
				</li>

				<li onClick={() => this.active(1)}
					className={"category__item " + (this.state.setActiveIndex == 1 ? "category__item_active": "")}
					style={{borderColor: "#43A04766"}}
					tabIndex="0">
					<div className="category__content" style={{background: "#43A04733"}}>
						<img src={burger} alt="burger" className="category__icon" />
						<p className="category__name">Burger</p>
					</div>
				</li>

				<li onClick={() => this.active(2)}
					className={"category__item " + (this.state.setActiveIndex == 2 ? "category__item_active": "")}
					style={{borderColor: "#FB8C0066"}}
					tabIndex="0">
					<div className="category__content" style={{background: "#FB8C0033"}}>
						<img src={sausage} alt="sausage" className="category__icon" />
						<p className="category__name">Sausage</p>
					</div>
				</li>
			</ul>
		)
	}
}

export default Category;