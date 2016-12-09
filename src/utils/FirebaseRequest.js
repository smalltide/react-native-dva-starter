import firebase from 'firebase';

export function create(nodePath, object) {
  return firebase.database().ref(nodePath)
    .push(object)
    .then((data) => ({ data }))
    .catch((err) => ({ err }));
}

export function fetch(nodePath) {
  return firebase.database().ref(nodePath)
    .once('value')
    .then((snapshot) => ({ data: snapshot.val() }))
    .catch((err) => ({ err }));
}

export function set(nodePath, object) {
  return firebase.database().ref(nodePath)
    .set(object)
    .then((data) => ({ data }))
    .catch((err) => ({ err }));
}

export function update(nodePath, object) {
  return firebase.database().ref(nodePath)
    .update(object)
    .then((data) => ({ data }))
    .catch((err) => ({ err }));
}

export function remove(nodePath) {
  return firebase.database().ref(nodePath)
    .remove()
    .then((data) => ({ data }))
    .catch((err) => ({ err }));
}

export function watchNode(nodePath, callback) {
  const ref = firebase.database().ref(nodePath);

  const handler = (snapshot) => {
    callback(snapshot.val());
  };

  ref.on('value', handler);

  return () => {
    ref.off('value', handler);
  };
}
