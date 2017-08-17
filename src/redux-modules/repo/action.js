import { createAction } from 'redux-actions';
import shortid from 'shortid';

export const UPDATE = shortid.generate();
export const update = createAction(UPDATE);

export const FETCH_REPO = shortid.generate();
export const fetchRepo = createAction(FETCH_REPO);
