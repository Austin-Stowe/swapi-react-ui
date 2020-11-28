import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Button from 'react-bootstrap/Button'

import AllCharacterNames from './components/AllCharacterNames'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AllCharacterNames />
        <Button variant="primary" size="lg">Press me!</Button>
      </header> 
    </div>
  );
}

export default App;
