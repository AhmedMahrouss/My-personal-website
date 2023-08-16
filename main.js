let icons = document.querySelectorAll("a i");

icons[0].onclick=()=>{
    icons.forEach(icon=>{
        icon.classList.remove('active')
    })
    icons[0].classList.add('active');
}
icons[1].onclick = ()=>{
    icons.forEach(icon=>{
        icon.classList.remove('active')
    })
    icons[1].classList.add('active');
}
icons[2].onclick = ()=>{
    icons.forEach(icon=>{
        icon.classList.remove('active')
    })
    icons[2].classList.add('active');
}
icons[3].onclick = ()=>{
    icons.forEach(icon=>{
        icon.classList.remove('active')
    })
    icons[3].classList.add('active');
}
icons[4].onclick = ()=>{
    icons.forEach(icon=>{
        icon.classList.remove('active')
    })
    icons[4].classList.add('active');
}

let close  = document.querySelector(".close");
let msg = document.querySelector(".msg");
let showMsg = document.querySelector(".service .box :nth-child(2)");

showMsg.onclick = ()=>{
msg.style.display = 'block'
document.querySelector(".container").style.filter = 'blur(5px)'
}
close.onclick = ()=>{
    msg.style.display = 'none'
document.querySelector(".container").style.filter = 'blur(0px)'
}
