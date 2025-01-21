// Function to append a value to the display

function appendToDisplay(value){
    document.getElementById('display').value += value;
}

// function to clear the display

function clearDisplay(){
    document.getElementById('display').value='';
}

//function to calculate the expression

function calculate(){
    try{
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    }catch(error){
        document.getElementById('display').value = 'Error';
    }
}