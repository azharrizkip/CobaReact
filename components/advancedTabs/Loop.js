import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';

export default class Loop extends Component{
	schools = [
		{
			id: 1,
			name: 'SMK Telkom Purwokerto'
		},
		{
			id: 2,
			name: 'SMK Telkom Jakarta'
		},
		{
			id: 3,
			name: 'SMK Muhammadiyah Majenang'
		},
		{
			id: 4,
			name: 'SMK Telkom Malang'
		}
	]

	render(){
		return(
			{this.schools.map((school)=>(
				<View key={school.id}>
					<Text>{school.name}</Text>
				</View>
			))}
		)
	}
}