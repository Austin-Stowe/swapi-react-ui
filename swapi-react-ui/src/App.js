import React, {useState} from 'react'

import './App.css';

import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from "react-query/devtools";


import 'bootstrap/dist/css/bootstrap.min.css';

import SwapiNav from './components/SwapiNav'
import People from './components/People/People'
import Planets from './components/Planets/Planets'

const queryClient = new QueryClient()

const App = () => {
  const [dataType, setDataType] = useState('People')
  const [pageNum, setPageNum] = useState(1)

  const route = (dataType) => {
    switch(dataType){
      case 'People':
        return <People pageNum={pageNum}/>
      case 'Planets':
        return <Planets pageNum={pageNum}/>
      default:
        console.log('Default')
        break
    }
  }

  return (
    <>
    <QueryClientProvider client={queryClient}>
      <SwapiNav dataType={dataType} setDataType={setDataType} pageNum={pageNum} setPageNum={setPageNum}/>
      { route(dataType) }
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
    </>
  );
}

export default App;
