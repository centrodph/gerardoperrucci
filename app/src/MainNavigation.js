import { createBottomTabNavigator, StackNavigator } from "react-navigation";
import Home from "./pages/Home";
import NestedHome from "./pages/NestedHome";
import About from "./pages/About";

export default createBottomTabNavigator(
  {
    Main: {
      screen: StackNavigator({
        Home: {
          screen: Home
        },
        NestedHome: {
          screen: NestedHome
        }
      })
    },
    About: {
      screen: About
    }
  },
  {
    initialRouteName: "Main"
  }
);
