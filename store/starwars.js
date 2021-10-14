export const state = () => ({
  name: ""
});

export const getters = {
  charName: state => state.name
};

export const mutations = {
  update(state, name) {
    state.name = name;
  }
};

export const actions = {
  update(context, payload) {
    context.commit("update", payload.name);
  }
};
