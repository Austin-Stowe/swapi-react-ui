import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Container from '@material-ui/core/Container'
import People from './components/People/People'


function App() {
  return (
    <Container maxWidth="xl">
      <People />
    </Container>
  );
}

export default App;
