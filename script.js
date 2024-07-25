
let boxes=document.querySelectorAll(".box");
let resetbox=document.querySelector("#reset");
let newgame =document.querySelector("#newreset");
let mascotainer =document.querySelector(".newConatair");
let mesge=document.querySelector("#masg");
 let turn0=true;
 let count =0;
 const winPatterns=[
    [0,1,2],[0,3,6],[0,4,8],
    [1,4,7],[2,5,8],[2,4,6],
    [3,4,5],[6,7,8],
 ];
 
 const resetgame =()=>{
    turn0=true;
    count =0;
    enableBox();
    mascotainer.classList.add("hide");
    newgame.classList.add("hide");
    resetbox.classList.remove("hide");
    boxes.forEach(box => {
        box.innerText = ""; // Clear all X's and O's from boxes
    });
 };
 boxes.forEach((box)=>
{
    newgame.classList.add("hide");

    box.addEventListener("click", () =>{
        if(turn0){
            box.innerText="O";
            turn0= false;
        }else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        count++
        let iswinners= checkWinner();
        if(count===9 && ! iswinners){
            gameDraw();
        }
       
    });
});

const gameDraw =() =>{
    mesge.innerText='Game was Draw.';
    mascotainer.classList.remove("hide");
    disableBox();
};

const disableBox =()=>{
    for(let box of boxes){
        box.disabled=true;
    }
};
const enableBox =()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};
const showWinner = (winner) => {
      mesge.innerText=`Congratulation,Winner is, ${winner}`;
    mascotainer.classList.remove("hide");
    newgame.classList.remove("hide");
     resetbox.classList.add("hide");
     
      disableBox();
};
const checkWinner = ()=>{
    for(let patten of winPatterns){
          let post1=  boxes[patten[0]].innerText;
          let post2=  boxes[patten[1]].innerText;
          let post3=  boxes[patten[2]].innerText;
           if(post1 != "" && post2 !="" && post3 != ""){
          if (post1 ===  post2 && post2 === post3){
            
               showWinner(post1);
               return true;
              
          }
         }
    }
};
newgame.addEventListener("click", resetgame);
resetbox.addEventListener("click", resetgame);