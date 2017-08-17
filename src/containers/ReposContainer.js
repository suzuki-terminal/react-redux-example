import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { Repos } from '../redux-modules/repos';

import styles from './styles.css';

const propTypes = {
  repos: PropTypes.instanceOf(Repos).isRequired,
};

class ReposContainer extends Component {

  componentWillMount() {
    console.log('ReposContainer: componentWillMount');
  }

  componentDidMount() {
    console.log('ReposContainer: componentDidMount');
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
        {this.props.repos.fetch
          ? (
            <p className={styles.loading}>
              Loading...
            </p>
          ) : (
            <ul className={styles.repos}>
              {this.props.repos.items.map(repo =>
                <Link
                  className={styles.link}
                  key={repo.id}
                  to={`/repos/${repo.full_name}/owner`}
                >
                  <li className={styles.repo}>
                    <div className={styles.name}>{repo.name}</div>
                    <div className={styles.description}>{repo.description}</div>
                  </li>
                </Link>
              )}
            </ul>
          )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    repos: state.repos,
  };
}

ReposContainer.propTypes = propTypes;

export default connect(mapStateToProps, null)(ReposContainer);
