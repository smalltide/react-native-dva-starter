import React from 'react';
import { connect } from 'dva/mobile';
import { Scene, Router } from 'react-native-router-flux';

import LoginForm from './routes/LoginForm';
import Hello from './routes/HelloComponent';
import AsyncHello from './routes/AsyncHelloHelloComponent';

const RouterComponent = ({ dispatch }) => {
  function onLogout() {
    dispatch({ type: 'Auth/logoutUser' });
  }

  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Login" />
      </Scene>

      <Scene key="main">
        <Scene
          onRight={onLogout}
          rightTitle="Logout"
          key="hello"
          component={Hello}
          title="Hello"
          initial
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
