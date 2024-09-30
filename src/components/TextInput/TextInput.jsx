function TextInput({type='text', label, placeholder='Enter your input here', onChangeHandler}) {
    return(
        <label>
            <span className="text-grey-700 block ml-6 mb-2">{label}</span>
            <input
                type={type}
                className="px-4 py-2 border border-gray-300 rounded-md w-3/6 ml-6 mb-4"
                placeholder={placeholder}
                onChange={onChangeHandler} 
            />
        </label>
    )
}

export default TextInput;