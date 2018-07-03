import React, {Component} from 'react'
import {StyleSheet} from 'react-native'
import {Container, Content, Text, Icon, Button, Card, CardItem} from 'native-base'
import axios from 'axios'

const uri = 'https://api.trello.com/1/members/azharrizkip?key=0a5393e0cda60d506290ca411d6d7667&token=4158254e3c7ed15bc4d72b1e40987413de392255e7815d0ae07a74afce8ddcb1'

export default class Profile extends Component{

	state = {
		profiles: []
	}

	allProfile(){
		axios.get(`${uri}`).then((result)=>{
			this.setState({
				profiles: result.data
			})
		})
	}

	componentDidMount(){
		this.allProfile()
	}

	render(){
		const { username } = this.state.profiles
		return(
			<Container>
				<Content>
					<Card>
						<CardItem>
							<Text>Username : {username}</Text>
						</CardItem>
					</Card>
				</Content>
			</Container>
		)
	}

}