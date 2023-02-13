import { put, takeEvery, call } from "redux-saga/effects";
import { SagaIterator } from "@redux-saga/core";
import { ActionTypes } from "./constants";
import { fetchAll } from "helpers";
import { triggerApiError, triggerApiResponse } from "./actions";

function* alltriggers(params: any): SagaIterator {
  try {
    const response = yield call(fetchAll, {
      page: params.payload.data.page,
      limit: params.payload.data.limit,
      sortBy: params.payload.data.sortBy,
      sort: params.payload.data.sort,
    });
    const triggerData = yield response.data;
    yield put(triggerApiResponse(ActionTypes.FETCH_ALL_TRIGGER, triggerData));
  } catch (e: any) {
    yield put(triggerApiError(ActionTypes.FETCH_ALL_TRIGGER, e));
  }
}

function* watchTrigger() {
  yield takeEvery(ActionTypes.FETCH_ALL_TRIGGER, alltriggers);
}

export default watchTrigger;
