import { call, put, takeLatest } from "redux-saga/effects";
import { fetchData } from "../../api/api";
import {
  fetchExperiencesRequest,
  fetchExperiencesSuccess,
  fetchExperiencesFailure,
} from "./experienceSlice";

function* fetchExperiencesWorker() {
  try {
    const experiences = yield call(fetchData, "/experiences");
    yield put(fetchExperiencesSuccess(experiences));
  } catch (error) {
    yield put(fetchExperiencesFailure(error.message));
  }
}

export function* experienceSaga() {
  yield takeLatest(fetchExperiencesRequest.type, fetchExperiencesWorker);
}
