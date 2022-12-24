import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Title from "../Title/Title";
import Category from "../Category/Category";
import pizza from './img/pizza.png';
import burger from './img/burger.png';
import sausage from './img/sausage.png';
import '../css/main.css';
import './App.css';
import { Component } from "react";

const categories = [
	{
		color: '#FE554A',
		src: pizza,
		alt: 'pizza',
		name: 'Pizza'
	},
	{
		color: '#0B735F',
		src: burger,
		alt: 'burger',
		name: 'Burger'
	},
	{
		color: '#F9881F',
		src: sausage,
		alt: 'sausage',
		name: 'Sausage'
	}
];

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="wrapper">
					<Header />

					<main>
						<section className="section-category">
							<div className="section-category__container">
								<Title text="Enjoy Delicious food"/>
								<ul className="section-category__list">
									{
										categories.map((el) => {
											return (
												<Category key={el.color} 
													color={el.color} 
													src={el.src} 
													alt={el.alt} 
													name={el.name} />
											)
										})
									}
								</ul>
							</div>
						</section>
					</main>

					<Menu />
				</div>
			</div>
		)
	}	
}

export default App;