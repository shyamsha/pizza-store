export interface Item {
  size: string;
}

export interface Size {
  isRadio: boolean;
  title: string;
  items: Item[];
}

export interface Item2 {
  name: string;
}

export interface Topping {
  isRadio: boolean;
  title: string;
  items: Item2[];
}

export interface Pizzas {
  id: number;
  name: string;
  description: string;
  isVeg: boolean;
  rating: number;
  price: any;
  img_url: string;
  size: Size[];
  toppings: Topping[];
}

export enum PizzaActionTypes {
  PIZZAS_REQUEST = "@@pizzas/feed/PIZZAS_REQUEST",
  PIZZAS_SUCCESS = "@@pizzas/feed/PIZZAS_SUCCESS",
  PIZZAS_ERROR = "@@pizzas/feed/PIZZAS_ERROR",
}

export interface PizzasState {
  readonly loading: boolean;
  readonly pizzas: Pizzas[] | null;
  readonly errors: {
    pizzas?: string;
  };
}
