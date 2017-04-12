import firebase from 'firebase';
import { update } from '../utils/FirebaseRequest';

export function signInWithEmailAndPassword(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password)
    .then((user) => ({ user }))
    .catch((err) => ({ err }));
}

export function signUpWithEmailAndPassword(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      return { user, isCreate: true };
    })
    .catch((err) => ({ err }));
}

export function saveUserData(user, name = '', address = '') {
  const { uid, email } = user;

  return update(`/users/${uid}`, {
    uid,
    email,
    name,
    address
  });
}

export function signOut() {
  return firebase.auth().signOut();
}
