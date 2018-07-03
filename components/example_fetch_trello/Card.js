import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Container,
    Header,
    Content,
    Left,
    Body,
    Right,
    Title,
    Subtitle,
    Text,
    Button,
    Icon,
    Footer,
    Thumbnail,
    FooterTab,
    Card,
    CardItem,
    List,
    ListItem
} from 'native-base';
import axios from 'axios'

export default class Cards extends Component{

    state = {
        cards: []
    }

    allCards(){
        const {id} = this.props.navigation.state.params
        axios.get(`https://api.trello.com/1/lists/${id}/cards?fields=id,name,badges,labels&key=0a5393e0cda60d506290ca411d6d7667&token=4158254e3c7ed15bc4d72b1e40987413de392255e7815d0ae07a74afce8ddcb1`).then((result)=>{
            this.setState({
                cards: result.data
            })
        })
    }

    componentDidMount(){
        this.allCards()
    }

    render(){
        return(
            <Container style={{backgroundColor: '#FFF'}}>   
                <Header>
                    <Left/>
                    <Body>
                        <Title style={{alignSelf: 'center'}}>Member</Title>
                        <Subtitle style={{alignSelf: 'center'}}>Of</Subtitle>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.navigate('AddReport')}>
                            <Icon name='add'/>
                        </Button>
                    </Right>
                </Header>             
                <Content style={{padding: 20, paddingTop:-100}}>
                    <Text style={styles.dateTime}>Jan 2018</Text>
                    {this.state.cards.map((card)=> (
                        <Card key={card.id}>
                            <View style={{flex:1, flexDirection: 'row', padding: 20}}>
                                <CardItem style={{flex:5, flexDirection: 'column', padding: 30}}>
                                    <Text>{card.badges.due}</Text>
                                    <Text>{card.name}</Text>
                                </CardItem>
                                <CardItem style={{flex:1, flexDirection: 'column', padding: 30}}>
                                     <Icon style={{color: 'green'}} name='checkmark-circle'/>  
                                </CardItem>
                            </View>
                        </Card>
                    ))}
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
    iconYellow: {
        color: '#f1c40f', 
        marginTop: -70, 
        marginLeft: 220, 
        fontSize: 45
    },
    iconGreen: {
        color: '#2ecc71', 
        marginTop: -70, 
        marginLeft: 220, 
        fontSize: 45,
    },
    dateTime: {
        padding: 10,
        alignSelf: 'center'
    },
    footerTabsColor:{
        backgroundColor: '#026aa7'
    },
    footerInactiveTab:{
        color: '#ffffff'
    }
})