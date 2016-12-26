import _ from 'lodash';

import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

const INITIAL_STATE = {};

export default {
  namespace: 'Initial',
  state: { ...INITIAL_STATE },
  reducers: {},
  effects: {},
  subscriptions: {
    initializeFirebase() {
      const config = {
        apiKey: 'AIzaSyAEelH-I86F41p0bGwwh_N8taUgEUe6CLY',
        authDomain: 'react-native-dva-starter.firebaseapp.com',
        databaseURL: 'https://react-native-dva-starter.firebaseio.com',
        storageBucket: 'react-native-dva-starter.appspot.com',
        messagingSenderId: '617618397661'
      };

      if (firebase.apps.length === 0) {
        firebase.initializeApp(config);
      }
    },
    monitorAuth() {
      _.delay(() => {
        firebase
          .auth()
          .onAuthStateChanged((user) => {
            checkUser(user);
          });
      }, 1500);
    }
  }
};

function checkUser(user) {
  if (user) {
    Actions.main({ type: 'reset' });
  } else {
    Actions.auth({ type: 'reset' });
  }
}
