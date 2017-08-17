import React from 'react';
import { Route, IndexRoute } from 'react-router';

import AppContainer from './containers/AppContainer';
import ReposContainer from './containers/ReposContainer';
import RepoContainer from './containers/RepoContainer';
import RepoOwnerContainer from './containers/RepoOwnerContainer';
import RepoOrganizationContainer from './containers/RepoOrganizationContainer';

export default (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={ReposContainer} />

    <Route path="repos">
      <IndexRoute component={ReposContainer} />

      <Route path=":ownerName/:repoName" component={RepoContainer}>
        <Route path="owner" component={RepoOwnerContainer} />
        <Route path="organization" component={RepoOrganizationContainer} />
      </Route>
    </Route>
  </Route>
);
