import { UPDATE } from './action';
import { Repos } from './model';

export default function reducer(state = new Repos(), { type, payload }) {
  switch (type) {
    case UPDATE: {
      return payload;
    }

    default: {
      return state;
    }
  }
}
