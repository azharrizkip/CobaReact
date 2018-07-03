import React, { Component } from 'react';
import { Container, Header, Tab, Tabs, TabHeading, Text, Vab, View, Content } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';

import Tab1 from './tab1';
import Tab2 from './tab2';
import Tab3 from './tab3';
import Fab from './fab';

export default class AdvancedTabs extends Component {

	render() {
		return(
			<Container>
				<Tabs locked={true}>
        			<Tab heading={ <TabHeading><Icon.Button name="home" backgroundColor="#3F51B5">Dashbpard</Icon.Button></TabHeading> }>
                    <Tab2 />
        			</Tab>
        			<Tab heading={ <TabHeading><Icon.Button name="phone" backgroundColor="#3F51B5">Contact</Icon.Button></TabHeading> }>
         		  		<Content>
                    <Tab1 />
                  </Content>
                    <Fab />
        			</Tab>
        			<Tab heading={ <TabHeading><Icon.Button name="history" backgroundColor="#3F51B5">History</Icon.Button></TabHeading> }>
          			 	<Content>
                    <Tab3 />
                  </Content>
          		</Tab>
        		</Tabs>
			</Container>
		)
  }

}