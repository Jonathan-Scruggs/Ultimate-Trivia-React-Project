import PropTypes from "prop-types"
import {decode} from 'html-entities';
import "./Question.css"
Question.propTypes = {
    questionObject: PropTypes.object,
    changeAnswer: PropTypes.func,
    gameOver: PropTypes.bool
}

export default function Question(props){
    let {id,selectedAnswer,question,answers,correctAnswer,questionType} = props.questionObject
    console.log(props.gameOver)
    const questionText = decode(question)
    if (questionType === 'boolean'){
        // No need to shuffle true and false
        answers = ["True","False"]
    }

    let buttonsJSX = answers.map((answer,index) => {    
        let answerText = decode(answer)
        let styles = {}
        if (props.gameOver){
            if (answer === selectedAnswer && selectedAnswer === correctAnswer){
                console.log("Inside of correct")
                styles = {background: "#94D7A2", border:"unset"}
            }
            else if (answer === selectedAnswer && selectedAnswer != correctAnswer){
                styles ={background: "#F8BCBC", border:"unset"}
            }
        }
        else {
            styles = {
                backgroundColor: selectedAnswer === answer ? "#D6DBF5":"unset",
                border: selectedAnswer === answer ? "unset":"1px solid #4D5B9E"
            }
        }
        return (<button onClick={() => props.changeAnswer(id,answerText)}
            key={index} 
            style={styles}
            className="answer-btn">{answerText}</button>
        )
    })
    
    
    
    return (
        <div className="question-container">
            <p className="question">{questionText}</p>
            <div className="answer-btns-container">
                {buttonsJSX}
            </div>
        </div>
    )


}