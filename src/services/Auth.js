import firebase from 'firebase';

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

export function signOut() {
  return firebase.auth().signOut();
}
