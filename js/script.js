const menuBtn = document.getElementById("menuBtn")
const menu = document.getElementsByClassName("main-menu")[0]

menuBtn.onclick = _ => {
    if(!menu.className.includes("show")){
        showMenu()
        menuBtn.innerHTML = 'Close <i class="fa fa-times"></i>'
    } else {
        hideMenu()
        menuBtn.innerHTML = 'Menu <i class="fa fa-bars"></i>'
    }
}

const showMenu = _ => {
    return menu.classList.add("show")
}

const hideMenu = _ => {
    return menu.classList.remove("show")
}