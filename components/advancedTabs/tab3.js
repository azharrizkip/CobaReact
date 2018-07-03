import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default class Tab3 extends Component{
	state = {
		number: 0
	}

	componentDidMount(){
		setInterval(()=> {
			this.setState({
			number: this.state.number + 1
			})
		}, 1000);
	}

	handleClick(){
		this.setState({
			number: this.state.number + 1
		})
	}
	render(){
		return(
			<View>
				<Text>Please Click Button Below</Text>
				<Text>{this.state.number}</Text>
				<TouchableOpacity onPress={()=> this.handleClick()}>
					<Text>Click</Text>
				</TouchableOpacity>
			</View>
		)
	}
}