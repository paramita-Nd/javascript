document.getElementById("name").onkeypress = function(event){
    document.getElementById("show").innerHTML="presskey="+event.key;
    if(event.key >= 0  && event.key <=9){
        event.preventDefault();
    }
};