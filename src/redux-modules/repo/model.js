import { Record } from 'immutable';

export class Repo extends Record({
  fetch: false,

  full_name: null,
  description: null,
  owner: {},
  organization: {},
}) {

  fetching() {
    return this.set('fetch', true);
  }

  fetched(data) {
    return new Repo(data);
  }

}
