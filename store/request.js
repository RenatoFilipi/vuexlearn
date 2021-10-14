export const state = () => ({
  update: 0
});

export const getters = {
  new: state => state.request
};

export const mutations = {
  update(state) {
    state.update += 1;
  }
};

export const actions = {
  update(context) {
    context.commit("update");
  }
};
