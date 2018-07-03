import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content, Header, Body, List, ListItem, Text } from 'native-base'
import axios from 'axios'

const uri = 'https://api.trello.com/1/members/azharrizkip/organizations?key=0a5393e0cda60d506290ca411d6d7667&token=4158254e3c7ed15bc4d72b1e40987413de392255e7815d0ae07a74afce8ddcb1'

export default class Example extends Component{

	state = {
		boards: []
	}

	allBoards(){
		axios.get(`${uri}`).then((result)=>{
			this.setState({
				boards: result.data
			})
		})
	}

	componentDidMount(){
		this.allBoards()
	}

	render(){
		return(
			<Container>
				<Content>
					<List>
						{this.state.boards.map((board)=>(
							<ListItem key={board.id} onPress={()=> this.props.navigation.navigate('RouteFetchTrelloDash',{id: board.id})}>
								<Text>Org : {board.displayName}</Text>
							</ListItem>
						))}
					</List>
				</Content>
			</Container>
		)
	}

}