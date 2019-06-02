import React from "react";
import { View } from "react-native";
import { Header, Text, Content, Icon, Container } from "native-base";

class HomeScreen extends React.Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => {
      return <Icon name="md-home" style={{ color: tintColor }} />;
    }
  };
  render() {
    return (
      <Container>
        <Content>
          <Text> This is HomeTab! !</Text>
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;
