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

class Mains extends React.Component {
  render() {
    return <MainTabNavigator />;
  }
}

const HomeStack = createStackNavigator({
  Settings: {
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
        ),
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="md-home" style={{ color: tintColor }} />;
        }
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
        ),
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="md-home" style={{ color: tintColor }} />;
        }
      };
    }
  }
});

const PersonStack = createStackNavigator({
  Person: {
    screen: Person,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Person",
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="person" style={{ color: tintColor }} />;
        }
      };
    }
  }
});

const RankStack = createStackNavigator({
  Rank: {
    screen: Rank,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Rank",
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        ),
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="person" style={{ color: tintColor }} />;
        }
      };
    }
  }
});

const PlanetStack = createBottomTabNavigator({
  Planet: {
    screen: Planet,
    navigationOptions: {
      tabBarIcon: ({ focused, tintColor }) => {
        const iconName = `ios-information-circle${focused ? "" : "-outline"}`;
        return <Icon name="person" style={{ color: tintColor }} />;
      }
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
    Rank: {
      screen: RankStack,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name="trophy" style={{ color: tintColor }} />;
        }
      }
    },
    Person: {
      screen: PersonStack,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name="person" style={{ color: tintColor }} />;
        }
      }
    },
    Planet: {
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
    },
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
//export default createAppContainer(MainTabNavigator);
