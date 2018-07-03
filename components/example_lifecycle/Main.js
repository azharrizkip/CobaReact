import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Button from '../../Button';

export default class Main extends Component{

state = {
	showComponentButton: false
}

componentWillMount() {
	console.log('component will mount')
}

componentDidMount() {
	console.log('component did mount')
}

componentWillUnmount() {
	console.log('component will unmount')
}

handleShowHideButton(){
	this.setState({
		showComponentButton: !this.state.showComponentButton
	})
}
render() {
	return(
		<View>
			<Text>Example Lifecycle</Text>
			<Text onPress={()=> this.handleShowHideButton()}>Show / Hide Button</Text>
			{ this.state.showComponentButton == true ? (
				<Button>
					<Text style={styles.button1}>This is Button</Text>
				</Button>
			) : null }
		</View>
		);
	}

}

const styles = StyleSheet.create({
  button1: {
    backgroundColor: '#d0d0d0',
    padding: 10
  },
});