import Button from "../Button/button";
import TextInput from "../TextInput/TextInput";

function TextInputForm({inputType, handleFormSubmit, handleTextInputChange, handleShowHideClick}) {
    return(
        <form onSubmit={handleFormSubmit}>
            <div>
                <TextInput
                    type={inputType}
                    label = {'Enter a Word'}
                    placeholder = {'Enter a word here'}
                    onChangeHandler = {handleTextInputChange}
                />
            </div>
            <div>
                <Button
                    styleType="warning"
                    text= {inputType === 'password' ? 'Show':'Hide'}
                    onClickHandler={handleShowHideClick}
                />
            </div>
            <div>
                <Button
                    type="submit"
                    styleType="primary"
                    text='Submit'
                />
            </div>
        </form>
    )
}

export default TextInputForm;