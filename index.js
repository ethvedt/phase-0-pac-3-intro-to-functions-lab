function shout(string) {
   return string.toUpperCase();
//    return newString;
}

function whisper(string) {
    return string.toLowerCase();
//    return newString;
}

function logShout(string) {
    console.log(string.toUpperCase())
}

function logWhisper(string) {
    console.log(string.toLowerCase())
}

function sayHiToHeadphonedRoommate(string) {
    if (string.toLowerCase() === string) {
        return "I can't hear you!";
    } else if (string.toUpperCase() === string) {
        return "YES INDEED!";
    } else if (string == "Let's have dinner together!") {
        return "I would love to!";
    }
}