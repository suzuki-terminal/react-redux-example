import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchRepos } from '../redux-modules/repos';

import styles from './styles.css';

const propTypes = {
  children: PropTypes.node,
  fetchRepos: PropTypes.func,
};

class AppContainer extends Component {

  constructor(props) {
    super(props);

    this.state = { q: '' };
  }

  componentWillMount() {
    console.log('AppContainer: componentWillMount');
  }

  componentDidMount() {
    console.log('AppContainer: componentDidMount');
  }

  componentWillUpdate() {
    console.log('AppContainer: componentWillUpdate');
  }

  componentDidUpdate() {
    console.log('AppContainer: componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('AppContainer: componentWillUnmount');
  }

  render() {
    return (
      <div className={styles.wrap}>
        <header className={styles.header}>
          <h1 className={styles.title}>
            Github Repository Search
          </h1>

          <form
            className={styles.searchForm}
            onSubmit={(e) => {
              e.preventDefault();
              this.props.fetchRepos({ q: this.state.q });
            }}
          >
            <input
              className={styles.searchFormInput}
              placeholder="リポジトリを検索します"
              value={this.state.q}
              onChange={({ target: { value } }) => this.setState({ q: value })}
            />

            <button className={styles.searchFormButton}>
              Search
            </button>
          </form>
        </header>

        <main>
          {this.props.children}
        </main>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    fetchRepos,
  }, dispatch);
}

AppContainer.propTypes = propTypes;

export default connect(null, mapDispatchToProps)(AppContainer);
