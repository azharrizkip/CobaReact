import React from 'react';
import { StackNavigator } from 'react-navigation';
import { Button, Text } from 'native-base';

import ExampleMain from './components/example_main/Main';
import ExampleNativeBase from './components/example_native_base/Main';
import ExampleLifecycle from './components/example_lifecycle/Main';
import ExampleFetchApi from './components/example_fetch_api/Main'
import ExampleFetchApiCreate from './components/example_fetch_api/Create'
import ExampleFetchApiUpdate from './components/example_fetch_api/Update'
import ExampleFetchTrello from './components/example_fetch_trello/Main'
import ExampleFetchTrelloOrg from './components/example_fetch_trello/Organization'
import ExampleFetchTrelloDash from './components/example_fetch_trello/Dashboard'
import ExampleFetchTrelloRep from './components/example_fetch_trello/Report'
import ExampleFetchTrelloExam from './components/example_fetch_trello/Example'
import ExampleFetchTrelloOrgMember from './components/example_fetch_trello/OrgMember'
import ExampleFetchTrelloCard from './components/example_fetch_trello/Card'
import ExampleFetchTrelloProfile from './components/example_fetch_trello/Profile'
import ExampleFetchTrelloRepDet from './components/example_fetch_trello/ReportDetail'
import ExampleFetchTrelloEditReport from './components/example_fetch_trello/EditReport'

const App = StackNavigator({
  RouteMain: {
    screen: ExampleMain,
    navigationOptions: {
      title: 'DumbWays Batch 2'
    }
  },
  RouteFetchApi: {
    screen: ExampleFetchApi,
    navigationOptions: {
      title: 'Example Fetch Api'
    }
  },
  RouteFetchTrello: {
    screen: ExampleFetchTrello,
    navigationOptions: {
      title: 'Example Fetch Trello'
    }
  },
  RouteFetchTrelloOrg: {
    screen: ExampleFetchTrelloOrg,
    navigationOptions: {
      title: 'Example Fetch Trello',
      header: null
    }
  },
  RouteFetchTrelloDash: {
    screen: ExampleFetchTrelloDash,
    navigationOptions: {
      title: 'Board List',
      headerStyle: {
        backgroundColor: '#3F51B5'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
    }
  },
  RouteFetchTrelloRepDet: {
    screen: ExampleFetchTrelloRepDet,
    navigationOptions: {
      header: null
    }
  },
  RouteFetchTrelloEditReport: {
    screen: ExampleFetchTrelloEditReport,
    navigationOptions: {
      header: null
    }
  },
  RouteFetchTrelloCard: {
    screen: ExampleFetchTrelloCard,
    navigationOptions: {
      header: null
    }
  },
  RouteFetchTrelloExam: {
    screen: ExampleFetchTrelloExam,
    navigationOptions: {
      header: null
    }
  },
  RouteFetchTrelloRep: {
    screen: ExampleFetchTrelloRep,
    navigationOptions: {
      header: null
    }
  },
  RouteFetchTrelloOrgMember: {
    screen: ExampleFetchTrelloOrgMember,
    navigationOptions: {
      header: null
    }
  },
  RouteFetchTrelloProfile: {
    screen: ExampleFetchTrelloProfile,
    navigationOptions: {
      header: null
    }
  },
  RouteFetchApiCreate: {
    screen: ExampleFetchApiCreate,
    navigationOptions: {
      title: 'Example Fetch Api Create'
    }
  },
  RouteFetchApiUpdate: {
    screen: ExampleFetchApiUpdate,
    navigationOptions: {
      title: 'Example Fetch Api Update'
    }
  },
  RouteNativeBase: {
    screen: ExampleNativeBase,
    navigationOptions: {
      title: 'Example Native Base'
    }
  },
  RouteLifecycle: {
    screen: ExampleLifecycle,
    navigationOptions: {
      title: 'Example Lifecycle',
      headerRight: (
        <Button primary>
          <Text>More</Text>
        </Button>
      )
    }
  }
}, {
  initialRouteName: 'RouteFetchApi'
});

export default App;
