import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from '@material-ui/core/Container'

import AllCharacterNames from './components/AllCharacterNames'

function App() {
  return (
    <Container maxWidth="xl">
      <AllCharacterNames />
    </Container>
  );
}

export default App;
