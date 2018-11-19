import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellowgreen',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class About extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>My page about</Text>
      </View>
    );
  }
}

export default About;
