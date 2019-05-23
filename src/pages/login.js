import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert
} from "react-native";

import LoginStyle from "../style/loginStyle";

class LoginView extends Component {
  constructor(props) {
    super(props);
    state = {
      email: "",
      password: ""
    };
  }

  onClickListener = viewId => {
    Alert.alert("Alert", "Button pressed " + viewId);
  };

  render() {
    return (
      <View style={LoginStyle.container}>
        <View style={LoginStyle.inputContainer}>
          <Image
            style={LoginStyle.inputIcon}
            source={{
              uri: "https://png.icons8.com/message/ultraviolet/50/3498db"
            }}
          />
          <TextInput
            style={LoginStyle.inputs}
            placeholder="Email"
            keyboardType="email-address"
            underlineColorAndroid="transparent"
            onChangeText={email => this.setState({ email })}
          />
        </View>

        <View style={LoginStyle.inputContainer}>
          <Image
            style={LoginStyle.inputIcon}
            source={{
              uri: "https://png.icons8.com/key-2/ultraviolet/50/3498db"
            }}
          />
          <TextInput
            style={LoginStyle.inputs}
            placeholder="Password"
            secureTextEntry={true}
            underlineColorAndroid="transparent"
            onChangeText={password => this.setState({ password })}
          />
        </View>

        <TouchableHighlight
          style={[LoginStyle.buttonContainer, LoginStyle.loginButton]}
          onPress={() => this.props.navigation.navigate("Main")}
        >
          <Text style={LoginStyle.loginText}>Login</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={LoginStyle.buttonContainer}
          onPress={() => this.onClickListener("restore_password")}
        >
          <Text>Forgot your passwords?</Text>
        </TouchableHighlight>

        <TouchableHighlight
          style={LoginStyle.buttonContainer}
          onPress={() => this.onClickListener("register")}
        >
          <Text>Register</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default LoginView;
