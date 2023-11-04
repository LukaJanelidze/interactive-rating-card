import { useState } from 'react';
import './App.css';
import Rate from './components/Rate/Rate';
import Result from './components/Result/Result';

function App() {
  const [number, setNumber] = useState();
  const [submit, setSubmit] = useState(false);
  console.log(submit);
  return (
    <>
    {submit ? <Result number={number} /> : <Rate number={number} setNumber={setNumber} setSubmit={setSubmit}/>}
    </>
  )
}

export default App;
