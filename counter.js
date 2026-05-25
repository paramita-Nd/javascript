let count = 0;
function display()
{
    document.getElementById("count").innerText=count;
}

function increase()
{
    count++;
    display();
}

function decrease()
{
    count--;
    display();
}

function reset()
{
    count = 0;
    display();
}


