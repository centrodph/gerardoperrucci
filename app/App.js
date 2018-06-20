import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MainNavigation from "./src/MainNavigation";

export default class App extends React.Component {
  render() {
    return <MainNavigation />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
