import React, { Component } from 'react'
import { StyleSheet } from 'react-native'
import { Container, Content, Text, Card, CardItem } from 'native-base'
import axios from 'axios'

const uri = 'https://api.trello.com/1/organizations/5ad3542add079f4549ce32ea/members?key=0a5393e0cda60d506290ca411d6d7667&token=4158254e3c7ed15bc4d72b1e40987413de392255e7815d0ae07a74afce8ddcb1'

export default class OrgMember extends Component{

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
					<Card>
						{this.state.boards.map((board)=>(
							<CardItem key={board.id}>
								<Text>{board.fullName}</Text>
							</CardItem>
						))}
					</Card>
				</Content>
			</Container>
		)
	}
}