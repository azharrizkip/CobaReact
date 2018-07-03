import React, {Component} from 'react'
import {
  Container, Content, Text, Form,
  Button, Label, Input, Item
} from 'native-base'
import axios from 'axios'

const uri = 'https://api.backendless.com/115DC970-7689-C50E-FF6B-5F94AFFFA900/0A3575C9-7BEF-4CBA-FF55-7C5806658300/data'

export default class Create extends Component{

  state = {
    title: ""
  }

  handleSubmit(){
    const {allPosts} = this.props.navigation.state.params
    //POST data into API
    axios
      .post(`${uri}/posts`, {title: this.state.title})
      .then(result=>{
        //if success, get latest data from API
        if(result.data){
          allPosts()
          this.props.navigation.goBack()
        }
      })
  }

  render(){
    return (
      <Container>
        <Content>

          <Item inlineLabel>
            <Label>Title</Label>
            <Input
              onChangeText={title=> this.setState({title})}
              value={this.state.title}
            />
          </Item>

          <Button success onPress={()=> this.handleSubmit()}>
            <Text>Submit</Text>
          </Button>

        </Content>
      </Container>
    )
  }

}