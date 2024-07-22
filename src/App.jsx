import QuizIntro from './components/QuizIntro'
import Quiz from './components/Quiz'
import React from "react"
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
