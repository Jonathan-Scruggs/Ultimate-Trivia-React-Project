import yellowBlob from "../assets/blob 5.png"
import blueBlob from "../assets/blobs.png"
import PropTypes from 'prop-types'
import {encode} from 'html-entities';
import Question from "./Question";
// TODO: Make construct Question function that is used as a callback function in the map method
    // TODO: Render content to screen
Quiz.propTypes = {
    questions: PropTypes.array
}

export default function Quiz(props){
    function constructQuestion(questionObj){
        
        return <Question />
    }
    
    console.log(props.questions)
    const questionsJSX = props.questions.map(constructQuestion)
    return (
        <main>
             <img className="yellow-blob"src={yellowBlob}/>
            


             <img src={blueBlob} className="blue-blob"/>
        </main>

    )

}