import { Component } from "react";
import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import Title from "./components/Title/Title";
import Category from "./components/Categories/Categories";
import Product from "./components/Product/Product"
import "./css/main.css";
import "./App.css";

// * products
// burger
import bigMac from "./assets/img/products/burger/big-mac.jpg";

// drink
import strawberryBananaSmoothie from "./assets/img/products/drink/strawberry-banana-smoothie.jpg";
import nonestKidsAppleyEverAfterOrganicJuiceDrink from "./assets/img/products/drink/nonest-kids-appley-ever-after-organic-juice-drink.jpg";

const products = [
	[
		{
			src: bigMac,
			alt: "big mac",
			title: "Big Mac®",
			description: "No 10 opp lekki phase 1 bridge in sangotedo estate"
		}
	],
	[
		{
			src: strawberryBananaSmoothie,
			alt: "strawberry banana smoothie",
			title: "Strawberry Banana Smoothie",
			description: "There are 190 calories in a small McDonald's Strawberry Banana Smoothie"
		},

		{
			src: nonestKidsAppleyEverAfterOrganicJuiceDrink,
			alt: "nonest kids appley ever after organic juice drink",
			title: "Honest Kids® Appley Ever After® Organic Juice Drink",
			description: "There are 190 calories in a small McDonald's Strawberry Banana Smoothie"
		}
	]
];

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

						<section className="products">
							<div className="products__container">
								<div className="products__header">
									<h3 className="products__title">Popular in <span className="products__title_category">burgers</span></h3>
									<a href="#!" className="products__all">View all(29)</a>
								</div>
								
								<div className="products__content">
									{
										products.map((category) => (
											category.map((product) => (
												<Product src={product.src} 
													alt={product.alt}
													title={product.title}
													description={product.description} />
											))
										))
									}
								</div>
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