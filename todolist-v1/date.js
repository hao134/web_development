//jshint esversion:6
exports.getDate = function() {

    const today = new Date();
        
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    return today.toLocaleDateString("zh-TW", options);
}


//對照下面，上面是較簡潔的寫法
module.exports.getDay = getDay;

function getDay() {

    const today = new Date();
        
    const options = {
        weekday: "long",
    };

    return today.toLocaleDateString("zh-TW", options);
}
