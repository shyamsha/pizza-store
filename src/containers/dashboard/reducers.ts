import { PizzasState, PizzaActionTypes } from "./types";
import { Reducer } from "redux";

const initialState: PizzasState = {
  loading: false,
  pizzas: null,
  errors: {
    pizzas: undefined,
  },
};

type A<T = string, U = any> = { type: T; payload: U };

const reducer: Reducer<PizzasState, A> = (
  state: PizzasState = initialState,
  action: A
) => {
  switch (action.type) {
    case PizzaActionTypes.PIZZAS_REQUEST:
      return {
        ...state,
        loading: true,
        errors: { ...state.errors, pizzas: undefined },
      };
    case PizzaActionTypes.PIZZAS_SUCCESS:
      return { ...state, loading: false, pizzas: action.payload };
    case PizzaActionTypes.PIZZAS_ERROR:
      return {
        ...state,
        loading: false,
        errors: { ...state.errors, pizzas: action.payload },
      };
    
    default:
      return state;
  }
};

export { initialState as pizzasInitialState, reducer as pizzasReducer };
