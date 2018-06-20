import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>About me page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellowgreen",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default About;
