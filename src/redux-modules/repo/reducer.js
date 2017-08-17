import { UPDATE } from './action';
import { Repo } from './model';

export default function reducer(state = new Repo(), { type, payload }) {
  switch (type) {
    case UPDATE: {
      return payload;
    }

    default: {
      return state;
    }
  }
}
