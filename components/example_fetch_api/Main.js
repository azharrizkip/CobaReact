import React, {Component} from 'react'
import { Button } from 'react-native';
import {
  Container, Content, List, ListItem, Text, Fab,
  Item, Label, Input, Icon
} from 'native-base'
import axios from 'axios'

export default class Main extends Component{
  state = {
    posts: [],
    score: 1,
    title: ""
  }

  getPost(){
    //const headers = {
    //  Authorization : "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNTYxNzE5NDE3LCJlbWFpbCI6ImF6aGFyZXJpemtpMTJAZ21haWwuY29tIn0.LhkiEb92Si_MGBurTmHTtABkrWrzpD5u5A2I4Lvh87Q"
    //}
    axios.get('http://192.168.22.2:8000/api/category/').then(function(response){
      alert(JSON.stringify(response.data))
      this.setState({
        posts: response.data
      });
    }).catch(function (error) {
      alert(JSON.stringify(error));
    });
  }

  getCategory(){
    axios.get('http://192.168.22.2:8000/api/category/').then(function(result){
      alert(JSON.stringify(result.data))
      this.setState({
        posts: result.data
      })
    }).catch(function (error) {
      alert(JSON.stringify(error));
    });
  }

  render(){
    return (
      <Container>
        <Content>
          <Text>Hallo</Text>
          <Button
            onPress={()=> this.getCategory()}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={()=> this.getCategory()}
            title="Post"
            color="red"
          />
          <List>

          {this.state.posts.map( post=>(
              <ListItem key={post.id}>
                <Text>{post.name}</Text>
              </ListItem>
          ) )}

          </List>
        </Content>
      </Container>
    )
  }

}
