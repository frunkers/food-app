import { Component } from 'react';
import "./Title.css";

export default class Title extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		const { text } = this.props;

		return (
			<h2 className="title">{text}</h2>
		)
	}
}