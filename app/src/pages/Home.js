import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { StyleSheet, Text, View, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Home extends Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    onRequestDog: PropTypes.func.isRequired,
    mess: PropTypes.array,
  };

  navigateOtherNestedRoute = () => {
    const { navigate } = this.props.navigation;
    navigate('NestedHome', { name: 'NestedHome' });
  };

  testSaga = () => {
    this.props.onRequestDog();
  };

  renderList = () => {
    const { mess } = this.props;
    return mess.map((m, i) => <Text key={i}>{m.working}</Text>);
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Gerardo Perruci Home Page</Text>
        {this.renderList()}
        <Button onPress={this.testSaga} title="Test Saga" />
        <Button onPress={this.navigateOtherNestedRoute} title="Go To Next" />
      </View>
    );
  }
}

const mapStateToProps = ({ home: { mess } }) => ({
  mess,
});

const mapDispatchToProps = dispatch => ({
  onRequestDog: () => dispatch({ type: 'USER_FETCH_REQUESTED' }),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
