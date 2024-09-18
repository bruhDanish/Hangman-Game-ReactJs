function getButtonStyle(styleType) {
    if (styleType === 'primary') {
        return "bg-blue-500 hover:bg-blue-700";
    }else if(styleType === 'secondary') {
        return "bg-grey-500 hover:bg-grey-700";
    }else if(styleType === 'error'){
        return "bg-red-500 hover:bg-red-700";
    }else if(styleType === 'success'){
        return "bg-green-500 hover:bg-green-700";
    }else if(styleType === 'warning'){
        return "bg-yellow-500 hover:bg-yellow-700";
    }
}

export default getButtonStyle;