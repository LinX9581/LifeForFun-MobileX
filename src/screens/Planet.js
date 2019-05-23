import React from 'react';
import { View } from 'react-native';
import { Container, Text, Content, Icon } from "native-base";

class Planet extends React.Component {
    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => {
          return <Icon name="planet" style={{ color: tintColor }} />;
        }
      };
    
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Camera!</Text>
        </View>
      );
    }
  }

export default Planet;