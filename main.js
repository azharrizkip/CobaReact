import React, {Component} from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class App extends Component{

state={
	text = "Hello"
	angka = 0
}


handelChangeText(){
	if (this.state.angka < 5) {
		this.setState({
			text: "Clicked"
			this.state.angka + 1
		})
	}
}

render(){
	return(
		<View>
			<Text>{this.props.text}</Text>
			<TouchableOpacity onPress={()=> this.handelChangeText()
				<Text>Click to Change Text</Text>
			</TouchableOpacity>
		</View>
		)
	}
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#d0d0d0'
    padding: 10
  }
})