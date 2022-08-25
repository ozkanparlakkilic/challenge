const checkEmptyInputValue = (...texts: String[]) => {
    return texts.every((text) => text !== '');
};

export default checkEmptyInputValue;
