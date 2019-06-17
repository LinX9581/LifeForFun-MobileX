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
import Hometab from "./screens/Hometab";
import Camera from "./screens/Camera";
import Rank from "./screens/Rank";
import Planet from "./screens/Planet";
import Person from "./screens/Person";
// import Menu from "./scr";

import { Loader } from "./component/Loader";
import { test } from "./component/test";
import { AppLoading } from "expo";

class Mains extends React.Component {
  // state = {
  //   loaded: false
  // };
  // constructor() {
  //   super();
  //   test.load(v => this.setState({ loaded: true }));
  // }
  render() {
    // return this.state.loaded ? <MainTabNavigator /> : <Text>loading...</Text>;
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return <MainTabNavigator />;
  }
}

const HomeStack = createStackNavigator({
  Hometab: {
    screen: Hometab,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Hometab !",
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
});

const CameraStack = createStackNavigator({
  Camera: {
    screen: Camera,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Camera",
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
});

const PersonStack = createStackNavigator({
  Profile: {
    screen: Person,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Profile",
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
});

const RankStack = createStackNavigator({
  Chat: {
    screen: Rank,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Chat",
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
});

const PlanetStack = createStackNavigator({
  Chat: {
    screen: Planet,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Chat",
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
});

const MainTabNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name="md-home" style={{ color: tintColor }} />;
        }
      }
    },
    Chat: {
      screen: RankStack,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name="md-chatboxes" style={{ color: tintColor }} />;
        }
      }
    },
    Profile: {
      screen: PersonStack,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name="person" style={{ color: tintColor }} />;
        }
      }
    },
    Achievement: {
      screen: PlanetStack,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name="planet" style={{ color: tintColor }} />;
        }
      }
    },
    Camera: {
      screen: CameraStack,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name="md-camera" style={{ color: tintColor }} />;
        }
      }
    }
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        header: null,
        headerTitle: routeName
      };
    }
  }
);

const MainStackNavigator = createStackNavigator(
  {
    MainTabNavigator: MainTabNavigator
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

const AppDrawerNavigator = createDrawerNavigator({
  Menu: {
    screen: MainStackNavigator
  }
});

const Main = createAppContainer(AppDrawerNavigator);
export default Main;
