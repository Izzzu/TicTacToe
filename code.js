var tab = ['X', 'O'];
var turn = tab[Math.floor(Math.random()*2)];
var square = new Array(9);
var win = false;

function check()
{
    if(square[0] == 'X' && square[1] == 'X' && square[2] == 'X' || square[3] == 'X' && square[4] == 'X' && square[5] == 'X' || square[6] == 'X' && square[7] == 'X' && square[8] == 'X' ||
       square[0] == 'X' && square[3] == 'X' && square[6] == 'X' || square[1] == 'X' && square[4] == 'X' && square[7] == 'X' || square[2] == 'X' && square[5] == 'X' && square[8] == 'X' ||
       square[0] == 'X' && square[4] == 'X' && square[8] == 'X' || square[2] == 'X' && square[4] == 'X' && square[6] == 'X')
    {
        win = true;
        document.getElementById("win").innerHTML = "Wygrywa krzyżyk!";
    }
    else if(square[0] == 'O' && square[1] == 'O' && square[2] == 'O' || square[3] == 'O' && square[4] == 'O' && square[5] == 'O' || square[6] == 'O' && square[7] == 'O' && square[8] == 'O' ||
            square[0] == 'O' && square[3] == 'O' && square[6] == 'O' || square[1] == 'O' && square[4] == 'O' && square[7] == 'O' || square[2] == 'O' && square[5] == 'O' && square[8] == 'O' ||
            square[0] == 'O' && square[4] == 'O' && square[8] == 'O' || square[2] == 'O' && square[4] == 'O' && square[6] == 'O')
    {
        win = true;
        document.getElementById("win").innerHTML = "Wygrywa kółko!";
    }
    
    if(win)
    {
        for(var i = 0; i < 9; i++)
        {
            var element = document.getElementById("s" + i);
            element.setAttribute("onclick", ";");
        }
    }
}

function put(num)
{
    var element = document.getElementById("s" + num);
    
    element.innerHTML = turn;
    element.setAttribute("onclick", ";");
    square[num] = turn;
    
    if(turn == 'X')
    {
        turn = 'O';
    }
    else
    {
        turn = 'X';
    }
    
    check();
}

function start()
{
    var train = "";
    var element = document.getElementById("container");
    
    for(var i = 0; i < 9; i++)
    {
        if((i+1) % 3 == 0)
        {
            train += '<div class="square" id="s'+i+'" onclick="put('+i+')"></div><div style="clear: both;"></div>';
        }
        else
        {
            train += '<div class="square" id="s'+i+'" onclick="put('+i+')"></div>';
        }
    }
    
    element.innerHTML = train;
    
    for(var i = 0; i < 9; i++)
    {
        var element = document.getElementById("s" + i);
        
        if(i == 0 || i == 1 || i == 3 || i == 4)
        {
            element.style.borderRight = "none";
            element.style.borderBottom = "none";
            
        }
        else if(i == 2 || i == 5)
        {
            element.style.borderBottom = "none";
        }
        else if(i == 7 || i == 8)
        {
            element.style.borderLeft = "none";
        }
    }
}

window.onload = start;
