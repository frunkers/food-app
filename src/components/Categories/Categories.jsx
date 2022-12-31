import { Component } from 'react';
import "./Categories.css";

export default class Category extends Component {
	constructor(props) {
		super(props);
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
		const { array, getIdCategory } = this.props;
		const { isActive } = this.state;

		return (
			<ul className="category__list">
				{
					array.map((el, index) => {
						const { name, color, image } = el;

						return (
							<li onClick={() => {
									this.handleActive(index);
									getIdCategory(index);
								}}
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