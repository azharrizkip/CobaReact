import React, { Component } from 'react';
import { Image,StyleSheet } from 'react-native';
import { 
    Card, 
    CardItem, 
    Left,
    Body,
    Right,
    Text, 
    Button, 
    Badge
} from 'native-base';

export default class Employees extends Component{

    state = {
        nameCompany: '',
        date: '',
        ttp: 0,
        ttd: 0
    }

    componentDidMount(){
        this.setState({
            nameCompany: 'Treport',
            date: 'April 2018',
            ttp: 36,
            ttd: 40
        })
    }

    render(){
        return(
            <Card>
                <CardItem>
                    <Body style={styles.container}>
                        <Text style={styles.employeesPerfomance}>Employees Perfomance</Text>
                        <Text style={styles.companyName}>{this.state.nameCompany} - {this.state.date}</Text>
                    </Body>
                </CardItem>
                <CardItem cardBody>
                    <Image source={require('../assets/images/logo.png')} style={{height: 200, width: null, flex: 1,resizeMode: 'contain'}}/>
                </CardItem>
                <CardItem>
                    <Badge warning><Text style={{paddingTop:3}}>{this.state.ttp}</Text></Badge>
                    <Text style={{color: '#636e72',paddingLeft: 10}}>Target pending</Text>
                </CardItem>
                <CardItem>
                    <Badge success><Text style={{paddingTop:3}}>{this.state.ttd}</Text></Badge>
                    <Text style={{color: '#636e72',paddingLeft: 10}}>Target done</Text>
                </CardItem>
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