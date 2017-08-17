import { take, fork, put, call, select } from 'redux-saga/effects';
import axios from 'axios';

import {
  FETCH_REPO,
  update,
} from './action';

/**
 * リポジトリ取得
 */
function* handleFetchRepo() {
  while (true) {
    const { payload: { ownerName, repoName } } = yield take(FETCH_REPO);

    let repo = yield select(state => state.repo);

    repo = repo.fetching();
    yield put(update(repo));

    const { data } = yield call(axios.get, `https://api.github.com/repos/${ownerName}/${repoName}`);

    repo = repo.fetched(data);
    yield put(update(repo));
  }
}


export default function* rootSaga() {
  yield fork(handleFetchRepo);
}