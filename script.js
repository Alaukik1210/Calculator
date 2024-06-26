const result = document.querySelector("#result");
const division = document.getElementById("division");

function insertvalue(value){
    result.value +=value;
}

function clearDisplay(){
    result.value = "";
}

function deleteResult(){
    result.value = result.value.slice(0,-1);
}

function calculate(){
    try{
        result.value = eval(result.value);
    }
    catch(error){
        result.value = "error";
    }
}