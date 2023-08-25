
let outputWindow = document.getElementById("output");
let inputWindow = document.getElementById("input");

function display(num) {
    if (outputWindow.value != "")  {
        inputWindow.value = outputWindow.value;
        outputWindow.value = "";
        }    
    inputWindow.value += num;
}


function Clear() {
    outputWindow.value = "";
    inputWindow.value = "";
}

function del() {
    if (outputWindow.value != "")  {
        Clear();
    }
    else inputWindow.value = inputWindow.value.slice(0, -1);
}

function Calc() {
    try {
        outputWindow.value = eval(inputWindow.value);
    }
    catch (err) {
        alert("error")
    }
}