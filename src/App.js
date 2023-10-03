
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import Top from './components/header';
import Footer from './components/footer';

export class App extends Component {
  render() {
    return (
      <div className="bg">
        <Navbar />
        <Top />
        <News pageSize={6}/>
        <Footer/>
      </div>
    )
  }
}

export default App

