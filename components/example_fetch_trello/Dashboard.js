import React, { Component } from 'react'
import { StyleSheet, View, ImageBackground, TouchableOpacity } from 'react-native'
import { 
  Container, Content, Item, 
  Label, Input, List, 
  ListItem, Text, Card, 
  CardItem, Header, Left, 
  Right, Body, Footer, 
  FooterTab, Title, Subtitle,
  Button, Icon 
} from 'native-base'
import axios from 'axios'

export default class Dashboard extends Component{

	state = {
		boards: []
	}

  allBoards(){
    const {id} = this.props.navigation.state.params
    axios.get(`https://api.trello.com/1/organizations/${id}/boards?key=0a5393e0cda60d506290ca411d6d7667&token=4158254e3c7ed15bc4d72b1e40987413de392255e7815d0ae07a74afce8ddcb1`).then((result)=>{
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
  				<Content style={styles.content}>	
  					 <List>
                {this.state.boards.map((board) => (
                  <TouchableOpacity key={board.id} onPress={()=> this.props.navigation.navigate('RouteFetchTrelloRepDet',{id: board.id})}>
                    <Card>
                      <CardItem cardBody>
                        {board.prefs.backgroundImage !== null?
                        (<ImageBackground source={{uri: board.prefs.backgroundImage}} style={styles.boardImageBackground}>
                          <Text style={styles.boardFont}>{board.name}</Text>
                        </ImageBackground>)
                        :
                        (<ImageBackground style={{height: 100, width: null, flex: 1, backgroundColor: board.prefs.backgroundTopColor}}>
                          <Text style={styles.boardFont}>{board.name}</Text>
                        </ImageBackground>)}
                      </CardItem>
                    </Card>
                  </TouchableOpacity>
                ))}
              </List>
  				</Content>
          <Footer>
              <FooterTab style={styles.footerTabsColor}>
                  <Button vertical onPress={() => this.props.navigation.navigate('Dashboard')}>
                      <Icon type="Entypo" name="area-graph" style={styles.footerInactiveTab}/>
                      <Text style={styles.footerInactiveTab}>Dashboard</Text>
                  </Button>
                  <Button active vertical onPress={() => this.props.navigation.navigate('Reports')}>
                      <Icon name="ios-aperture"/>
                      <Text>Report</Text>
                  </Button>
                  <Button vertical onPress={() => this.props.navigation.navigate('Settings')}>
                      <Icon name="settings" style={styles.footerInactiveTab}/>
                      <Text style={styles.footerInactiveTab}>Setting</Text>
                  </Button>
              </FooterTab>
            </Footer>
  			</Container>
  		)
  	}
}

const styles = StyleSheet.create({
  content: {
    padding: 20
  },
  boardImageBackground: {
    height: 100, 
    width: null, 
    flex: 1
  },
  boardFont: {
    color: '#fff', 
    fontSize: 16, 
    marginLeft: 10
  }
})