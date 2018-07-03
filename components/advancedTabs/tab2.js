import React, { Component } from 'react';
import  { Image } from 'react-native';
import { Container, Content, Header, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class Tab2 extends Component {

	cards = [
		{
			id: 1,
			text: 'NativeBase',
			textNote: 'GeekyAnts',
			likes: 5,
			comments: '2',
            imageProfile: require('../../assets/avatar5.png'),
            image: require('../../assets/coldplay.png'),
            uploaded: '11',
            time: 'H'
		},
		{
			id: 2,
			text: 'ReactNative',
			textNote: 'NativeBase',
			likes: 23,
			comments: '7',
            imageProfile: require('../../assets/avatar2.png'),
            image: require('../../assets/coldplay2.png'),
            uploaded: '35',
            time: 'M'
		},
        {
            id: 3,
            text: 'DumbWays',
            textNote: 'AndroidStudio',
            likes: 100,
            comments: '43',
            imageProfile: require('../../assets/avatar3.png'),
            image: require('../../assets/adventur.png'),
            uploaded: '2',
            time: 'H'
        }
	]

	render() {
		return (
			<Container>
        		<Content>
                    {this.cards.map((card)=> (
        		        <Card key={card.id}>
					       <CardItem>
        		      	       <Left>
        		        		    <Thumbnail source={card.imageProfile} />
        		        		    <Body>
        		          			    <Text>{card.text}</Text>
        		          			    <Text note>{card.textNote}</Text>
        		    		        </Body>
        		    		    </Left>
        		    	    </CardItem>
        		            <CardItem cardBody>
        		                <Image source={card.image} style={{height: 200, width: null, flex: 1}}/>
        		            </CardItem>
        		            <CardItem>
        		                <Left>
        		                  <Button transparent>
        		                      <Icon active name="thumbs-up" />
        		                      <Text>{card.likes} Likes</Text>
        		                  </Button>
        		                </Left>
        		                <Body>
        		                  <Button transparent>
        		                    <Icon active name="chatbubbles" />
        		                    <Text>{card.comments} Komen</Text>
        		                  </Button>
        		    	        </Body>
            			        <Right>
            			         	<Text>{card.uploaded}{card.time} ago</Text>
            			        </Right>
            		        </CardItem>
    	               </Card>
                    ))}
    	       </Content>
    	  </Container>
		)
	}
}