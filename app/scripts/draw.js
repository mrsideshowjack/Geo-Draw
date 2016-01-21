  context = document.getElementById('canvas').getContext("2d");
  canvas = document.getElementById('canvas');

  var colorPurple = "#cb3594",
      colorGreen = "#659b41",
      colorYellow = "#ffcf33",
      colorBrown = "#986928",
      curColor = colorPurple,
      clickColor = new Array();

 $('#colourbtn').click(function(){
        $('#colour').toggle();
    });
 $('#sizebtn').click(function(){
        $('#size').toggle();
    });
 $('#eraserbtn').click(function(){
        curColor = "#fff";
    });
 $('#sendbtn').click(function(){
    alert("Feature under construction!");
    var canvasImg = context.getImageData(0, 0, canvas.width, canvas.height);
  // var myDataRef = new Firebase('https://geo-sketch.firebaseio.com/');
  //   var data = context.getImageData(0, 0, canvas.width, canvas.height);
  //   var JSONdata = JSON.stringify(data);
  //   console.log(data);
  //   console.log(JSONdata);

  //   myDataRef.set(JSONdata);
    });


  $('#PurpleColor').mousedown(function(e){
    curColor = colorPurple;
  });
  $('#GreenColor').mousedown(function(e){
    curColor = colorGreen;
  });
  $('#YellowColor').mousedown(function(e){
    curColor = colorYellow;
  });
  $('#BrownColor').mousedown(function(e){
    curColor = colorBrown;
  });
  

  canvas.onTapDown function(e){
  console.log("gogo");
  var mouseX = e.pageX - this.offsetLeft;
  var mouseY = e.pageY - this.offsetTop;
  
  paint = true;
  addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop);
  redraw();
};

  $('#canvas').on("vmousemove",function(e){
  if(paint){
    addClick(e.pageX - this.offsetLeft, e.pageY - this.offsetTop, true);
    redraw();
  }
});

  $('#canvas').on("vmouseup",function(e){
  paint = false;
});

  $('#canvas').on("vmouseleave",function(e){
  paint = false;
});

var clickX = new Array();
var clickY = new Array();
var clickDrag = new Array();
var clickRadius = new Array();
var paint;

function addClick(x, y, dragging, radius)
{
  clickX.push(x);
  clickY.push(y);
  clickDrag.push(dragging);
  clickRadius.push(document.getElementById("sizeRange").value);
  clickColor.push(curColor);
}

function clearCanvas(){
clickX = new Array();
clickY = new Array();
clickDrag = new Array();
context.clearRect(0, 0, canvas.width, canvas.height); 
}

function redraw(){
  context.clearRect(0, 0, context.canvas.width, context.canvas.height); // Clears the canvas
  context.lineJoin = "round";
      
  for(var i=0; i < clickX.length; i++) {    
    context.beginPath();
    if(clickDrag[i] && i){
      context.moveTo(clickX[i-1], clickY[i-1]);
     }else{
       context.moveTo(clickX[i]-1, clickY[i]);
     }
     context.lineTo(clickX[i], clickY[i]);
     context.closePath();
     context.strokeStyle = clickColor[i];
     context.lineWidth = clickRadius[i];
     context.stroke();
  }
}

