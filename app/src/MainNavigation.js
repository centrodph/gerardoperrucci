import { createBottomTabNavigator, createStackNavigator } from 'react-navigation';
import Home from './pages/Home';
import NestedHome from './pages/NestedHome';
import About from './pages/About';

export default createBottomTabNavigator(
  {
    Main: {
      screen: createStackNavigator({
        Home: {
          screen: Home,
        },
        NestedHome: {
          screen: NestedHome,
        },
      }),
    },
    About: {
      screen: About,
    },
  },
  {
    initialRouteName: 'Main',
  },
);
