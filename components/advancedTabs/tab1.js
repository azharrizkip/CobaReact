import React, { Component } from 'react';
import { ListView } from 'react-native';
import { Container, Header, Content, Button, Icon, List, ListItem, Text } from 'native-base';

const data = [
	'Azhar Rizki Pratama',
	'Daffa Pramudya',
	'Hafidz Joundy',
	'Aminudin',
    'Alfan',
    'Muhammad Isa',
    'Rehan',
    'Arif Rachman',
];
export default class Tab1 extends Component {
	constructor(props) {
    	super(props);
    	this.ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    	this.state = {
    	  basic: true,
    	  listViewData: data,
    	};
  	}
  	deleteRow(secId, rowId, rowMap) {
    	rowMap[`${secId}${rowId}`].props.closeRow();
    	const newData = [...this.state.listViewData];
    	newData.splice(rowId, 1);
    	this.setState({ listViewData: newData });
 	}
	render() {
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		return(
		<Container>
    	    <Content>
    	      <List
    	        dataSource={this.ds.cloneWithRows(this.state.listViewData)}
    	        renderRow={data =>
    	          <ListItem>
    	            <Text> {data} </Text>
    	          </ListItem>}
    	        renderLeftHiddenRow={data =>
    	          <Button full onPress={() => alert(data)}>
        	        <Icon active name="information-circle" />
            	  </Button>}
        	    renderRightHiddenRow={(data, secId, rowId, rowMap) =>
        	      <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
        	        <Icon active name="trash" />
        	      </Button>}
        	    leftOpenValue={75}
        	    rightOpenValue={-75}
        	  />
        	</Content>
    	  </Container>
		)
	}

}