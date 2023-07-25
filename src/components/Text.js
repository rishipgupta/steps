import React from 'react'


const Text = ({ num }) => {
  // let str = "Learn React";

  // if (num === 2) {
  //   str = "Get Job";
  // }
  // if (num === 3) {
  //   str = "Invest Money";
  // }

  const messages = [
    "Learn React ⚛️",
    "Apply for jobs 💼",
    "Invest your new income 🤑",
  ];

  return (
    <p className='message'>
      {messages[num - 1]}
    </p>
  )
}

export default Text;
