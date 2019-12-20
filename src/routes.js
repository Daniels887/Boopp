import Home from './pages/Home.js';
import Books from './pages/Books.js';
import book from './assets/book.png';

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
          headerTintColor: '#ddd',
          headerStyle: {
            backgroundColor: "#6200EE"
          }
        })
      }
    }
  }, { headerLayoutPreset: 'center'})
);

export default Routes;
