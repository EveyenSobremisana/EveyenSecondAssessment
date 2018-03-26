var color =document.getElementById("color");

////LVL 2a////

color.addEventListener("change", function()  {
    document.getElementById("preview").style.backgroundColor = color.value;
});

////LVL 2b////
document.getElementById("numberBut").addEventListener("click", function() {
     changeType("number");
});

document.getElementById("rangeBut").addEventListener("click", function() {
     changeType("range");
});

////LVL 2c////
document.getElementById("range1").addEventListener("change", function() {
    document.getElementById("hair").style.width= document.getElementById("range1").value + "%";
});

document.getElementById("range2").addEventListener("change", function() {
    document.getElementById("eyes").style.width= document.getElementById("range2").value + "%";
});

document.getElementById("range3").addEventListener("change", function() {
    document.getElementById("nose").style.width= document.getElementById("range3").value + "%";
});

document.getElementById("range4").addEventListener("change", function() {
    document.getElementById("mouth").style.width= document.getElementById("range4").value + "%";
});


////LVL 4a////

document.getElementById("add").addEventListener("click", function() {
    createFace();    
});

////LVL 4b////


document.getElementById("randomBut").addEventListener("click", function() {
    randomFace() 
});

////LVL 5a////
 var number=0;
function createFace() {
    
    var newDiv= document.createElement("div")
   
    number++;
    newDiv.className = "NewDiv"
    newDiv.id= number;
    newDiv.style.backgroundColor= document.getElementById("preview").style.backgroundColor;
    
    var newI1= document.createElement("img");
    var newI2= document.createElement("img");
    var newI3= document.createElement("img");
    var newI4= document.createElement("img");
    function myDivD(id) {
            document.getElementById(id).remove();
        }
    newDiv.addEventListener("click", function(){
        myDivD(newDiv.id);
    
    })
    newI1.src= document.getElementById("hair").src;
    newI1.className="items"
    newI1.style.cssText=document.getElementById("hair").style.cssText;
    newDiv.appendChild(newI1);
    
    newI2.src= document.getElementById("eyes").src;
    newI2.className="items"
    newI2.style.cssText=document.getElementById("eyes").style.cssText;
    newDiv.appendChild(newI2);

    newI3.src= document.getElementById("nose").src;
    newI3.className="items"
    newI3.style.cssText=document.getElementById("nose").style.cssText;
    newDiv.appendChild(newI3);
    
    newI4.src= document.getElementById("mouth").src;
    newI4.className="items"
    newI4.style.cssText=document.getElementById("mouth").style.cssText;
    newDiv.appendChild(newI4);


    document.getElementById("display").appendChild(newDiv);
    


}

function randomFace() {
    var RandomHair = Math.round(Math.random()*2)+1;
    var RandomEyes = Math.round(Math.random()*2)+1;
    var RandomNose = Math.round(Math.random()*2)+1;
    var RandomMouth = Math.round(Math.random()*2)+1;
    
    var r = Math.round(Math.random ()*255);
    var g = Math.round(Math.random ()*255);
    var b = Math.round(Math.random ()*255);
    
    var hairR = Math.round(Math.random ()*70);
    var eyesR = Math.round(Math.random()*40);
    var noseR = Math.round(Math.random()*30);
    var mouthR = Math.round(Math.random()*35);
    
    //random face//
    document.getElementById("hair").src="img/hair" + RandomHair +".png";
    document.getElementById("eyes").src="img/eyes" + RandomEyes +".png";
    document.getElementById("nose").src="img/nose" + RandomNose +".png";
    document.getElementById("mouth").src="img/mouth" + RandomMouth +".png";
    
    //random width
    document.getElementById("hair").style.width = hairR + "%";
    document.getElementById("eyes").style.width = eyesR + "%";
    document.getElementById("nose").style.width = noseR + "%";
    document.getElementById("mouth").style.width = mouthR + "%";
    
   //change the input value
    document.getElementById("range1").value = hairR;
    document.getElementById("range2").value = eyesR;
    document.getElementById("range3").value = noseR;
    document.getElementById("range4").value = mouthR;
    
    
    //random color
     document.getElementById("preview").style.backgroundColor = "rgb("+r+","+g+","+b+")";
}
    
    //change the color value 
    //document.getElementById("color").value = document.getElementById("preview").style.backgroundColor;
////LVL 5b////

function changeType(type) {
    document.getElementById("range1").type =type;
    document.getElementById("range2").type =type;
    document.getElementById("range3").type =type;
    document.getElementById("range4").type =type;
};

////LVL 6////

document.getElementById("autoBut").addEventListener("click", function() {
   
      var myInterval =  setInterval(function() {
            randomFace();
            createFace();
        },500);
    document.getElementById("stopBut").addEventListener("click", function(){
 
    clearInterval(myInterval);
});

});

    
    




































