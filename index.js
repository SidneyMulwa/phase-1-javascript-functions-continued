// code your solution here
function saturdayFun(activity = 'roller-skate'){
    return (`This Saturday, I want to ${activity}!`);
}

saturdayFun('bathe my dog');
//Function Expression
const mondayWork = function(activity = 'go to the office'){
    return (`This Monday, I will ${activity}.`);
};
mondayWork("work from home");

//Scope Chains
let wrapAdjective = function (visualFlair = "*"){
    return function (adjective = "special"){
        return(`You are ${visualFlair}${adjective}${visualFlair}!`);
    }
}

wrapAdjective("%")("a dedicated programmer");