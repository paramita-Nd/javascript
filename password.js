function valid()
{
let pass = document.getElementById("were").value;
let k = false;

for(let i = 0;i<pass.length;i++)
{
    if(pass[i] >= '0' && pass[i] <= '9')
    {
        k = true;
    }
}

if(pass.length < 8)
{
    document.getElementById("message").innerHTML = "too short";
}

else if (!k)
{
    document.getElementById("message").innerHTML = "add a number";
}

else{
    document.getElementById("message").innerHTML = "valid password";
}
}