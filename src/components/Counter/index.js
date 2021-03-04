import React from 'react';
import Button from '../Button';

class Counter extends React.Component {
	constructor(props){
		super(props);
		this.state = {
				count: parseInt(props.init),
				count2: props.secondary
		}
	}

	setMyState = (myState, number) => {
		console.log(number)
		this.setState({
			[myState]: number,
		})
	};

	render(){
		const { count, count2 } = this.state
		const { title } = this.props;

		return (
			<>
				<>
					<h1>{title} numero 1 </h1>
						<Button 
							title="Sumar" 
							miFuncion={this.setMyState} 
							myCount={count + 1}
							myState="count"
						/>
					<h4>{count}</h4>
						<Button 
							title="Restar" 
							miFuncion={this.setMyState} 
							myCount={count - 1}
							myState="count"
						/>
					<br/>
						<Button 
							title="Reset" 
							miFuncion={this.setMyState} 
							myCount={0}
							myState="count"
						/>
				</>
				<> {/* Esto es un Fragment */}
					{/* En jsx la apertura de llaves significa que habra codigo de js que devolvera un valor */}
					<h1>{title} numero 2</h1>
						<Button 
							title="Sumar" 
							miFuncion={this.setMyState} 
							myCount={count2 + 1}
							myState="count2"
						/>
					<h4>{count2}</h4>
						<Button 
							title="Restar" 
							miFuncion={this.setMyState} 
							myCount={count2 - 1}
							myState="count2"
						/>
					<br/>
						<Button 
							title="Reset" 
							miFuncion={this.setMyState} 
							myCount={0}
							myState="count2"
						/>
				</>
			</>
		)
	}
}

export default Counter;
