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
        apiKey: 'AIzaSyASDo8VyrO5wCB0_LseaIxeRK931jf-lMQ',
        authDomain: 'react-native-manager-4c69f.firebaseapp.com',
        databaseURL: 'https://react-native-manager-4c69f.firebaseio.com',
        storageBucket: 'react-native-manager-4c69f.appspot.com',
        messagingSenderId: '881318924131'
      };
      firebase.initializeApp(config);
    },
    monitorAuth() {
      _.delay(() => {
        firebase
          .auth()
          .onAuthStateChanged((user) => {
            checkUser(user);
          });
      }, 500);
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
