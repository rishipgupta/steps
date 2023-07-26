import React from 'react'

const Button = ({ num, setNum }) => {
  return (
    <div className='buttons'>
      <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={() => {
        if (num > 1) {
          setNum(currentNum => currentNum - 1)
        }
      }}
      >Previous</button>
      <button style={{ backgroundColor: "#7950f2", color: "#fff" }} onClick={() => {
        if (num < 3) {
          setNum(currentNum => currentNum + 1)
        }
      }}>Next</button>
    </div>
  )
}

export default Button
