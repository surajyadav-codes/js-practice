const accountId = 123323;
let accountGmail = "Suraj@google.com"
var accountPass = "234";
/*
prefer not to use var
because of issue in block scope and functional scope
*/
let accountState;
accountCity ="Ludhiana";
accountGmail = "Sky@google.com";
accountPass = "4521";
accountCity = "Bengaluru";
console.table([accountGmail , accountId ,accountPass ,accountCity,accountState])