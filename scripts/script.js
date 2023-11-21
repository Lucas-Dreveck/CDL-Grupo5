
// Header

var topicos = document.getElementById("topicos");
var showSideBar = false;
var menu = document.getElementById("menu");
function toggleSideBar() {
    showSideBar = !showSideBar;
    console.log(showSideBar);
    if (showSideBar) {
        topicos.style.marginTop = '0vw'
        topicos.style.animationName = 'showSideBar'
        menu.style.opacity = '0'
    }
    else {
        topicos.style.marginTop = '-150vw'
        topicos.style.animationName = ''
        menu.style.opacity = '1'
    }
}


// Carrossel dos cursos




const carousel = document.querySelector(".carrossel_cursos");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;


const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}
const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
}
const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('touchstart', dragStart);
carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('touchmove', dragging);
document.addEventListener('mouseup', dragStop);
document.addEventListener('touchend', dragStop);
