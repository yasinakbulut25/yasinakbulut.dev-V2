
import { all } from "redux-saga/effects";
import { projectSaga } from "../fetures/projects/projectSaga";
import { workSaga } from "../fetures/works/workSaga";
import { experienceSaga } from "../fetures/experiences/experienceSaga";
import { aboutSaga } from "../fetures/about/aboutSaga";

export default function* rootSaga() {
  yield all([
    projectSaga(),
    workSaga(),
    experienceSaga(),
    aboutSaga()
  ]);
}
