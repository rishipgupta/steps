import React from 'react';
import { useState } from 'react';
import Number from './components/Number';

const App = () => {
  const [hide, setHide] = useState(false)
  return (
    <div className='steps'>
      <button className="close" onClick={() => setHide(!hide)}>x</button>
      <Number hide={hide} />
    </div>
  )
}

export default App
