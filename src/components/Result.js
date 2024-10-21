import React from 'react'

const Result = ({ score, totalQuestions }) => {
  return (
    <div className='result-container'>
        <h2>Quiz completed</h2>
        <p>Your score: {score} / {totalQuestions}</p>
    </div>
  )
}

export default Result