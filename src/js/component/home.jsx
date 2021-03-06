import React from "react";
import Card from "./card.jsx";
import Navbar from "./navbar.jsx";
import Jumbotron from "./jumbotron.jsx";
//include images into your bundle

//create your first component
const Home = () => {
	return (
		<div className="container">
			<Navbar />
			<Jumbotron />
			<div className="card-group">
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	);
};
export default Home;
