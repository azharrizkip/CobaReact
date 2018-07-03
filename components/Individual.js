import React, { Component } from 'react';
import { Image,StyleSheet } from 'react-native';
import { 
    Container, 
    Content, 
    Header, 
    Card, 
    CardItem, 
    Thumbnail, 
    Text, 
    Button, 
    Icon,
    Left,
    Right,
    Body,
    Badge,
    List,
    ListItem
} from 'native-base';

/*
class IndividualHeader extends Component{
    render(){
        return( 
        );
    }
}


class IndividualPerfomance extends Component{
    render(){
        return(  
        );
    }
}
*/

export default class Individual extends Component{
        
    employees = [
        {
            id: 1,
            name: 'Aminudin',
            td: 10,
            tp: 9,
        },
        {
            id: 2,
            name: 'Arif',
            td: 10,
            tp: 9,
        },
        {
            id: 3,
            name: 'Azhar',
            td: 10,
            tp: 9,
        },
        {
            id: 4,
            name: 'Isa',
            td: 10,
            tp: 9,
        }
    ]

    render(){
        return(
            <Card>
                <CardItem>
                    <Body style={styles.container}>
                        <Text style={styles.employeesPerfomance}>Individual Perfomance</Text>
                        <Text style={styles.companyName}>April 2018</Text>
                    </Body>
                </CardItem>
                <List>
                    {this.employees.map((individual)=> (
                        <ListItem key={individual.id}>
                            <Left style={{flex: 1, flexDirection: 'column', alignItems: 'center'}}>
                                <Image source={require('../assets/images/logo.png')} style={{height: 50, width: 50, flex: 1,resizeMode: 'contain'}}/>    
                                <Text style={{fontWeight:'bold',marginBottom:10}}>{individual.name}</Text>                                
                            </Left>
                            <Body>
                                
                                <CardItem>
                                    <Badge warning><Text style={{paddingTop:3}}>{individual.tp}</Text></Badge>
                                    <Text style={{color: '#636e72',paddingLeft: 10}}>Target pending</Text>
                                </CardItem>
                                <CardItem>
                                    <Badge success><Text style={{paddingTop:3}}>{individual.td}</Text></Badge>
                                    <Text style={{color: '#636e72',paddingLeft: 10}}>Target done</Text>
                                </CardItem>
                            </Body>
                            <Right>
                                <Text note>Good</Text>
                            </Right>
                        </ListItem>
                    ))}
                </List>
            </Card>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    employeesPerfomance:{
        fontWeight: 'bold',
        color: '#0984e3'
    },
    companyName:{
        color: '#636e72'
    }
});