import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import {
    Container,
    Header,
    Body,
    Content,
    Text,
    Right,
    Left,
    Icon,
    Footer,
    Thumbnail,
    FooterTab,
    Button,
    Card,
    CardItem
} from 'native-base';

export default class ReportForm extends Component{
    render(){
        return(
            <Container>

                {/* Content Pembuka */}
                <Content style={{padding: 20, paddingTop:-100}}>

                    {/* Waktu / Tanggal task yang sudah selesai */}
                    <Text style={styles.dateTime}>Date/Time</Text>

                    {/* Card Pembuka */}
                    <Card>
                        <View>
                            <CardItem>
                                <Text>Date, Time</Text>
                            </CardItem>
                            <CardItem header>
                                  <Text>Bug Solving...</Text>
                            </CardItem>
                            <Right>
                                <View>
                                    <Icon style={styles.iconYellow} name="md-alert"/>
                                </View>
                            </Right>
                        </View>
                    </Card>
                    {/* Card penutup */}

                    {/* Card pembuka */}
                    <Card >
                        <CardItem>
                            <Text >Date, Time</Text>
                        </CardItem>
                        <CardItem header>
                            <Text>Bug Solving 2...</Text>
                        </CardItem>
                        <Right>
                            <View>
                                <Icon style={styles.iconGreen} name="ios-checkmark-circle"/>
                            </View>
                        </Right>
                    </Card>
                    {/* card penutup */}

                    {/* Waktu atau tanggal task yang sudah selesai */}
                    <Text style={styles.dateTime}>Date/Time</Text>

                    {/* card pembuka */}
                    <Card>
                        <CardItem>
                            <Text>Date, Time</Text>
                        </CardItem>
                        <CardItem header>
                            <Text>Bug Solving 3...</Text>
                        </CardItem>
                        <Right>
                            <View>
                                <Icon style={styles.iconGreen} name="ios-checkmark-circle"/>
                            </View>
                        </Right>
                    </Card>
                    {/* card penutup */}

                    {/* Card pembuka */}
                    <Card>
                        <CardItem>
                            <Text>Date, Time</Text>
                        </CardItem>
                        <CardItem header>
                            <Text>Bug Solving 4...</Text>
                        </CardItem>
                        <Right>
                            <View>
                                <Icon style={styles.iconGreen} name="ios-checkmark-circle"/>
                            </View>
                        </Right>
                    </Card>
                    {/* Card penutup */}

                </Content>
                {/* Content Penutup */}

                
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
        marginLeft:120
    },
})