export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.UserId;
    state.tokenExpiration = payload.tokenExpiration;
  },
};
