import React, {Component} from 'react'
import {
  Container, Content, List, ListItem, Text, Fab,
  Item, Label, Input, Button, Icon
} from 'native-base'
import axios from 'axios'

export default class Main extends Component{


  state = {
    posts: [],
  }


    //axios({ method: 'GET', url: 'http://127.0.0.1:8000/api/unit.json', headers: {authorization: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNTYxNjE5Mjk4LCJlbWFpbCI6ImF6aGFyZXJpemtpMTJAZ21haWwuY29tIn0.MpLDEH_0Ed_cZObsBS5u8Un44cwj0ADjOq6ycXKVBgM"} }).then((result)=>{
    //axios.get('http://127.0.0.1:8000/api/unit', 'accept: application/json', 'X-CSRFToken: NJIZ7u3kI0w0lTJs5q9IW2gwJUtfgVCIi0KTe8VGEH0UYxR4TWhYIbpys7tEeQ6t').then((result)=>{
    //axios({ method: 'GET', url: 'http://127.0.0.1:8000/api/unit.json', headers: {'X-CSRFToken': 'NJIZ7u3kI0w0lTJs5q9IW2gwJUtfgVCIi0KTe8VGEH0UYxR4TWhYIbpys7tEeQ6t', 'accept': 'application/json'} }).then((result)=>{
   
  allPosts(){
    axios.get(`http://127.0.0.1:8000/api/unit`, {headers:{"Authorization":"eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6ImFkbWluIiwiZXhwIjoxNTYxNjkyNjgwLCJlbWFpbCI6ImF6aGFyZXJpemtpMTJAZ21haWwuY29tIn0.AKeKD9IXnx05qVGdoKJvy9sm_d8S1fAdDhCDcKhaNzE"}}).then((result)=>{
    //axios.get(`http://192.168.22.2:8000/api/category.json`).then((result)=>{
      this.setState({
        posts: result.data,
      })
      alert(JSON.stringify(result.data))
    })
  }

  componentDidMount(){
    this.allPosts()
  }

  render(){
    return (
      <Container>
        <Content>

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