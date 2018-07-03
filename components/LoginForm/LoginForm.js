import React, { Component } from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {
    Container,
    Content,
    Body,
    Text,
    Form,
    Input,
    Label,
    Item,
    Button,
    Card,
    CardItem,
    Icon
} from 'native-base';
// import { icon } from 'react-native-elements';

export default class LoginForm extends Component{

    state = {
        email : 'example@gmail.com',
        password : 'example'
    }

    LogInNow(){
        if (this.state.email && this.state.password === true ){
            alert('login sukese');
        }else{
            alert('login gagal mase');
        }
    }

    render(){
        return(
            <Container style={{backgroundColor: '#ffffff'}}>
                <Content>
 
                    <CardItem>
                        <Image source={require('../../Images/index.jpeg')} style={styles.imageStyles} />
                    </CardItem>

                    <Form style={styles.lblform}>
                        <Label>Email</Label>
                        <Item regular style={styles.lblUser}>
                            <Input  onPress={(text) => this.setState({email: text})}
                            placeholder="Input Your Email" 
                            placeholderTextColor='#dfe6e9'
                            />
                        </Item>

                        <Label>Password</Label>
                        <Item regular style={styles.lblPass}>
                            <Input onPress={(text) => this.setState({password: text})}
                            secureTextEntry={true} 
                            placeholder="Input your password" 
                            placeholderTextColor='#dfe6e9' 
                            />
                        </Item>

                        <Button block style={styles.frmBtnLog} onPress={() => this.LogInNow()}>
                            <Text>Login</Text>
                        </Button>
                        
                        <Button transparent info block onPress={() => this.props.navigation.navigate('routeToSignUpForm')}>
                            <Text>Don't have account ? Register</Text>
                        </Button>

                    </Form>
                    
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    lblform: {
        padding: 30
    },
    lblUser: {
        paddingTop: 5
    },
    lblPass: {
        paddingTop: 5
    },
    frmBtnLog: {
        marginTop: 15,
        backgroundColor: '#74b9ff'
    },
    imageStyles: {
        marginTop: 20,
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        height: 150,
        resizeMode: 'contain',
        backgroundColor: '#ffffff'
    }
});