export const handlerFulfilled = (state, action) => {
  state.items = action.payload;
  state.isLoading = false;
};

export const handlerPending = state => {
  state.isLoading = true;
};

export const handlerRejected = (state, action) => {
  state.isLoading = false;
  action.payload === 'canceled'
    ? (state.error = null)
    : (state.error = action.payload);
};
