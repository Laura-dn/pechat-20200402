function pechat(ev) {
    let x = ev.offsetX,
        y = ev.offsetY,
        pech = document.querySelector("#pechat");

    pech.style.top = y - 50 + "px";
    pech.style.left = x - 50 + "px";
}

document.querySelector("body").addEventListener("click", pechat);