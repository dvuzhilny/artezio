function validInput(el,validArea)
{
    var answer = document.getElementById(validArea);
    var value=10 - el.value.length;
    if(value<0)
    {
        answer.style.color= "red";
        answer.innerHTML = "&#10006 Превышено символов"  +value*(-1);
    }
    else
    {
        answer.style.color= "black";
        answer.innerHTML = "Осталось символов"  +value;
    }
    console.log("Проверка ввода");
    console.log(answer);
}