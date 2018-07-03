import React, { Component } from 'react';
import { SectionList, View, Text,StyleSheet } from 'react-native';
import {
    Container, Header, Content,
    Left, Body, Right,
    Title, Subtitle, Button,
    Icon, Footer, Thumbnail,
    FooterTab, Card, CardItem,

} from 'native-base';

// import Timestamp from 'react-timestamp'

import axios from 'axios';

const uri = 'https://api.backendless.com/954ED070-DAB6-29F9-FFC1-65B7C3AA0300/29456C43-95C4-0639-FFD1-D80284025400'

export default class Test extends Component {
    
    state = {
        sections: [],
        boards: []
    }

    boardName(){
        const {id} = this.props.navigation.state.params
        axios.get(`https://api.trello.com/1/boards/${id}?fields=id,name,idOrganization,dateLastActivity&lists=open&list_fields=id,name&key=0a5393e0cda60d506290ca411d6d7667&token=4158254e3c7ed15bc4d72b1e40987413de392255e7815d0ae07a74afce8ddcb1`).then((result)=>{
            this.setState({
                boards: result.data
            })
        })
    }

    componentDidMount(){
        this.boardName(),
        axios.get(`${uri}/data/reports`).then(result => {
           this.setState({
             sections: result.data
           })
        })
    }

    toDate(timestamp){
        let theDate = new Date(timestamp)
        months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        days = ['Sunday', 'Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
        year = theDate.getFullYear();
        month = months[theDate.getMonth()];
        date = theDate.getDate();
        day = days[theDate.getDay()];
        hour = theDate.getHours();
        min = theDate.getMinutes();
        sec = theDate.getSeconds();
        ampm = hour > 12 ? 'PM' : 'AM';
        time = date + ' ' + day + ', '+ hour + '.' + min + ampm;
        return time
    }

    render(){
        const { name } = this.state.boards
        return(
            <Container>   
                <Header>
                    <Left/>
                    <Body>
                        <Title style={{alignSelf: 'center' }}>Report</Title>
                        <Subtitle style={{alignSelf: 'center' }}>On {name}</Subtitle>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.navigation.navigate('AddReport')}>
                            <Icon name='add'/>
                        </Button>
                    </Right>
                </Header>             
                <Content style={{padding: 20, paddingTop:-100}}>
                    {this.state.sections.map((section)=> (
                        <Card key={section.objectId}>
                            <View>
                                <CardItem button onPress={()=> this.props.navigation.navigate('RouteFetchTrelloEditReport',{id: section.objectId})}>
                                    <Text>{this.toDate(section.created)}</Text>
                                </CardItem>
                                <CardItem header>
                                      <Text>{section.title}</Text>
                                </CardItem>
                                <Right>
                                    <View>
                                       {section.isDone == true ? (

                                        <Icon style={styles.iconGreen} name='ios-checkmark-circle'/>

                                        ):(

                                        <Icon style={styles.iconYellow} name='md-alert'/>

                                        )}
                                    </View>
                                </Right>
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
        fontSize: 45 
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
