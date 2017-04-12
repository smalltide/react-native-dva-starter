import {
  signUpWithEmailAndPassword,
  signInWithEmailAndPassword,
  saveUserData,
  signOut
} from '../services/Auth';

const INITIAL_STATE = {
  email: '',
  password: '',
  cpassword: '',
  name: '',
  address: '',
  user: null,
  error: '',
  loading: false
};

export default {
  namespace: 'Auth',
  state: { ...INITIAL_STATE },
  reducers: {
    showLoading(state) {
      return { ...state, loading: true, error: '' };
    },
    emailChanged(state, action) {
      return { ...state, email: action.payload };
    },
    passwordChanged(state, action) {
      return { ...state, password: action.payload };
    },
    cpasswordChanged(state, action) {
      return { ...state, cpassword: action.payload };
    },
    nameChanged(state, action) {
      return { ...state, name: action.payload };
    },
    addressChanged(state, action) {
      return { ...state, address: action.payload };
    },
    registerFail(state) {
      return { ...state, error: 'Register Failed.', loading: false };
    },
    loginSuccess(state, action) {
      return { ...state, ...INITIAL_STATE, user: action.payload };
    },
    loginFail(state) {
      return { ...state, error: 'Authentication Failed.', loading: false };
    }
  },
  effects: {
    * registerUser({ payload }, { call, put }) {
      yield put({ type: 'showLoading' });

      const { email, password, name, address } = payload;
      const { isCreate } = yield call(signUpWithEmailAndPassword, email, password);

      if (isCreate) {
        const { user, err } = yield call(signInWithEmailAndPassword, email, password);
        if (user) {
          yield call(saveUserData, user, name, address);
          yield put({ type: 'loginSuccess', payload: user });
        } else if (err) {
          yield put({ type: 'loginFail' });
        }
      } else {
        yield put({ type: 'registerFail' });
      }
    },
    * loginUser({ payload }, { call, put }) {
      yield put({ type: 'showLoading' });

      const { email, password } = payload;
      const { user, err } = yield call(signInWithEmailAndPassword, email, password);

      if (user) {
        yield put({ type: 'loginSuccess', payload: user });
      } else if (err) {
        yield put({ type: 'loginFail' });
      }
    },
    * logoutUser({ payload }, { call }) {
      yield call(signOut);
    }
  },
  subscriptions: {}
};
