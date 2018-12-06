//tic tac toe
{
document.getElementById("11").onclick = function() {
    if(document.getElementById("11").innerText == "-"){
        document.getElementById("11").innerText = document.getElementById("operation").value;
        switcher();
    }
    winchecker('O');
    winchecker('X');
    
};

document.getElementById("12").onclick = function() {
    if(document.getElementById("12").innerText == "-"){
        document.getElementById("12").innerText = document.getElementById("operation").value;
        switcher();
    }
    winchecker('O');
    winchecker('X');
    
};

document.getElementById("13").onclick = function() {
    if(document.getElementById("13").innerText == "-"){
        document.getElementById("13").innerText = document.getElementById("operation").value;
        switcher();
    }
    winchecker('O');
    winchecker('X');
    
};

document.getElementById("21").onclick = function() {
    if(document.getElementById("21").innerText == "-"){
        document.getElementById("21").innerText = document.getElementById("operation").value;
        switcher();
    }
    winchecker('O');
    winchecker('X');
    
};

document.getElementById("22").onclick = function() {
    if(document.getElementById("22").innerText == "-"){
        document.getElementById("22").innerText = document.getElementById("operation").value;
        switcher();
    }
    winchecker('O');
    winchecker('X');
};

document.getElementById("23").onclick = function() {
    if(document.getElementById("23").innerText == "-"){
        document.getElementById("23").innerText = document.getElementById("operation").value;
        switcher();
    }
    winchecker('O');
    winchecker('X');
};

document.getElementById("31").onclick = function() {
    if(document.getElementById("31").innerText == "-"){
        document.getElementById("31").innerText = document.getElementById("operation").value;
        switcher();
    }
    winchecker('O');
    winchecker('X');
    
};

document.getElementById("32").onclick = function() {
    if(document.getElementById("32").innerText == "-"){
        document.getElementById("32").innerText = document.getElementById("operation").value;
        switcher();
    }
    winchecker('O');
    winchecker('X');
};

document.getElementById("33").onclick = function() {
    if(document.getElementById("33").innerText == "-"){
        document.getElementById("33").innerText = document.getElementById("operation").value;
        switcher();
    }
    winchecker('O');
    winchecker('X');
};
}

document.getElementById("reset").onclick = function() {
    var j = 1;
    for(var i = 1; i <= 3; i++){
        while(j <= 3){
            document.getElementById(String(i)+String(j)).innerText = "-";
            j++;
        }
        j = 1;
    }   
    document.getElementById("winner").style.backgroundColor = "gray";
    document.getElementById("winner").innerText = "Tied";  
};

function switcher(){
    if(document.getElementById("operation").value == "X"){
        document.getElementById("operation").value = "O";
    } else if(document.getElementById("operation").value == "O"){
        document.getElementById("operation").value = "X";
    }
}

function winchecker(m){
    var i = 1, win = 0; //win 0 means no win
    var n = String(m);
    while(i <= 3){
        if(document.getElementById(String(i)+String(1)).innerText == n && document.getElementById(String(i)+String(2)).innerText == n && document.getElementById(String(i)+String(3)).innerText == n){
            win = 1;
            break;
        }
        if(document.getElementById(String(1)+String(i)).innerText == n && document.getElementById(String(2)+String(i)).innerText == n && document.getElementById(String(3)+String(i)).innerText == n){
            win = 1;
            break;
        }
        i++;
    }
    if(document.getElementById(String(1)+String(1)).innerText == n && document.getElementById(String(2)+String(2)).innerText == n && document.getElementById(String(3)+String(3)).innerText == n){
        win = 1;
    }
    if(document.getElementById(String(3)+String(1)).innerText == n && document.getElementById(String(2)+String(2)).innerText == n && document.getElementById(String(1)+String(3)).innerText == n){
        win = 1;
    }
    if(win == 1){
        document.getElementById("winner").style.backgroundColor = "green";
        document.getElementById("winner").innerText =  n + " wins!";   
    }
}