import { useState } from "react";
import TextInputForm from "./TextInputForm/";
import { useNavigate } from "react-router-dom";

function TextInputFormContainer() {

    const [inputType, setInputType]= useState('password');
    const [value, setValue] = useState('');

    const navigate = useNavigate();

    function handleFormSubmit(e) {
        e.preventDefault();
        console.log('Form submitted', value);

        if(value) {
            navigate('/play', {state: {wordSelected: value}});
        }
    }

    function handleTextInputChange(e) {
        console.log('Text input changed');
        console.log(e.target.value);
        setValue(e.target.value);
    }

    function handleShowHideClick() {
        console.log('Show/Hide button clicked');
        if(inputType === 'password') {
            setInputType('text');
        }else {
            setInputType('password');
        }
        console.log(`Input type is now ${inputType}`);
        
    }

    return(
        <TextInputForm
            inputType={inputType}
            handleFormSubmit={handleFormSubmit}
            handleTextInputChange={handleTextInputChange}
            handleShowHideClick={handleShowHideClick}
        />
    )
}

export default TextInputFormContainer;