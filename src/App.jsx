import QuizIntro from './components/QuizIntro'
import Quiz from './components/Quiz'
import React from "react"
/* ****HINTS******
  - questions property of API response is html entity. Use a library such as he or html-entities to decode and the HTML entities.
  
  - Should create a new array with all answers and randomly insert the correct answers into the array with incorrect answers. Essentially we need to
  either insert at random or shuffle the items in the array.

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
