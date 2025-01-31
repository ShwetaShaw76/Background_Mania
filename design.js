let btns = document.querySelectorAll(".box")
let bg = document.querySelector(".dsgimg")
let backgrounds = ["url('https://wallpaperaccess.com/full/944291.jpg')", "url('https://th.bing.com/th/id/OIP.XlzitQh6UDoLKpks9O2rlgHaEo?rs=1&pid=ImgDetMain')", "url('https://images3.alphacoders.com/100/1007428.jpg')", "url('https://wallpapercave.com/wp/wp3113575.jpg')", "url('https://wallpaperaccess.com/full/2130690.jpg')", "url('https://wallpaperaccess.com/full/59110.png')"];

// btns.forEach(e => {
//     e.addEventListener("mouseover", () => {
//         e.style.opacity = "1";
//     })
// })

btns.forEach((e, i) => {
    e.addEventListener("click", () => {
        bg.style.backgroundImage = backgrounds[i];
        bg.style.backgroungRepeat = "no-repeat";
        bg.style.backgroundSize = "cover";
    })
})
