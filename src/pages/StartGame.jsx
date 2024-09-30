import { Link } from "react-router-dom";
import TextInputFormContainer from "../components/TextInputForm/TextInputFormContainer";

function StartGame() {
    return(
        <> {/* This is a fragment */}
            <h1 className="text-4xl m-4">Start Game</h1>
            <TextInputFormContainer />
            {/* <Link to="/play" className="text-blue-400 ml-7">Play Game</Link> */}
        </>
    )
}

export default StartGame;