import yellowBlob from "../assets/blob 5.png"
import blueBlob from "../assets/blobs.png"
import PropTypes from 'prop-types'
import Question from "./Question.jsx";
import {nanoid} from 'nanoid'
import React  from "react";
// TODO: Make construct Question function that is used as a callback function in the map method
    // TODO: Render content to screen
Quiz.propTypes = {
    questions: PropTypes.array
}

export default function Quiz(props){
   const [questions,setQuestions] = React.useState([])


    const questionsJSX = props.questions.map(questionObj => {
        setQuestions(prevQuestions => [...prevQuestions,{
            selectedAnswer: ""
        }])
        return <Question key={nanoid()} question={questionObj.question} 
        incorrectAnswers={questionObj.incorrect_answers}
        correctAnswer={questionObj.correct_answer}
        questionType={questionObj.type}/>
    })
    return (
        <main>
            <img className="yellow-blob"src={yellowBlob}/>
            {questionsJSX}


             <img src={blueBlob} className="blue-blob"/>
             <button>Check answers</button>
        </main>

    )

}