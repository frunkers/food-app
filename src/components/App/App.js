import Header from "../Header/Header";
import Menu from "../Menu/Menu";
import Title from "../Title/Title";
import Category from "../Categories/Categories";
import '../../css/main.css';
import './App.css';
import { Component } from "react";

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="wrapper">
					<Header />

					<main>
						<section className="category">
							<div className="category__container">
								<Title text="Enjoy Delicious food" />
								<Category />
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