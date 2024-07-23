import yellowBlob from "../assets/blob 5.png"
import blueBlob from "../assets/blobs.png"
import PropTypes from 'prop-types'
import Question from "./Question.jsx";
import React  from "react";
import "./Quiz.css"
Quiz.propTypes = {
    questions: PropTypes.array,
    setPage: PropTypes.func
}

export default function Quiz(props){

    const [gameOver,setGameState] = React.useState(false)
    const [questions,setQuestions] = React.useState(initializeQuestionsState())
    const [quizScore,setScore] = React.useState(0)
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
    }
    /*Play Again Functionality 
    Sets the state in the App component to QuizIntro and 
    set quizElasped to false. Reset the react states
    */
    function playAgain(){
        props.setPage(prevState => {
            return {
                ...prevState,
                quizIntro: true,
                quizElapsed: false
            }
        })
        // Don't need to reset the states since when we unmount the component the states are reset 
        // and will reinitialize when the game starts again
    }



    function initializeQuestionsState(){
        let questions = []
        let count = 0
        for (let questionObj of props.questions) {
            questions.push({
                id: count,
                selectedAnswer: 10000,
                question:questionObj.question,
                answers:shuffleArray([...questionObj.incorrect_answers,questionObj.correct_answer]),
                correctAnswer:questionObj.correct_answer,  
                questionType:questionObj.type
            })
            count++
        }
        
        return questions   
    }
    
    function setQuestionAnswer(id,answer){
        if (gameOver){
            return
        }

        setQuestions(prevQuestions => {
            const newArray = [...prevQuestions]
            newArray[id].selectedAnswer = answer
            return newArray
            // Have to make a copy then modify
        })
    }
    function gradeQuiz(){
        let numCorrect = 0;
        for (let question of questions){
            if (question.correctAnswer === question.selectedAnswer){
                numCorrect++
            }            
        }
        setScore(numCorrect)
        setGameState(true)
    }

    const questionsJSX = questions.map((question,index) => {
        return <Question gameOver={gameOver} key={index} 
        changeAnswer={setQuestionAnswer}
        questionObject={questions[index]}
        />
    })
    return (
        <main>
            <img className="yellow-blob"src={yellowBlob}/>
            {questionsJSX}
            <img src={blueBlob} className="blue-blob"/>
             {gameOver === false && (<button onClick={gradeQuiz} className="quiz-btn check-btn">Check answers</button>)}
             {gameOver && <div className="quiz-results">
                <p>You scored {quizScore}/{questions.length} answers</p>
                <button className="quiz-btn" onClick={playAgain}>Play again</button>
             </div>}
        </main>

    )

}