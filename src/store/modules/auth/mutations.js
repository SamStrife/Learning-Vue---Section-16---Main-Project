export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.UserId;
    state.didLogout = false;
  },
  didLogout(state) {
    state.didLogout = true;
  },
};
