import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  NavigatorIOS,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from "react-native";

class MyScene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    navigator: PropTypes.object.isRequired
  };

  _onForward = () => {
    this.props.navigator.push({
      title: "Scene " + nextIndex
    });
  };

  render() {
    return (
      <View>
        <Text>Current Scene: {this.props.title}</Text>
        <TouchableHighlight onPress={this._onForward}>
          <Text>Tap me to load the next scene</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NavigatorIOS
          initialRoute={{
            component: MyScene,
            title: "My Initial Scene"
          }}
          style={{ flex: 1 }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
