import React from 'react';
import { Text, Alert } from 'react-native';
import { connect } from 'dva/mobile';
import {
  WhiteSpace,
  WingBlank,
  InputItem,
  Button,
  ActivityIndicator,
  List
} from 'antd-mobile';

function RegisterForm({ email, password, cpassword, name, address, error, loading, dispatch }) {
  function onEmailChange(text) {
    dispatch({
      type: 'Auth/emailChanged',
      payload: text
    });
  }

  function onPasswordChange(text) {
    dispatch({
      type: 'Auth/passwordChanged',
      payload: text
    });
  }

  function onCPasswordChange(text) {
    dispatch({
      type: 'Auth/cpasswordChanged',
      payload: text
    });
  }

  function onNameChange(text) {
    dispatch({
      type: 'Auth/nameChanged',
      payload: text
    });
  }

  function onAddressChange(text) {
    dispatch({
      type: 'Auth/addressChanged',
      payload: text
    });
  }

  function onRegister() {
    if (password !== cpassword) {
      Alert.alert(
        'Warning',
        'Two Passwords Are Different',
        [
          { text: 'OK', onPress: () => {} },
        ],
        { cancelable: false }
      );

      return;
    }

    dispatch({
      type: 'Auth/registerUser',
      payload: { email, password, name, address }
    });
  }

  function renderButton() {
    if (loading) {
      return <ActivityIndicator size="large" />;
    }

    return (
      <Button type="primary" onClick={onRegister}>
        Sign Up
      </Button>
    );
  }

  return (
    <List>
      <InputItem
        clear
        value={email}
        onChange={onEmailChange}
        placeholder="email.gmail.com"
        labelNumber={5}
      >
        Email
      </InputItem>

      <InputItem
        clear
        type="password"
        value={password}
        onChange={onPasswordChange}
        placeholder="password"
        labelNumber={5}
      >
        Password
      </InputItem>

      <InputItem
        clear
        type="password"
        value={cpassword}
        onChange={onCPasswordChange}
        placeholder="password again"
        labelNumber={5}
      >
        Password
      </InputItem>

      <InputItem
        clear
        value={name}
        onChange={onNameChange}
        placeholder="name"
        labelNumber={5}
      >
        Name
      </InputItem>

      <InputItem
        clear
        value={address}
        onChange={onAddressChange}
        placeholder="address"
        labelNumber={5}
      >
        Address
      </InputItem>

      <WingBlank>
        <Text style={styles.errorTextStyle}>
          {error}
        </Text>

        {renderButton()}
        <WhiteSpace />
      </WingBlank>
    </List>
  );
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ Auth }) => {
  const { email, password, cpassword, name, address, error, loading } = Auth;

  return { email, password, cpassword, name, address, error, loading };
};

export default connect(mapStateToProps)(RegisterForm);
