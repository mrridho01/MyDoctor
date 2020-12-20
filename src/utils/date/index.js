export const getChatTime = (date) => {
    const 
        hour = date.getHours(),
        minutes = date.getMinutes();

    return (`${hour}.${minutes < 10 ? 0 : ""}${minutes} ${hour > 12 ? "PM" : "AM" }`)
};

export const setDateChat = (date) => {
    const 
        year = date.getFullYear(),
        month = date.getMonth()+1,
        oldDate = date.getDate();
        
    return (`${year}-${month}-${oldDate}`);

};
