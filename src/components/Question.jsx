import PropTypes from "prop-types"
import {decode} from 'html-entities';
import "./Question.css"
Question.propTypes = {
    questionObject: PropTypes.object,
    changeAnswer: PropTypes.func,
}

export default function Question(props){
    let {id,selectedAnswer,question,answers,correctAnswer,questionType} = props.questionObject

    const questionText = decode(question)
    if (questionType === 'boolean'){
        // No need to shuffle true and false
        answers = ["True","False"]
    }
     
    let buttonsJSX = answers.map((answer,index) => {    
        console.log(answer,selectedAnswer)
        // Problem not rerendering 
        const styles = {
            backgroundColor: selectedAnswer === answer ? "#D6DBF5":"unset"
        }
        return (<button onClick={() => props.changeAnswer(id,answer)}
        key={index} 
        style={styles}
        className="answer-btn">{answer}</button>)
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