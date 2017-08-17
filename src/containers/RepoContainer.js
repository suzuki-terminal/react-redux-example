import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';

import { fetchRepo, Repo } from '../redux-modules/repo';

import styles from './styles.css';

const propTypes = {
  ownerName: PropTypes.string.isRequired,
  repoName: PropTypes.string.isRequired,
  repo: PropTypes.instanceOf(Repo).isRequired,
  fetchRepo: PropTypes.func,
};

class RepoContainer extends Component {

  componentWillMount() {
    console.log('ReposContainer: componentWillMount');
  }

  componentDidMount() {
    console.log('ReposContainer: componentDidMount');

    const { ownerName, repoName } = this.props;
    this.props.fetchRepo({ ownerName, repoName });
  }

  componentWillUpdate() {
    console.log('ReposContainer: componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('ReposContainer: componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('ReposContainer: componentWillUnmount');
  }

  render() {
    return (
      <div>
        {this.props.repo.fetch
          ? (
            <p className={styles.loading}>Loading...</p>
          ) : (
            <div className={styles.repository}>
              <h2 className={styles.full_name}>{this.props.repo.full_name}</h2>
              <p className={styles.description}>{this.props.repo.description}</p>

              <ul>
                <li>
                  <Link to={`/repos/${this.props.repo.full_name}/owner`}>owner</Link>
                </li>
                <li>
                  <Link to={`/repos/${this.props.repo.full_name}/organization`}>organization</Link>
                </li>
              </ul>

              {this.props.children}
            </div>
          )}
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    ownerName: ownProps.params.ownerName,
    repoName: ownProps.params.repoName,
    repo: state.repo,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchRepo,
  }, dispatch);
}

RepoContainer.propTypes = propTypes;

export default connect(mapStateToProps, mapDispatchToProps)(RepoContainer);
