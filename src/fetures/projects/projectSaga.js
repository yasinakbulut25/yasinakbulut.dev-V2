import { call, put, takeLatest } from "redux-saga/effects";
import { fetchData } from "../../api/api";
import { fetchProjectsFailure, fetchProjectsRequest, fetchProjectsSuccess } from "./projectSlice";

function* fetchProjectsWorker() {
  try {
    const projects = yield call(fetchData, "/projects"); // Burada API'yi çağırıyoruz
    yield put(fetchProjectsSuccess(projects));
  } catch (error) {
    yield put(fetchProjectsFailure(error.message));
  }
}

export function* projectSaga() {
  yield takeLatest(fetchProjectsRequest.type, fetchProjectsWorker);
}
