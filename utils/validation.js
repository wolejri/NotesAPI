const validateTitle = (title) => {
    if(!title){
        throw new Error("Title is required");
    }

    if(title.length > 50){
        throw new Error("Title cannot exceed 50 characters.");
    }
}

module.exports = { validateTitle };