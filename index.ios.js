import React from 'react';
import { AppRegistry } from 'react-native';
import dva from 'dva/mobile';

import Auth from './src/models/Auth';
import Hello from './src/models/Hello';
import Router from './src/Router';

const app = dva();
app.model(Auth);
app.model(Hello);


app.router(() => <Router />);

AppRegistry.registerComponent('app_starter', () => app.start());
