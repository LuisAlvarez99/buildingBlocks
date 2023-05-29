let explosives = document.getElementsByClassName("explosives");
let boxSides = document.getElementsByTagName("span");
let colors = ["red","blue","green","yellow"];
let zin = 4;
let degrees = 30;

console.log("Working...");
console.log(boxSides);

let topSpace = 260;

for (let i = 0; i < explosives.length; i++) {
    const explosive = explosives[i];
    explosive.style.margin = 0;
    topSpace -= 30
    explosive.style.top = `${topSpace}px`;
    console.log(explosive);      
}
for (let i = 0; i < boxSides.length; i++) {
    const box = boxSides[i];
    degrees +=30;
    topSpace -= 95;
    zin -= 1;
    box.style.position = "relative";
    box.style.top = `${topSpace}px`;
    box.style.left = `${topSpace}px`;
    box.style.zIndex = zin;
    box.style.backgroundColor = `${colors[i]}`;
    box.style.transform = `translateX(${degrees}px)`;
}