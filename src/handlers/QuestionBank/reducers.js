export const setInteraction = (state, action) => {
  if (!state.interactions[action.id]) {
    state.interactions[action.id] = {};
  }

  state.interactions[action.id][action.key] = action.value;

  return { ...state };
};
