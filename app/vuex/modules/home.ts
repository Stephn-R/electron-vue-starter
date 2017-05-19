import * as types from '../constants';

const state = {
  message: '',
};

const mutations = {
  [types.SAY_HELLO]: state => {
    state.message = 'Hello World!';
  },
};

export default {
  state,
  mutations,
};
