import React, {Component} from 'react'
import {
  Container, Content, Text, Form,
  Button, Label, Input, Item
} from 'native-base'
import axios from 'axios'

const uri = 'https://api.backendless.com/115DC970-7689-C50E-FF6B-5F94AFFFA900/0A3575C9-7BEF-4CBA-FF55-7C5806658300/data'

export default class Update extends Component{

  state = {
    post: {}
  }

  componentDidMount(){
    const {id} = this.props.navigation.state.params

    axios.get(`${uri}/posts/${id}`).then(result=>{
      this.setState({
        post: result.data,
      })
    })
  }

  handleSubmit(){
    const {allPosts, id} = this.props.navigation.state.params
    axios
      .put(`${uri}/posts/${id}`, this.state.post)
      .then(result=>{
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
              onChangeText={
                title=> this.setState({ post: {...this.state.post, title} })
              }
              value={this.state.post.title}
            />
          </Item>

          <Item inlineLabel>
            <Label>Slug</Label>
            <Input
              onChangeText={
                title=> this.setState({ post: {...this.state.post, slug} })
              }
              value={this.state.post.slug}
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