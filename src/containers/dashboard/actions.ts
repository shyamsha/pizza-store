import { PizzaActionTypes, Pizzas } from "./types";
import { action } from "typesafe-actions";

export const pizzasRequest = () => 
action(PizzaActionTypes.PIZZAS_REQUEST);
export const pizzasSuccess = (res: Pizzas[]) =>
action(PizzaActionTypes.PIZZAS_SUCCESS, res);
export const pizzasError = (message: Error) =>
action(PizzaActionTypes.PIZZAS_ERROR, message);