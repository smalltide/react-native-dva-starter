import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'dva/mobile';

class AsyncHelloComponent extends Component {
  render() {
    return (
      <View>
        <Text>
          {this.props.asyncMessage}
        </Text>
      </View>
    );
  }
}

const mapStateToProps = ({ Hello }) => {
  const { asyncMessage } = Hello;
  return { asyncMessage };
};

export default connect(mapStateToProps)(AsyncHelloComponent);
