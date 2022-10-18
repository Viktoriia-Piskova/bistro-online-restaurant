import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [],
    cardCost: 0,
    cardQuantity: 0,
    userData: {},
  },
  getters: {},
  mutations: {
    ADD_TO_CART(state, dish) {
      console.log(dish);
      if (dish.inCart == undefined) {
        dish.inCart = 1;
        state.cart.push(dish);
      } else {
        dish.inCart += 1;
      }
      state.cardCost += dish.price * dish.inCart;
      state.cardQuantity += 1;
    },
    DECREASE_DISH(state, dish) {
      if (dish.inCart > 0) {
        dish.inCart -= 1;
        state.cardCost -= dish.price * dish.inCart;
        state.cardQuantity -= 1;
      } else {
        dish = false;
      }
    },
    ADD_USER(state, userData) {
      state.userData = { ...userData };
      console.log(state.userData);
    },
  },
  actions: {
    addToCart({ commit }, dish) {
      commit("ADD_TO_CART", dish);
    },
    deleteFromCart({ commit }, dish) {
      commit("ADD_TO_CART", dish);
    },
    decreaseDish({ commit }, dish) {
      commit("DECREASE_DISH", dish);
    },
    addUser({ commit }, userData) {
      commit("ADD_USER", userData);
    },
  },
  modules: {},
});
