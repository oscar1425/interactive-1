function skifterFarve(farve) {
   
  document.querySelector(".skifterFarve").style.backgroundColor = farve;
  document.querySelector(".skifterFarve").style.color="white";

}

document.querySelector(".link1").addEventListener("click",function(){
  skifterFarve("red");
  })
  


  
document.querySelector(".link2").addEventListener("click",function(){
  skifterFarve("blue");
  })

  
document.querySelector(".link3").addEventListener("click",function(){
  skifterFarve("pink");
  })

  
document.querySelector(".link4").addEventListener("click",function(){
  skifterFarve("purple");
  })

// SkifterFarve("green");
