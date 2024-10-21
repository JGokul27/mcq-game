import React from 'react'

const Question = ({ data, onAnswer }) => {
    const { question, options, answer } = data

    const handleOptionClick  = (option) => {
        const isCorrect = option === answer;
        onAnswer(isCorrect);
    }
  return (
    <div className='question-container'>
        <h2>{question}</h2>
        <ul>
            {options.map((option, index) => (
                <li key={index} onClick={() => handleOptionClick(option)}>{option}
                </li>
            ))}
        </ul>
    </div>
  )
}

export default Question