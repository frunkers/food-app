import { Component, Fragment } from "react";

import Menu from "./components/Menu/Menu";
import Header from "./components/Header/Header";
import Title from "./components/Title/Title";
import Category from "./components/Categories/Categories";
import Product from "./components/Product/Product"

import "./css/main.css";
import "./App.css";

// *** import img-db ***
// * products *
// burger
import burger1 from "./assets/img-db/products/burger/big-mac.jpg";
import burger2 from "./assets/img-db/products/burger/cheeseburger.jpg";
import burger3 from "./assets/img-db/products/burger/double-quarter-pounder-with-cheese.jpg";
// drink
import drink1 from "./assets/img-db/products/drink/strawberry-banana-smoothie.jpg";
import drink2 from "./assets/img-db/products/drink/nonest-kids-appley-ever-after-organic-juice-drink.jpg";
import drink3 from "./assets/img-db/products/drink/caramel-frappe.jpg";
// breakfast
import breakfast1 from "./assets/img-db/products/breakfast/big-dreakfast-with-hotcakes.jpg";
import breakfast2 from "./assets/img-db/products/breakfast/sausage-burrito.jpg";
import breakfast3 from "./assets/img-db/products/breakfast/fruit-and-maple-oatmeal.jpg";

// * category *
import category1 from "./assets/img-db/categories/burger.png";
import category2 from "./assets/img-db/categories/drink.png";
import category3 from "./assets/img-db/categories/breakfast.png";


const categories = [
	{name: "Burger", color: "#FB8C00", image: category1},
	{name: "Drink", color: "#1E88E5", image: category2},
	{name: "Breakfast", color: "#558B2F", image: category3},
];

const products = [
	[	// * burger
		{
			src: burger1,
			alt: "big mac",
			title: "Big Mac®",
			description: "The mouthwatering perfection starts with two 100% pure all beef patties and Big Mac® sauce sandwiched between a sesame seed bun."
		},
		{
			src: burger2,
			alt: "cheeseburger",
			title: "Cheeseburger",
			description: "Cheeseburger is topped with a tangy pickle, chopped onions, ketchup, mustard, and a slice of melty American cheese."
		},
		{
			src: burger3,
			alt: "double quarter pounder with cheese",
			title: "Double Quarter Pounder®* with Cheese",
			description: "Beef patties are seasoned with just a pinch of salt and pepper, sizzled on a flat iron grill, then topped with slivered onions, tangy pickles and two slices of melty cheese on a sesame seed bun."
		},
	],
	[	// * drink
		{
			src: drink1,
			alt: "strawberry banana smoothie",
			title: "Strawberry Banana Smoothie",
			description: "Our Strawberry Shake recipe features creamy vanilla soft serve blended with strawberry syrup and finished with whipped light cream."
		},

		{
			src: drink2,
			alt: "nonest kids appley ever after organic juice drink",
			title: "Honest Kids® Appley Ever After® Organic Juice Drink",
			description: "An organic drink perfect for a kids meal! Honest Kids Juice drink is an organic apple juice sweetened only with fruit juice."
		},
		{
			src: drink3,
			alt: "caramel frappe",
			title: "Caramel Frappé",
			description: "Caramel Frappé recipe is made with rich caramel flavor and a hint of coffee, blended with ice, and topped with whipped topping and caramel drizzle."
		},
	],
	[ // * breakfast
		{
			src: breakfast1,
			alt: "big dreakfast with hotcakes",
			title: "Big Breakfast® with Hotcakes",
			description: "Hotcakes satisfies with both sweet and savory breakfast favorites. Fill up with a warm biscuit, savory hot sausage, fluffy scrambled eggs, crispy hash browns, and golden brown hotcakes with a side of real butter and the sweet flavor of maple."
		},

		{
			src: breakfast2,
			alt: "sausage burrito",
			title: "Sausage Burrito",
			description: "Breakfast Burrito recipe is loaded with fluffy scrambled egg, pork sausage, melty cheese, green chiles, and onion! It's wrapped in a soft tortilla, making it the perfect grab and go breakfast."
		},
		{
			src: breakfast3,
			alt: "fruit-and-maple-oatmeal",
			title: "Fruit & Maple Oatmeal",
			description: "Fruit and Maple Oatmeal recipe feature two full servings of whole-grain oats with a touch of cream and brown sugar."
		},
	],
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
									products[idCategory].map((product) => {
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