import { createAction } from 'redux-actions';
import shortid from 'shortid';

export const UPDATE = shortid.generate();
export const update = createAction(UPDATE);

export const FETCH_REPOS = shortid.generate();
export const fetchRepos = createAction(FETCH_REPOS);
