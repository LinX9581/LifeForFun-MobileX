import React from "react";
import { View } from "react-native";
import { Container, Text, Content, Icon } from "native-base";

class Camera extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="md-camera" style={{ color: tintColor }} />;
    }
  };

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Menu!</Text>
      </View>
    );
  }
}

export default Camera;
