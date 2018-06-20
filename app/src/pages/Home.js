import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

class Home extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text>Gerardo Perruci Home Page</Text>
        <Button
          onPress={() => navigate("NestedHome", { name: "NestedHome" })}
          title="NestedHomeTitle"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Home;
