import React, { Component } from 'react';
import { Header, Footer } from '../../components';
import s from './App.css';

export default class App extends Component {
  render() {
    return (
      <div className={s.wrapp}>
        <Header/>
        <main>
          { this.props.children }
        </main>

        <Footer />
      </div>
    );
  }
}
