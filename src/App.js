import React from 'react';
import { useState } from 'react';
import Number from './components/Number';

const App = () => {
  const [hide, setHide] = useState(false)
  return (
    <>
      <button className="close" onClick={() => setHide(!hide)}>x</button>
      {hide && (
        <div className='steps'>
          <Number />
        </div>
      )
      }
    </>
  )
}

export default App
