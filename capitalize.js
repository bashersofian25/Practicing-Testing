const capitalize = (string) => {
    if(string === "") {return ""};
    return string[0].toUpperCase() + string.slice(1,string.length); 
};

module.exports = capitalize