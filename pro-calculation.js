function NumberHandler(e){
  debugger
    document.getElementById('result').value += e.currentTarget.value;
    if(e.currentTarget.value === "+" || e.currentTarget.value === "-" || e.currentTarget.value === "*" || e.current.value === "\/"){
        Multicalculation();
        oparator.push(e.currentTarget.value);
        clickBtn = e.currentTarget.value;
    }
}


function Multicalculation(){
    result = document.getElementById('result').value
    if(firstNumber == null){
        firstNumber = result.substring(0, result.length -1); 
    }
    oparator.push(firstNumber);
    document.getElementById('result').value = null;
    firstNumber = null;
}


let btn1 = document.getElementById('btnNumber1');
let btn2 = document.getElementById('btnNumber2');
let btn3 = document.getElementById('btnNumber3');
let btn4 = document.getElementById('btnNumber4');
let btn5 = document.getElementById('btnNumber5');
let btn6 = document.getElementById('btnNumber6');
let btn7 = document.getElementById('btnNumber7');
let btn8 = document.getElementById('btnNumber8');
let btn9 = document.getElementById('btnNumber9');
let btn0 = document.getElementById('btnNumber0');
let btnsum = document.getElementById('btnSumption');
let btnmin = document.getElementById('btnMines');
let btnequl = document.getElementById('btnEqual');
let btnmulti = document.getElementById('btnMulti');
let btndivider = document.getElementById('btnDivider');
let firstNumber = null;
let secondNumber = 0;
let clickBtn = null;
let oparator = []


btn1.onclick = NumberHandler;
btn2.onclick = NumberHandler;
btn3.onclick = NumberHandler;
btn4.onclick = NumberHandler;
btn5.onclick = NumberHandler;
btn6.onclick = NumberHandler;
btn7.onclick = NumberHandler;
btn8.onclick = NumberHandler;
btn9.onclick = NumberHandler;
btn0.onclick = NumberHandler;
btnsum.onclick = NumberHandler;
btnmin.onclick = NumberHandler;
btnequl.onclick = NumberHandler;
btnmulti.onclick = NumberHandler;
btndivider.onclick = NumberHandler;

