const flag1 = true;
const flag2 = "";

console.log(flag1);
console.log(typeof(flag2));

if (typeof(flag2) == "boolean"){

    if (flag2) {
        console.log("I am a frog");
        //if there is something in the string then it is true
        //is there something in the string? if yes, true, if no, false
    } else {
        console.log("I am a prince");
        //empty string is false
    }
    } else{
        console.log("Not a boolean");
    }