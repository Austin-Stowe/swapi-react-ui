import logo from './logo.svg';
import './App.css';

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from "react-query/devtools";


import 'bootstrap/dist/css/bootstrap.min.css';

import People from './components/People/People'

const queryClient = new QueryClient()

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <People />
      <ReactQueryDevtools initialIsOpen/>
    </QueryClientProvider>
  );
}

export default App;
