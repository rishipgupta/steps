import React from 'react'

const Text = ({ num }) => {
  let str = "Learn React";

  if (num === 2) {
    str = "Get Job";
  }
  if (num === 3) {
    str = "Invest Money";
  }
  return (
    <div>
      {str}
    </div>
  )
}

export default Text;
