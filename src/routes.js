import Home from './pages/Home.js';
import Books from './pages/Books.js';
import Description from './pages/Description.js';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Routes = createAppContainer(
  createStackNavigator({
    Home: {
      screen: Home,
      navigationOptions: {
        header: null
      },
    },
    Books: {
      screen: Books,
      navigationOptions: ({ navigation }) => {
        const title = navigation.state.params.book || 'Books'
        return ({
          title,
        })
      }
    },
    Description: {
      screen: Description,
      navigationOptions: ({ navigation }) => {
        const title = navigation.state.params.item.volumeInfo.title || 'Books'
        return ({
          title,
        })
      }
    },
  },
  { 
    defaultNavigationOptions: {
      headerTintColor: '#ddd',
      headerStyle: {
        backgroundColor: "#6200EE"
      }
    },
    headerLayoutPreset: 'center'
  })
);

export default Routes;
