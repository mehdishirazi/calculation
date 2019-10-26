function NumberHandler(e){
    document.getElementById('result').value += e.currentTarget.value;
    if(e.currentTarget.value === "+" || e.currentTarget.value === "-" || e.currentTarget.value === "*" || e.currentTarget.value === "\/"){
        MultiCalculation();
        oparator.push(e.currentTarget.value);
    }
    else if(e.currentTarget.value === "="){
        EqualButtonPressing();
    }
    else
        return;
}


function MultiCalculation(){
    result = document.getElementById('result').value
    if(firstNumber == null){
        firstNumber = result.substring(0, result.length - 1); 
    }
    oparator.push(firstNumber);
    document.getElementById('result').value = null;
    firstNumber = null;
}


function EqualButtonPressing(){
    secondNumber = document.getElementById('result').value;
    secondNumber = secondNumber.substring(0, secondNumber.length - 1);
    oparator.push(secondNumber);
    secondNumber = null;
    clickBtn = oparator.toString();
    clickBtn = clickBtn.replace(/[,]/g, "");
    result = eval(clickBtn);
    document.getElementById('result').value = null;
    oparator = [];
    alert(result);
}


function ShowingData(){
    showEleman = oparator.toString();
    showEleman = showEleman.replace(/[,]/g, "");
    document.getElementById('conclud').innerHTML = showEleman;
}


function Composer(callback){
    return function(){
    callback(event);
    ShowingData();
    }
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


btn1.onclick = Composer(NumberHandler);
btn2.onclick = Composer(NumberHandler);
btn3.onclick = Composer(NumberHandler);
btn4.onclick = Composer(NumberHandler);
btn5.onclick = Composer(NumberHandler);
btn6.onclick = Composer(NumberHandler);
btn7.onclick = Composer(NumberHandler);
btn8.onclick = Composer(NumberHandler);
btn9.onclick = Composer(NumberHandler);
btn0.onclick = Composer(NumberHandler);
btnsum.onclick = Composer(NumberHandler);
btnmin.onclick = Composer(NumberHandler);
btnequl.onmousedown = Composer(NumberHandler);
btnmulti.onclick = Composer(NumberHandler);
btndivider.onclick = Composer(NumberHandler);

