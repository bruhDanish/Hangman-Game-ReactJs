import { useState } from "react";
import TextInputForm from "./TextInputForm/";

function TextInputFormContainer() {

    const [inputType, setInputType]= useState('password');

    function handleFormSubmit(e) {
        e.preventDefault();
        console.log('Form submitted');
    }

    function handleTextInputChange(e) {
        console.log('Text input changed');
        console.log(e.target.value);
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