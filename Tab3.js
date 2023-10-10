import React, { Component } from "react";
import { View, Text } from "react-native";
import { WebView } from "react-native-webview";

export default class Tab3 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <WebView source={{ uri: "http://google.com" }} />
      </View>
    );
  }
}
