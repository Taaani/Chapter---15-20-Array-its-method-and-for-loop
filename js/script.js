function simpleAlert(){
    let input = document.getElementById("input").value
    if(!input){
        alert("please enter any value");
        return
    }
    else{
     let output = document.getElementById("output")
     output.innerHTML = input;
     let statment = document.getElementById("statement")
     statment.innerHTML = input;
     alert(input);
    }
}
// print my name;
 
function printName(){
    let firstName = prompt("please enter first name");
    let lastName  = prompt("please ente last name");
    if(!firstName){
      alert("please enter your first name");
      
      return
    }
    else if(!lastName){
         alert("please enter lastName");
    }
    else{
        let output = document.getElementById("output");
        let fullName = firstName +" "+lastName;
        output.innerHTML = fullName;
        let statment = document.getElementById("statement")
        statment.innerHTML = fullName;
    }

}

let cities = ["lahore", "islamabad", "karachi" , "bahwalpur","kashmir"];
 function printCities(){

    
    let output = document.getElementById("output");
    let statement = document.getElementById("statement");
    output.innerHTML = "";
    statement.innerHTML = "";
    for(let i=0; i<cities.length ; i++){
    
        output.innerHTML += i+1 +")"+ cities[i]+ "<br>";
        statement.innerHTML += i+1 +")"+ cities[i]+ " ";
    }
    
 }

//  add city in the list
function addCity(){
    let input = document.getElementById("input").value;
    if(!input){
        alert("OOPs you cannot add city in the inputField ")
        return
    }else{
        cities.push(input);
        alert("your new city is add in the cities array")
    }
}

//  generate table which the user want..........
 function generateTable(){
    
    let input = document.getElementById("input").value;
    if(!input){
        alert("enter any number in the input field then click button")
        return;
    }
    let output = document.getElementById("output");
    let statement = document.getElementById("statement");
    output.innerHTML = "";
    statement.innerHTML = "";
    let val = +prompt("enter the value where you end");
    for(let i = 0; i<=val ; i++){
        output.innerHTML += input +" x"+ i +"= "+ (i*input)+ "<br>";
        statement.innerHTML += input +" x"+ i +"= "+ (i*input)+"  ";

    }
 }

//  input clear
function inputClear(){
    document.getElementById("input").value = "";
    
    

}

function outPutClear(){
    let output = document.getElementById("output");
    output.innerHTML = "";
}