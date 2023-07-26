import React from 'react';
import { useState } from 'react';
import Number from './components/Number';

const App = () => {
  const [hide, setHide] = useState(true);
  const [num, setNum] = useState(1);
  return (
    <>
      <button className="close" onClick={() => setHide(!hide)}>x</button>
      {hide && (
        <div className='steps'>
          <Number num={num} setNum={setNum} />
        </div>
      )
      }
    </>
  )
}

export default App
