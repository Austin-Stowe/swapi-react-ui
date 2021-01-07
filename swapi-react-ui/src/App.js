import logo from './logo.svg';
import './App.css';

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from "react-query/devtools";


import 'bootstrap/dist/css/bootstrap.min.css';

import Container from '@material-ui/core/Container'
import People from './components/People/People'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Container maxWidth="xl">
        <People />
      </Container>
      <ReactQueryDevtools initialIsOpen/>
    </QueryClientProvider>
  );
}

export default App;
