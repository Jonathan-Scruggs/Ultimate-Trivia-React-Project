import "./QuizIntro.css"
import yellowBlob from "../assets/blob 5.png"
import blueBlob from "../assets/blobs.png"

export default function QuizIntro(){
    // TODO: Implement form functionality
    return (
        <main className="quiz-intro">
            <img className="yellow-blob"src={yellowBlob}/>
            <h1 className="quizzical-header">Quizzical</h1>
            <p className="quizzical-description">Welcome to Quizzical, the ultimate trivia challenge! </p>
            <form className="quiz-intro-form">
                <div className="option-container">
                    <label className="quiz-intro-label" htmlFor="category">Category:</label>
                    <select name="category" id="category"  className="quiz-intro-option">
                        <option value="">Any Category</option>
                        <option value="9">General Knowledge</option>
                        <option value="10">Entertainment: Books</option>
                        <option value="11">Entertainment: Film</option>
                        <option value="12">Entertainment: Music</option>
                        <option value="13">Entertainment: Musicals &amp; Theatres</option>
                        <option value="14">Entertainment: Television</option>
                        <option value="15">Entertainment: Video Games</option>
                        <option value="16">Entertainment: Board Games</option>
                        <option value="17">Science &amp; Nature</option>
                        <option value="18">Science: Computers</option>
                        <option value="19">Science: Mathematics</option>
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option>
                        <option value="22">Geography</option>
                        <option value="23">History</option>
                        <option value="24">Politics</option>
                        <option value="25">Art</option>
                        <option value="26">Celebrities</option>
                        <option value="27">Animals</option>
                        <option value="28">Vehicles</option>
                        <option value="29">Entertainment: Comics</option>
                        <option value="30">Science: Gadgets</option>
                        <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                        <option value="32">Entertainment: Cartoon &amp; Animations</option>
                    </select>
                </div>
                <div className="option-container">
                    <label className="quiz-intro-label" htmlFor="difficulty">Difficulty:</label>
                    <select id="difficulty" name="difficulty" className="quiz-intro-option">
                        <option value="">Any Difficulty</option>
                        <option value="easy">Easy</option>
                        <option value="medium">Medium</option>
                        <option value="hard">Hard</option>
                    </select>
                </div>
                <div className="option-container">
                    <label className="quiz-intro-label" htmlFor="question-type">Question Type:</label>
                    <select id="question-type" name="question-type"  className="quiz-intro-option">
                        <option value="">Any Type</option>
                        <option value="multiple">Multiple Choice</option>
                        <option value="boolean">True/False</option>
                    </select>
                </div>
                <div className="option-container">
                    <label className="quiz-intro-label number" htmlFor="number-of-questions">Number of Questions:</label>
                    <input id="number-of-questions"type="number" min="1" max="50" className="quiz-intro-option"/>
                </div>
                <button className="quiz-intro-start-btn">Start quiz</button>
            </form>
            <img src={blueBlob} className="blue-blob"/>

        </main>

    )
}
