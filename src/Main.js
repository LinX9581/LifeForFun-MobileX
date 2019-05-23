import React from "react";
import { View } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createDrawerNavigator,
  createStackNavigator
} from "react-navigation";
import { Header, Text, Content, Icon, Container } from "native-base";

//components
import HomeScreen from "./screens/Hometab";
import Camera from "./screens/Camera";
import Rank from "./screens/Rank";
import Planet from "./screens/Planet";
import Person from "./screens/Person";
// import Menu from "./scr";

class Mains extends React.Component {
  render() {
    return <MainTabNavigator />;
  }
}



const MainTabNavigator = createBottomTabNavigator({
  Home: { screen: HomeScreen },
  Camera: { screen: Camera },
  Rank: { screen: Rank },
  Planet: { screen: Planet },
  Person: { screen: Person }
});

const AppDrawerNavigator = createDrawerNavigator({
  Menu: {
    screen: MainTabNavigator
  }
});

const MainStackNavigator = createStackNavigator(
  {
    MainTabNavigator: MainTabNavigator,
    AppDrawerNavigator: AppDrawerNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        )
      };
    }
  }
);
const Main = createAppContainer(MainStackNavigator);
export default Main;
//export default createAppContainer(MainTabNavigator);
