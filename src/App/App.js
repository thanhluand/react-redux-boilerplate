import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import { connect } from 'react-redux';
import { compose, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';
import { getTitle } from './selector'
import { changeTitleApp } from './actions'

class App extends Component {
  
  componentDidMount() {
    // setTimeout(() => { 
      this.props.changeTitleApp('this is title app');
    // }, 3000);
  }
  render() {
    const { title } = this.props; 
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <div>{ title }</div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return {
    changeTitleApp: bindActionCreators(changeTitleApp, dispatch),
  }
}

const mapStateToProps = createStructuredSelector({
  title: getTitle(),
})

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
)(App);

