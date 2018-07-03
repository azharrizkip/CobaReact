import React, { Component } from 'react';
import { Container, Content, Text, List, ListItem } from 'native-base';


export default class Main extends Component{
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem onPress={()=>this.props.navigation.navigate('RouteState', {propsFromMain: 'Props From Main'})}>
              <Text>Example State</Text>
            </ListItem>
            <ListItem onPress={()=>this.props.navigation.navigate('RouteProps')}>
              <Text>Example Props</Text>
            </ListItem>
            <ListItem onPress={()=>this.props.navigation.navigate('RouteFlex')}>
              <Text>Example Flex</Text>
            </ListItem>
            <ListItem onPress={()=>this.props.navigation.navigate('RouteLifecycle')}>
              <Text>Example Lifecycle</Text>
            </ListItem>
            <ListItem onPress={()=>this.props.navigation.navigate('RouteNativeBase')}>
              <Text>Example Native Base</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    )
  }
}