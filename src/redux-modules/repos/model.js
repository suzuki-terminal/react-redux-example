import { Record, List } from 'immutable';

export class Repo extends Record({
  id: null,
  name: null,
  description: null,
  full_name: null,
}) {

}

export class Repos extends Record({
  fetch: false,
  totalCount: 0,
  items: new List(),
}) {

  fetching() {
    return this.set('fetch', true);
  }

  fetched({ totalCount = 0, items = [] }) {
    return this
      .set('fetch', false)
      .set('totalCount', totalCount)
      .set('items', new List(items.map(i => new Repo(i))));
  }

}
