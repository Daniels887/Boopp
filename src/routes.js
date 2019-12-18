import Home from './pages/Home.js';
import Books from './pages/Books.js';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Routes = createAppContainer(
  createStackNavigator({
    Home,
    Books,
  })
);

export default Routes;
