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

var lastWordCount =0;
var maxValue=10;

function validInput4(el)
{
  var checkBoxItem=document.getElementById("checkBoxInputId");
  var sizeElement=el.value.length;
  if(!checkBoxItem.checked)
  {
    validInput(el, "validArea4");
    lastWordCount=sizeElement;
    
  }
  else
  {
        if(sizeElement<=maxValue)
         validInput(el, "validArea4");
  
    else{
         if(sizeElement<lastWordCount)
        {
        validInput(el, "validArea4");
        lastWordCount=el.value.length;
        }
        else
        {
            el.value=el.value.slice(0,(lastWordCount-1));
        }
         }
  }
}
