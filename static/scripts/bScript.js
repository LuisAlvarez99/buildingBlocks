let btn = document.getElementById("btn")
let blocks = document.getElementsByClassName("blocks");
let counter;
let bLen = blocks.length;
let color = ["darkblue","blue","cyan","lime","green","forestgreen","yellow","orange","red"];
btn.onclick = function() {
    for(block of blocks){
        block.style.zIndex = -1;
    }
    bLen = blocks.length;
    indexing();
    foo();
}

let animation = [
    {
        transform: "translateY(-400%)",
    },
    {transform: "translateY(0%)"},
];
let rainbow = [
    {
        backgroundColor: "rgb(255,0,0)",
    },
    {
        backgroundColor: "rgb(255,127,0)",
    },
    {
        backgroundColor: "rgb(255,255,0)",
    },
    {
        backgroundColor: "rgb(127,255,0)",
    },
    {
        backgroundColor: "rgb(0,255,0)",
    },
    {
        backgroundColor: "rgb(0,255,127)",
    },
    {
        backgroundColor: "rgb(0,255,255)",
    },
    {
        backgroundColor: "rgb(0,127,255)",
    },
    {
        backgroundColor: "rgb(0,0,255)",
    },
    {
        backgroundColor: "rgb(127,0,255)",
    },
    {
        backgroundColor: "rgb(255,0,255)",
    },
    {
        transform: "translateY(0%)",
        backgroundColor: "rgb(255,0,127)"
    }

];

let animationTiming = {
    duration: "infinite",
    iteration: 1,
};

function foo(){
    
    setTimeout( function() {
        // for(block of blocks){
        for (counter = 0; counter != blocks.length; counter++) {
            console.log("Counter: ", counter,"\nBlock: ",blocks[counter]);
            blocks[blocks.length-(counter+1)].animate(animation, {
                duration: 3000,
                delay: (counter*550),
                iteration: 1,
            });
        }
        console.log()
        
    },300);
    
}

function indexing(){

    zin=setInterval(() => {
        bLen--;
        console.log(bLen);
        blocks[bLen].style.zIndex = "1";
        if(bLen == 0){
            console.log(bLen);
            clearInterval(zin);
        }
    }, 650);
}


// blocks[0].style.backgroundcolor = blue;