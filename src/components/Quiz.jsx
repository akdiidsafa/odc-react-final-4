import React, { useState } from 'react'
import Question from './Question'
import Summary from './Summary'

function Quiz() {
    const [isFinished, setIsFinished] = useState(true)
    const [userAnswer, setUserAnswer] = useState({
        id: '',
        userClicked: ''
    })
    const [sumarry, setSumarry] = useState({
        correct: '',
        wrong: '',
        skipped: '',
        answers: [
            {
                id: '',
                clicked: '',
                state: ''
            }
        ]
    })

    const handleFinished = () => {
        
    }

  return (
    <>
        {isFinished ? <Summary sumarry={sumarry} /> : <Question  handleFinished={handleFinished}/>}
    </>
  )
}

export default Quiz