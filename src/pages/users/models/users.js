import * as usersService from '../services/users';

export default {
  state: {
    list: [],
    total: null,
    page: null,
  },
  reducers: {
    save(state, { payload: { data: list, total, page } }) {
      return { ...state, list, total, page };
    },
  },
  effects: {
    *fetch({ payload: { page = 1 } }, { call, put }) {
      const { data, total } = yield call(usersService.fetch, { page });
      yield put({
        type: 'save',
        payload: {
          data,
          total: parseInt(total, 10),
          page: parseInt(page, 10),
        },
      });
    },
    *remove({ payload: id }, { call, put, select }) {
      yield call(usersService.remove, id);
      const page = yield select(state => state.users.page);
      yield put({ type: 'fetch', payload: { page } });
    },
    *patch({ payload: { id, values } }, { call, put, select }) {
      yield call(usersService.patch, id, values);
      const page = yield select(state => state.users.page);
      yield put({ type: 'fetch', payload: { page } });
    },
    *create({ payload: values }, { call, put, select }) {
      yield call(usersService.create, values);
      const page = yield select(state => state.users.page);
      yield put({ type: 'fetch', payload: { page } });
    },
  },
  subscriptions: {
    setup({dispatch, history}) {
      console.log(11111);
      return history.listen(({pathname, query}) => {
        if (pathname === '/users'|| pathname === '/dataTransfer') {
          dispatch({type: 'fetch', payload: query});
        }
      });
    },
  },
};
