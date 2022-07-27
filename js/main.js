/*

Developed by armarce https://github.com/armarce

*/

let operators = ['%', '÷', 'x', '-', '+'];

let outputElement = document.getElementById("output");

let calculate = () => {

    let outputValue = document.getElementById("output").textContent;

    outputValue = outputValue.toString();

    for(operator of operators){
        
        if(operator === '%'){

            if(outputValue.includes(operator)){

                document.getElementById("output").textContent = eval(outputValue = outputValue.replace('%', '*')) / 100;

            }

        }else{

            if(outputValue.includes(operator)){

                document.getElementById("output").textContent = eval(outputValue.replace('x', '*').replace('÷', '/'));

            }

        }
    
    }

}

let clickButton = () => {

    let result = 0;

    document.querySelectorAll('.number, .operator').forEach((item) => {

        item.addEventListener('click', events => {

            let value = item.textContent;

            switch (value){
                
                case 'AC': 
                
                    outputElement.textContent = '';

                    break;

                case '+/-':

                    currentResult = outputElement.textContent
                    result = currentResult * (-1);
                    outputElement.textContent = result;

                    break;
                
                case '%':
                    
                    calculate();
                    
                    outputElement.textContent += value;

                break;

                case '=':

                    calculate();

                break;

                case 'x':

                    calculate();

                    outputElement.textContent += value;

                break;

                case '-':

                    calculate();

                    outputElement.textContent += value;

                break;
                
                case '+':

                    calculate();

                    outputElement.textContent += value;

                break;                          

                default:

                outputElement.textContent += value;

            }
            
        });
        
    });

}

clickButton();