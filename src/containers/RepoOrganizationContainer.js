import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Repo } from '../redux-modules/repo';

import styles from './styles.css';

const propTypes = {
  repo: PropTypes.instanceOf(Repo).isRequired,
};

class RepoOrganizationContainer extends Component {

  componentWillMount() {
    console.log('RepoOrganizationContainer: componentWillMount');
  }

  componentDidMount() {
    console.log('RepoOrganizationContainer: componentDidMount');
  }

  componentWillUpdate() {
    console.log('RepoOrganizationContainer: componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('RepoOrganizationContainer: componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('RepoOrganizationContainer: componentWillUnmount');
  }

  render() {
    return (
      <pre className={styles.pre}>
        {JSON.stringify(this.props.repo.organization, null , '\t')}
      </pre>
    );
  }
}

function mapStateToProps(state) {
  return {
    repo: state.repo,
  };
}

RepoOrganizationContainer.propTypes = propTypes;

export default connect(mapStateToProps, null)(RepoOrganizationContainer);