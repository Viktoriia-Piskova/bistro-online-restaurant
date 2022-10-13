import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [],
    cardCost: 0,
    cardQuantity: 0,
  },
  getters: {},
  mutations: {
    ADD_TO_CART(state, dish) {
      if (dish.inCart == undefined) {
        dish.inCart = 1;
        state.cart.push(dish);
      } else {
        dish.inCart += 1;
      }
      state.cardCost += dish.price * dish.inCart;
      state.cardQuantity += 1;
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
