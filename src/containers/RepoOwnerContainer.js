import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { Repo } from '../redux-modules/repo';

import styles from './styles.css';

const propTypes = {
  repo: PropTypes.instanceOf(Repo).isRequired,
};

class RepoOwnerContainer extends Component {

  componentWillMount() {
    console.log('RepoOwnerContainer: componentWillMount');
  }

  componentDidMount() {
    console.log('RepoOwnerContainer: componentDidMount');
  }

  componentWillUpdate() {
    console.log('RepoOwnerContainer: componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('RepoOwnerContainer: componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('RepoOwnerContainer: componentWillUnmount');
  }

  render() {
    return (
      <pre className={styles.pre}>
        {JSON.stringify(this.props.repo.owner, null , '\t')}
      </pre>
    );
  }
}

function mapStateToProps(state) {
  return {
    repo: state.repo,
  };
}

RepoOwnerContainer.propTypes = propTypes;

export default connect(mapStateToProps, null)(RepoOwnerContainer);