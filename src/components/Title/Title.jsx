import { Component } from 'react';
import "./Title.css";

class Title extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<h2 className="title">{this.props.text}</h2>
		)
	}
}

export default Title;