import getButtonStyle from "./getButtonStyle";

function Button({text, onClickHandler, styleType="primary", type="button"}) {
    return(
        <button
            type={type}
            onClick = {onClickHandler}
            style={{'color':'white'}}
            className={`m-2 px-4 py-2 ${getButtonStyle(styleType)} rounded-lg ml-6 mb-2`}
        >
            {text}
        </button>
    )
}

export default Button;