import { Component } from 'react';
import './Category.css';

class Category extends Component {
	constructor(props) {
		super(props);
		this.state = {
			borderColor: this.props.color + '40',
			bgColor: this.props.color + '10',
			classContent: 'category__content',
			active: false
		}
	}

	active = () => {
		this.setState({
			borderColor: this.props.color,
			bgColor: this.props.color + '30',
			classContent: 'category__content_active',
			active: true
		})
	}

	render() {
		return (
			<li onClick={this.active} 
				tabIndex={0} 
				className="category"
				style={{borderColor: this.state.borderColor}}>
				<div className={"category__content " + this.state.classContent} style={{background: this.state.bgColor}}>
					<img src={this.props.src} alt={this.props.alt} className="category__icon" />
					<p className="category__name">{this.props.name}</p>
				</div>
			</li>
		)
	}
}

export default Category;