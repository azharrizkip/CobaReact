import React, {Component} from 'react'
import {
  Container, Content, List, ListItem, Text, Fab,
  Item, Label, Input, Button, Icon
} from 'native-base'
import axios from 'axios'

// const uri = 'https://api.trello.com/1/boards/560bf4298b3dda300c18d09c?fields=name,url&key=0a5393e0cda60d506290ca411d6d7667&token=4158254e3c7ed15bc4d72b1e40987413de392255e7815d0ae07a74afce8ddcb1'
const uri = 'https://api.trello.com/1/boards/bD5pFONf?fields=id,name,idOrganization,dateLastActivity&lists=open&list_fields=id,name&key=0a5393e0cda60d506290ca411d6d7667&token=4158254e3c7ed15bc4d72b1e40987413de392255e7815d0ae07a74afce8ddcb1'

export default class Main extends Component{

  state = {
    boards: [],
    name: ""
  }

  allBoards(){
    axios.get(`${uri}`).then((result)=>{
      this.setState({
        boards: result.data,
        name: ""
      })
    })
  }

  componentDidMount(){
    this.allBoards()
  }

  render(){
    const  {id, name, idOrganization, dateLastActivity} = this.state.boards
    return (
      <Container>
        <Content>
          <List>
            <ListItem><Text>id : {id}</Text></ListItem>
            <ListItem><Text>name : {name}</Text></ListItem>
            <ListItem><Text>idOrganization : {idOrganization}</Text></ListItem>
            <ListItem><Text>dateLastActivity : {dateLastActivity}</Text></ListItem>
          </List>
        </Content>
      </Container>
    )
  }

}