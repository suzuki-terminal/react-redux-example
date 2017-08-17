import { fork } from 'redux-saga/effects';

import { saga as repos } from './repos';
import { saga as repo } from './repo';

export default function* rootSaga() {
  yield fork(repos);
  yield fork(repo);
}
