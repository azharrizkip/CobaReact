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
  }

  getPost(){
    const headers = {
      Authorization : "JWT eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNTYxNzE3MjQzLCJlbWFpbCI6IiJ9.Nraq1z1tOsYwThu1pkdFEuD7snXPYFaP-dMCErHz6h4"
    }
    axios.get('http://192.168.0.11:8000/api/unit/',{headers : headers}).then(function(response){
      alert(JSON.stringify(response.data.results))
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
            onPress={this.getPost}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          />
          <Button
            onPress={this.getPost}
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
