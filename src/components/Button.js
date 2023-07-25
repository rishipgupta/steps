import React from 'react'

const Button = ({ num, setNum }) => {
  return (
    <div>
      <button onClick={() => {
        if (num > 1) {
          setNum(num - 1)
        }
      }}
      >Previous</button>
      <button onClick={() => {
        if (num < 3) {
          setNum(num + 1)
        }
      }}>Next</button>
    </div>
  )
}

export default Button
