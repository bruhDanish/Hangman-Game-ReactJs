import getButtonStyle from "./getButtonStyle";

function Button({text, onClickHandler, styleType="primary", type="button"}) {
    return(
        <button
            type={type}
            onClick = {onClickHandler}
            style={{'color':'white'}}
            className={`m-2 px-4 py-2 ${getButtonStyle(styleType)} rounded-lg`}
        >
            {text}
        </button>
    )
}

export default Button;