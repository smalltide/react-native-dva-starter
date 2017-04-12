import React from 'react';
import { connect } from 'dva/mobile';
import { Scene, Router } from 'react-native-router-flux';
import { Navigator } from 'react-native';

import Splash from './components/Splash';

import RegisterForm from './routes/RegisterForm';
import LoginForm from './routes/LoginForm';
import Hello from './routes/HelloComponent';
import AsyncHello from './routes/AsyncHelloHelloComponent';

const RouterComponent = ({ dispatch }) => {
  function onLogout() {
    dispatch({ type: 'Auth/logoutUser' });
  }

  return (
    <Router sceneStyle={{ paddingTop: Navigator.NavigationBar.Styles.General.TotalNavHeight }}>

      <Scene
        key="splash"
        hideNavBar
        passProps
        splashText="Hello Splash"
        component={Splash}
      />

      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Login" />
        <Scene key="register" component={RegisterForm} title="Register" />
      </Scene>

      <Scene key="main">
        <Scene
          initial
          onRight={onLogout}
          rightTitle="Logout"
          key="hello"
          component={Hello}
          title="Hello"
        />

        <Scene
          key="asyncHello"
          component={AsyncHello}
          title="AsyncHello"
        />
      </Scene>
    </Router>
  );
};

export default connect()(RouterComponent);
