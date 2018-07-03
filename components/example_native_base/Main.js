import React, {Component} from 'react';
import {
	Container,
	Header,
	Content,
	Footer,
	Button,
	Icon,
	Title,
	Right,
	Left,
	Body,
	Text
} from 'native-base';

export default class Main extends Component{

	render(){
		return(
			<Container>
				<Header style={{backgroundColor: '#000000'}}>
					<Left>
						<Icon style={{color: '#ffffff'}} name="menu" />
					</Left>
					<Body>
						<Title>
							Native Base
						</Title>
					</Body>
					<Right>
						<Icon style={{color: '#ffffff'}} name="more" />
					</Right>
				</Header>
				<Body>
					<Content>
						<Text style={{marginTop: 20}}>
							Welcome To my first Native Base App
						</Text>
						<Button block success style={{marginTop: 20}}>
							<Text>Get Started</Text>
						</Button>
					</Content>
				</Body>
			</Container>
		)
	}
}