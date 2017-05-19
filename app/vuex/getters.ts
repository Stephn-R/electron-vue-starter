// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import {GetterTree} from 'vuex';

// ────────────────────────────────────────────────────────────────────────────────

export function homeMessage(state) { return state.Home.message; }

// ────────────────────────────────────────────────────────────────────────────────

export default <GetterTree<{}, any>> {
  homeMessage
};
