import { Link, useLocation } from "react-router-dom";
import Maskedtext from "../components/MaskedText/MaskedText";

function PlayGame(){

    const { state } = useLocation();

    return (
        <>
            <h1 className="text-4xl m-4">Play Game {state.wordSelected}</h1>
            <Maskedtext text={state.wordSelected} guessedLetters={[]}/>
            <Link to="/start" className="text-blue-400 ml-6">Start New Game</Link>
        </>
    );
}

export default PlayGame;