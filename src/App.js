import { Component, Fragment } from "react";

import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import Title from "./components/Title/Title";
import Category from "./components/Categories/Categories";
import Product from "./components/Product/Product"

import "./css/main.css";
import "./App.css";

// import img-db
import product1 from "./assets/img-db/products/burger/big-mac.jpg";
import product2 from "./assets/img-db/products/drink/strawberry-banana-smoothie.jpg";
import product3 from "./assets/img-db/products/drink/nonest-kids-appley-ever-after-organic-juice-drink.jpg";

import category1 from "./assets/img-db/categories/burger.png";
import category2 from "./assets/img-db/categories/drink.png";
import category3 from "./assets/img-db/categories/breakfast.png";


const categories = [
	{name: "Burger", color: "#FB8C00", image: category1},
	{name: "Drink", color: "#1E88E5", image: category2},
	{name: "Breakfast", color: "#558B2F", image: category3},
];

const products = [
	[
		{
			src: product1,
			alt: "big mac",
			title: "Big Mac®",
			description: "No 10 opp lekki phase 1 bridge in sangotedo estate"
		}
	],
	[
		{
			src: product2,
			alt: "strawberry banana smoothie",
			title: "Strawberry Banana Smoothie",
			description: "There are 190 calories in a small McDonald's Strawberry Banana Smoothie"
		},

		{
			src: product3,
			alt: "nonest kids appley ever after organic juice drink",
			title: "Honest Kids® Appley Ever After® Organic Juice Drink",
			description: "There are 190 calories in a small McDonald's Strawberry Banana Smoothie"
		},
	]
];


export default class App extends Component {
	constructor() {
		super();
		this.state = {
			idCategory: 0
		}
	}

	getIdCategory = (id) => {
		this.setState({
			idCategory: id
		})
	}

	render() {
		const { idCategory } = this.state;

		return (
			<Fragment>
				<Header />

				<main>
					<section className="category">
						<div className="category__container">
							<Title text="Food categories" />
							<Category array={categories} getIdCategory={this.getIdCategory} />
						</div>
					</section>

					<section className="products">
						<div className="products__container">
							<div className="products__header">
								<h3 className="products__title">Popular in <span className="products__title_category">{categories[idCategory].name}s</span></h3>
								<a href="#!" className="products__all">View all(29)</a>
							</div>
							
							<div className="products__content">
								{
									products.map((category) => (
										category.map((product) => {
											const { src, alt, title, description } = product;

											return (
												<Product src={src}
													alt={alt}
													title={title}
													description={description}
													key={title}
												/>
											)
										})
									))
								}
							</div>
						</div>
					</section>
				</main>

				<Menu />
			</Fragment>
		)
	}
}