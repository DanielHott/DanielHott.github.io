import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header';
import Main from './components/main';
import Footer from './components/footer';
import React from 'react';

class App extends React.Component {
    render() {
    return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Header />
        <Main />
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;
