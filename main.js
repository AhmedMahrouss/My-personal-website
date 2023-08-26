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
icons[5].onclick = ()=>{
    icons.forEach(icon=>{
        icon.classList.remove('active')
    })
    icons[5].classList.add('active');
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

let images = ["IMG_0093.jpg","IMG_0133.jpg","IMG_0129.jpg","IMG_0147.jpg"];
setInterval(()=>{
    document.querySelector(".imgheader").innerHTML = `<img src="images/${images[Math.floor(Math.random()*4)]}"   />`
},3000)

