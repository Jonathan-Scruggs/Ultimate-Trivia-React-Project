import yellowBlob from "../assets/blob 5.png"
import blueBlob from "../assets/blobs.png"
import PropTypes from 'prop-types'
import Question from "./Question.jsx";
import React  from "react";
import "./Quiz.css"
Quiz.propTypes = {
    questions: PropTypes.array
}

export default function Quiz(props){

    const [gameOver,setGameState] = React.useState(false)

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array
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
        setQuestions(prevQuestions => {
            const newArray = [...prevQuestions]
            newArray[id].selectedAnswer = answer
            return newArray
            // Have to make a copy then modify
        })
    }
    function gradeQuiz(){

        
    }
    
    const [questions,setQuestions] = React.useState(initializeQuestionsState())
    const questionsJSX = questions.map((question,index) => {
        return <Question key={index} 
        changeAnswer={setQuestionAnswer}
        questionObject={questions[index]}
        />
    })
    return (
        <main>
            <img className="yellow-blob"src={yellowBlob}/>
            {questionsJSX}
             <img src={blueBlob} className="blue-blob"/>
             {gameOver === false && (<button onClick={gradeQuiz} className="check-answers-btn">Check answers</button>)}
        </main>

    )

}