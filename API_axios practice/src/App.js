import axios from "axios";
import React, { Component, Fragment } from "react";

const Total = (props) => {
	let WeightTotal = 0,
		AgeTotal = 0;
	props.data.forEach((element) => {
		WeightTotal += Number(element.life_span.split(" ")[0]);
		AgeTotal += Number(element.life_span.split(" ")[0]);
	});

	console.log(WeightTotal);

	return (
		<p>
			On Average a cat can weight about{" "}
			{(WeightTotal / props.data.length).toFixed(2)} Kg and live{" "}
			{(AgeTotal / props.data.length).toFixed(2)} Years.
		</p>
	);
};

class App extends Component {
	state = {
		data: [],
	};

	componentDidMount() {
		this.fetCatData();
	}

	fetCatData = async () => {
		const url = "https://api.thecatapi.com/v1/breeds";
		try {
			const response = await axios.get(url);
			const data = await response.data;
			// console.log(data);
			this.setState({ data });
		} catch (error) {
			console.error(error);
		}
	};

	CatsData(data) {
		let SumOfWeight;

		data.forEach((element) => {
			const Weight = Number(element);
			console.log(Weight);
		});
		data.reduce(SumOfWeight);
		return (
			<Fragment>
				<p></p>
			</Fragment>
		);
	}

	render() {
		return (
			<div className="App">
				<h1>30 Days of React</h1>
				<h1>Cats Paradise</h1>
				<div className="cats-wrapper">
					<p>There are a total of {this.state.data.length} cats</p>
					<Total data={this.state.data} />
				</div>
			</div>
		);
	}
}
export default App;
