import React from "react";
import { View } from "react-native";
import { Container, Text, Content, Icon } from "native-base";

class Person extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="person" style={{ color: tintColor }} />;
    }
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Profile</Text>
      </View>
    );
  }
}

export default Person;
