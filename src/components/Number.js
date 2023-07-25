import React from 'react';
import { useState } from 'react';
import Text from './Text';
import Button from './Button';

const Number = () => {
  const [num, setNum] = useState(1);
  return (
    <>
      <div className='numbers'>
        <div className={`${num === 1 && "active"}`}>1</div>
        <div className={`${num === 2 && "active"}`}>2</div>
        <div className={`${num === 3 && "active"}`}>3</div>
      </div>
      <Text num={num} />
      <Button num={num} setNum={setNum} />
    </>
  )
}

export default Number
