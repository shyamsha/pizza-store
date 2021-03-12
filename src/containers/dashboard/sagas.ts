import { put, call, takeLatest, all, fork } from "redux-saga/effects";
import { Action } from "redux";
import * as Api from "../../services/Api";
import { unknownError } from "../../utils/api-helper";
import { PizzaActionTypes } from "./types";
import { pizzasError, pizzasSuccess } from "./actions";

type SagaAction<T> = Action & { payload: T };

function* pizzas() {
  try {
    const res = yield call(Api.getPizzas);
    if (res.error) {
      yield put(pizzasError(res.error));
    } else {
      yield put(pizzasSuccess(res.data));
    }
  } catch (err) {
    if (err instanceof Error) {
      yield put(pizzasError(err));
    } else {
      yield put(pizzasError(unknownError("An unknown error occurred")));
    }
  }
}

function* watchFetchRequest() {
  yield takeLatest(PizzaActionTypes.PIZZAS_REQUEST, pizzas);
}

export function* pizzasSaga() {
  yield all([fork(watchFetchRequest)]);
}
