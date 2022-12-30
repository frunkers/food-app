import { Component } from "react";
import "./Product.css";
import like from "../../assets/img/icons/like.svg";
import likeActive from "../../assets/img/icons/likeActive.svg";

export default class Product extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isActive: false
		}
	}

	handleActive = () => {
		this.setState(({ isActive }) => ({
			isActive: !isActive
		}));
	}
	
	render() {
		const { src, alt, title, description } = this.props; 
		const { isActive } = this.state;
		return (
			<article className="product" tabIndex="0">
				<div className="product__content">
					<img src={src} alt={alt} className="product__image" />
					<p className="product__title">{title}</p>
					<p className="product__description">{description}</p>
					<div className="product__stats">
						<div className="product__stat product__like">
							<img onClick={this.handleActive}
								src={isActive? likeActive : like}
								alt="like"
								className="product__icon"
								tabIndex="0"
							/>
						</div>
					</div>
				</div>
			</article>
		)
	}
}