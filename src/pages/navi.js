import React, { Component, PropTypes } from "react";
import { styleSheet, Text, View, TouchableOpacity, Image } from "react-native";

//style
import  naviStyle from '../style/navigationStyle'

class Navigation extends React.Component {
  static propTypes = {};

  render() {
    return (
      <View style={naviStyle.container}>
        <Image
          style={naviStyle.background}
          source={{ uri: "https://unsplash.it/800/600?image=102&blur" }}
        />
        <View style={naviStyle.container}>
          <Image
            style={{ width: 75, height: 75 }}
            source={require("../images/logo.png")}
          />
        </View>
        <View style={naviStyle.container}>
          <Text style={naviStyle.title}>LifeForFun</Text>
          <Text style={naviStyle.desc}>
            Just For Fun.Jt For klkFunsu For Fun.Just For Fun.
          </Text>
        </View>
        <View style={naviStyle.bottmContainer}>
          <TouchableOpacity
            style={[naviStyle.button, { backgroundColor: "#53423D" }]}
          >
            <Text
              onPress={() => this.props.navigation.navigate("LoginView")}
              style={naviStyle.buttonText}
            >
              LOG IN
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[naviStyle.button, { backgroundColor: "#A58987" }]}
          >
            <Text style={naviStyle.buttonText}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}


export default Navigation;
