import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [],
  },
  getters: {},
  mutations: {
    ADD_TO_CART(state, dish) {
      state.cart.push(dish);
      console.log(state.cart);
    },
  },
  actions: {
    addToCart({ commit }, dish) {
      commit("ADD_TO_CART", dish);
    },
  },
  modules: {},
});
