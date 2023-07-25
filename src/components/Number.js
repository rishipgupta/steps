import React from 'react';
import { useState } from 'react';
import Text from './Text';
import Button from './Button';

const Number = () => {
  const [num, setNum] = useState(1);
  return (
    <div>
      <span>1</span>
      <span>2</span>
      <span>3</span>
      <Text num={num} />
      <Button num={num} setNum={setNum} />

    </div>
  )
}

export default Number
