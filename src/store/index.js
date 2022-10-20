import { createStore } from "vuex";

export default createStore({
  state: {
    cart: [],
    cardCost: 0,
    cardQuantity: 0,
    userData: {},
    order: [],
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
      state.cardCost += dish.price;
      state.cardQuantity += 1;
    },
    DECREASE_DISH(state, dish) {
      if (dish.inCart > 0) {
        dish.inCart -= 1;
        state.cardCost -= dish.price;
        state.cardQuantity -= 1;
      } else {
        return;
      }
    },
    DELETE_DISH(state, dish) {
      const dishIndex = state.cart.indexOf(dish);
      if (dishIndex > -1) {
        state.cardCost -= dish.price * dish.inCart;
        state.cardQuantity -= dish.inCart;
        state.cart.splice(dishIndex, 1);
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
      commit("DELETE_DISH", dish);
    },
    decreaseDish({ commit }, dish) {
      if (dish.inCart > 0) {
        commit("DECREASE_DISH", dish);
      } else {
        commit("DELETE_DISH", dish);
      }
    },
    addUser({ commit }, userData) {
      commit("ADD_USER", userData);
    },
  },
  modules: {},
});
