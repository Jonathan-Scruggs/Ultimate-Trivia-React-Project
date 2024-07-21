import PropTypes from "prop-types"
import {decode} from 'html-entities';
import "./Question.css"
Question.propTypes = {
    question: PropTypes.string,
    incorrectAnswers: PropTypes.array,
    correctAnswer: PropTypes.string,
    questionType: PropTypes.string
}
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

export default function Question(props){
    const questionText = decode(props.question)
    let answersArray = [...props.incorrectAnswers,props.correctAnswer]
    if (props.questionType === 'boolean'){
        // No need to shuffle true and false
        answersArray = ["True","False"]
    }
    else {
        shuffleArray(answersArray)
    }
    let buttonsJSX = answersArray.map((answer) => {        
        return (<button key={answersArray.indexOf(answer)} className="answer-btn">{answer}</button>)
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