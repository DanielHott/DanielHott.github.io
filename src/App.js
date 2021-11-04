import './App.css';
import { BrowserRouter } from 'react-router-dom'
import Header from './components/header';
import Main from './components/main';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main />
    </BrowserRouter>
  );
}

export default App;
