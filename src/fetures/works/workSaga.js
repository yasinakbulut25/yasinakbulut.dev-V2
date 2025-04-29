import { call, put, takeLatest } from "redux-saga/effects";
import { fetchData } from "../../api/api";
import { fetchWorksRequest, fetchWorksSuccess, fetchWorksFailure } from "./workSlice";

function* fetchWorksWorker() {
  try {
    const works = yield call(fetchData, "/works");
    yield put(fetchWorksSuccess(works));
  } catch (error) {
    yield put(fetchWorksFailure(error.message));
  }
}

export function* workSaga() {
  yield takeLatest(fetchWorksRequest.type, fetchWorksWorker);
}
