
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