


function getCount(el)
{
    var count = el.value.length;
    console.log(count);
    var answer = document.getElementById("answer1");
    answer.innerHTML = "Количество символов: " + count;
}


function getTextInfo(el)
{   
    var reg = /\n/g;

    var signCount = el.value.replace(reg, '').length;
    var wordNoSpaceCount = el.value.replace(reg, '').split(' ').length;
    var textCount = el.value.split('\n').length;
    
    var answer1= document.getElementById("signCountTask2")
    var answer2= document.getElementById("wordNoSpaceCountTask2")
    var answer3= document.getElementById("textCountTask2")
    
    answer1.innerHTML = "Количество символов:" + signCount;
    answer2.innerHTML = "Количество слов:" + wordNoSpaceCount;
    answer3.innerHTML = "Количество строк:" + textCount;
}

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


const swiper = new Swiper('.swiper', {
   
    
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  
  })



/*
function clock() {
var d = new Date();
var month_num = d.getMonth()
var day = d.getDate();

month=new Array("января", "февраля", "марта", "апреля", "мая", "июня",
"июля", "августа", "сентября", "октября", "ноября", "декабря");
if (day <= 9) day = "0" + day;

date_time = "Сегодня: " + day + " " + month[month_num] + " " + d.getFullYear() +
" года.&nbsp;&nbsp;&nbsp";
if (document.layers) {
 document.layers.doc_time.document.write(date_time);
 document.layers.doc_time.document.close();
}
else document.getElementById("real_time").innerHTML = date_time;
 setTimeout("clock()", 1000);
}

clock();
*/

var daySelect = document.querySelector("#day-select");
            var monthSelect = document.querySelector("#month-select");
            var yearSelect = document.querySelector("#year-select");

            var monthsR = [" января ", " февраля ", " марта ", " апреля ", " мая ", " июня ", " июля ", " августа ", " сентября ", " октября ", " ноября ", " декабря "];

            var todayLabel = document.querySelector("#today");
            todayLabel.innerHTML = "<span>Сегодня:</span> " + new Date().getDate() + monthsR[new Date().getMonth()] + new Date().getFullYear() + " года";
            var dateDiffLabel = document.querySelector("#event-happened");

            for (let index = new Date().getFullYear(); index >= 1900; index--) {
                yearSelect.add(new Option(index, "y" + index));
            }
            updateDayCount();
            showDateDiff();

            monthSelect.onchange = function () {
                updateDayCount();
                showDateDiff();
            }
            yearSelect.onchange = function () {
                updateDayCount();
                showDateDiff();
            }
            daySelect.onchange = function () {
                showDateDiff();
            }

            function updateDayCount() {
                var dayCount = 33 - new Date(new Date().getFullYear() - yearSelect.options.selectedIndex, monthSelect.options.selectedIndex, 33).getDate();
                var selectedDayIndex = 0;
                if (daySelect.options.length > 1) {
                    selectedDayIndex = daySelect.options.selectedIndex;
                    if (selectedDayIndex > dayCount - 1) {
                        selectedDayIndex = dayCount - 1;
                    }
                }
                removeOptions(daySelect);
                for (let index = 0; index < dayCount; index++) {
                    daySelect.add(new Option(index + 1, "d" + index));
                }
                daySelect.options.selectedIndex = selectedDayIndex;
            }
            function removeOptions(selectElement) {
                var i, L = selectElement.options.length - 1;
                for (i = L; i >= 0; i--) {
                    selectElement.remove(i);
                }
            }
            function showDateDiff() {
                var timePassed = passed(daySelect.options.selectedIndex + 1,
                    monthSelect.options.selectedIndex,
                    (new Date().getFullYear() - yearSelect.options.selectedIndex),
                    new Date().getDate(), new Date().getMonth(), new Date().getFullYear());

                diffInDays = timePassed[2];
                diffInMonth = timePassed[1];
                diffInYears = timePassed[0];

                var resultString = "Событие произошло: <span>";
                if (diffInDays == 0 && diffInMonth == 0 && diffInYears == 0) {
                    dateDiffLabel.innerHTML = "Событие произошло <span>сегодня</span>";
                } else if (diffInDays < 0) {
                    dateDiffLabel.innerHTML = "Событие <span>еще не произошло</span>";
                } else {
                    if (diffInYears != 0) {
                        resultString += " " + diffInYears + " лет,";
                    }
                    if (diffInMonth != 0) {
                        resultString += " " + diffInMonth + " месяцев,";
                    }
                    if (diffInDays != 0) {
                        resultString += " " + diffInDays + " дней ";
                    }
                    resultString = resultString.substring(0, resultString.length - 1)
                    resultString += "</span> назад";
                    dateDiffLabel.innerHTML = resultString;

                }
            }

            function passed(d, m, g, dd, mm, gg) {
                var a = new Date(g, m - 1, d, 0, 0, 0, 0), b = new Date(gg, mm - 1, dd, 0, 0, 0, 0);
                for (m = 0; ; m++) {
                    g = new Date(a.getFullYear(), a.getMonth() + 2, 0);
                    g.getDate() > d && g.setDate(d);
                    if (g > b) break;
                    a = g
                }
                d = b - a;
                d = Math.round(d / 864E5);
                g = Math.floor(m / 12);
                m = m % 12;
                return [g, m, d]
            }

var rectangle = document.querySelector(".rectangle");
var rectangleContainer = document.querySelector("#task7-container")
rectangle.style.marginTop = (rectangleContainer.clientHeight - rectangle.clientHeight) / 2 + "px";

document.addEventListener('click', (e) => {
    const withinBoundaries = e.composedPath().includes(rectangle);

    if (!withinBoundaries) {
        rectangle.classList.remove("rectangle-selected");
    } else {
        rectangle.classList.add("rectangle-selected");
    }
})

rectangle.addEventListener("keydown", editSize);
function editSize(key) {
    switch (key.keyCode) {
        case 37:
            rectangle.style.width = (rectangle.offsetWidth - 10) + "px";
            key.preventDefault()
            break;
        case 38:
            rectangle.style.height = (rectangle.offsetHeight + 10) + "px";
            rectangle.style.marginTop = (rectangleContainer.clientHeight - rectangle.clientHeight) / 2 + "px";
            key.preventDefault()
            break;
        case 39:
            rectangle.style.width = (rectangle.offsetWidth + 10) + "px";
            key.preventDefault()
            break;
        case 40:
            rectangle.style.height = (rectangle.offsetHeight - 10) + "px";
            rectangle.style.marginTop = (rectangleContainer.clientHeight - rectangle.clientHeight) / 2 + "px";
            key.preventDefault()
            break;
        case 48:
            rectangle.style.backgroundColor = "#ffffff";
            break;
        case 49:
            rectangle.style.backgroundColor = "#e74949";
            break;
        case 50:
            rectangle.style.backgroundColor = "#50cb45";
            break;
        case 51:
            rectangle.style.backgroundColor = "#e19743";
            break;
        case 52:
            rectangle.style.backgroundColor = "#eb82f7";
            break;
        case 53:
            rectangle.style.backgroundColor = "#f2f044";
            break;
        case 54:
            rectangle.style.backgroundColor = "#6c6af2";
            break;
        case 55:
            rectangle.style.backgroundColor = "#ffb5e5";
            break;
        case 56:
            rectangle.style.backgroundColor = "#cbffb5";
            break;
        case 57:
            rectangle.style.backgroundColor = "#83f4c9";
            break;
    }
}