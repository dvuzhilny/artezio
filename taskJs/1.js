function getCount(el)
{
    var count = el.value.length;
    console.log(count);
    var answer = document.getElementById("answer1");
    answer.innerHTML = "Количество символов: " + count;
}
