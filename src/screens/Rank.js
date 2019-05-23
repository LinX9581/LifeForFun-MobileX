import React from "react";
import { View } from "react-native";
import { Container, Text, Content, Icon } from "native-base";

class Rank extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="trophy" style={{ color: tintColor }} />;
    }
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Rank!</Text>
      </View>
    );
  }
}

export default Rank;
