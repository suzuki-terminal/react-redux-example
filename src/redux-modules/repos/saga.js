import { delay } from 'redux-saga';
import { take, fork, put, call, select } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import axios from 'axios';

import {
  FETCH_REPOS,
  update,
} from './action';

function createLazily(msec = 100) {
  let prevTask;
  return function* runLazilyTask(task, ...args) {
    if (prevTask && prevTask.isRunning()) {
      prevTask.cancel();
    }
    prevTask = yield fork(function* createLazilyTask() {
      yield call(delay, msec);
      yield fork(task, ...args);
    });
  };
}

/**
 * リポジトリの検索
 */
function* runFetchRepos({ q }) {
  let repos = yield select(state => state.repos);

  yield put(push({ pathname: '/repos' }));

  repos = repos.fetching();
  yield put(update(repos));

  const { data: { total_count, items } } = yield call(axios.get, 'https://api.github.com/search/repositories', { params: { q } });

  repos = repos.fetched({ totalCount: total_count, items });
  yield put(update(repos));

}
function* handleFetchRepos() {
  const lazily = createLazily();
  while (true) {
    const { payload } = yield take(FETCH_REPOS);
    yield fork(lazily, runFetchRepos, payload);
  }
}


export default function* rootSaga() {
  yield fork(handleFetchRepos);
}