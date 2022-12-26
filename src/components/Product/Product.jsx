import { Component } from "react";
import "./Product.css";
import like from "../../assets/img/icons/like.svg";
import likeActive from "../../assets/img/icons/likeActive.svg";

class Product extends Component {
	constructor(props) {
		super(props);
		this.state = {
			active: false
		}
	}

	active = () => {
		this.setState({
			active: true
		});
	}
	
	render() {
		return (
			<article onClick={this.state.active} className="product" tabIndex="0">
				<div className="product__content">
					<img src={this.props.src} alt={this.props.alt} className="product__image" />
					<p className="product__title">{this.props.title}</p>
					<p className="product__description">{this.props.description}</p>
					<div className="product__stats">
						<div className="product__stat product__like">
							<img src={like} alt="like" className="product__icon" />
						</div>
					</div>
				</div>
			</article>
		)
	}
}

export default Product;