import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import firebase from 'firebase';

import LoginForm from './routes/LoginForm';
import Hello from './routes/HelloComponent';
import AsyncHello from './routes/AsyncHelloHelloComponent';


const RouterComponent = () => {
  return (
    <Router sceneStyle={{ paddingTop: 65 }}>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Login" />
      </Scene>

      <Scene key="main">
        <Scene
          onRight={() => firebase.auth().signOut()}
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

export default RouterComponent;
