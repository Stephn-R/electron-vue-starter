// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import {ActionContext, ActionTree} from 'vuex';
import * as types from './constants';

// ────────────────────────────────────────────────────────────────────────────────

export const sayHello = ({ commit }) => {
  commit(types.SAY_HELLO);
};

// ────────────────────────────────────────────────────────────────────────────────

export default <ActionTree<{}, any>> {
  sayHello
};
