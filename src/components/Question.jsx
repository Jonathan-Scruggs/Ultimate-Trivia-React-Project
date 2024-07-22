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
     
    console.log(props)
    let buttonsJSX = answers.map((answer,index) => {    
        const styles = {
            backgroundColor: selectedAnswer === index ? " #D6DBF5":"none"
        }
        return (<button onClick={() => props.changeAnswer(id,index)}
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