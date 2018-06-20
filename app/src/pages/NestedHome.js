import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class NestedHome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>NestedHome</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default NestedHome;
