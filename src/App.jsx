import QuizIntro from './components/QuizIntro'
import Quiz from './components/Quiz'
import React from "react"
/* ****HINTS******
  - Limit answer choice to 1:
    1.) Track the selected answer index inside each question object or 
    2.) USe a HTML form + radio buttons to allow for one selection.(Have to style it like a button)
*/


function App() {
  const [page,setPage] = React.useState({
    quizIntro: true,
    quizElapsed: false,
    quizEnd: false,
    questions: []
  })
  return (
    <>
      {page.quizIntro && <QuizIntro setPage={setPage}/>}
      {page.quizElapsed && <Quiz questions={page.questions}/>}
    </>
  )
}

export default App
