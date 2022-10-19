var dateOfBirth = document.querySelector("#date-of-birth");
var luckyNumber = document.querySelector("#lucky-number");
var checkNumber = document.querySelector("#check-number");
var outputBox = document.querySelector("#output-box");



function compareValues(sum,luckyNumber) {

    if(sum%luckyNumber===0) {
        outputBox.innerText ="your birthday is lucky  🚀";

    }else {
        outputBox.innerText ="your birthday is not lucky 🤒";
}

}


function birthdayIsLucky(){
    {
        var dob = dateOfBirth.value;
        var sum = calculateSum(dob);
        if(sum&&dob)
        compareValues(sum,luckyNumber.value)
        else 
        outputBox.innerText="please enter both feilds"
    
    }
    

}


function calculateSum(dob){
dob = dob.replaceAll("-","");
let sum = 0;
for(let index =0; index < dob.length; index++){

    sum = sum + Number(dob.charAt(index));
}
   return sum;
}

checkNumber.addEventListener('click', birthdayIsLucky)