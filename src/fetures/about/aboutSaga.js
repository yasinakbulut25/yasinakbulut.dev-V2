import { call, put, takeLatest } from "redux-saga/effects";
import { fetchData } from "../../api/api";
import {
  fetchAboutRequest,
  fetchAboutSuccess,
  fetchAboutFailure,
} from "./aboutSlice";

function* fetchAboutWorker() {
  try {
    const aboutData = yield call(fetchData, "/about"); 
    yield put(fetchAboutSuccess(aboutData));
  } catch (error) {
    yield put(fetchAboutFailure(error.message));
  }
}

export function* aboutSaga() {
  yield takeLatest(fetchAboutRequest.type, fetchAboutWorker);
}
