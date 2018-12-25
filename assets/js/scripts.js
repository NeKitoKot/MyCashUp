var canv = document.getElementById("canvas"),
    ctx    = canv.getContext("2d"),
    w = 500,
    h = 500;

  var mw = 100;
  var mh = 100;
  var e = true;
  var v = '' ;

canv.height = h;
canv.width = w;

class Item {
  constructor (mw, mh, e, v){
    this.maxWidth = mw;
    this.maxHeight = mh;
    this.empty = e;
    this.val = v;   
  }
}

var items = [];

for (var i = 0; i<5; i++) {
  for(var j = 0; j<5; j++)
    {
      let item = new Item(mw,mh,false,''  );
      mw += 100;
      if(mw > 500) mw = 100;
      items.push(item); 
    }
    mh += 100;
   
};

initial = function(arr){
  for(var i = 0; i < 25; i++) {
      ctx.beginPath();
      ctx.strokeRect  (0, 0, items[i].maxWidth,items[i].maxHeight);
      ctx.fill();
  };
}

console.log(items);

initial(items);

canv.addEventListener('mousedown' , function(e) {
  console.log(e.clientX, e.clientY);
  for (var i = 0; i < 5; i++ )
  {
   
    for(var j = 0; j < 5; j++)
    {
      if ( (e.clientX < items[j].maxWidth) && (e.clientX > items[j]).maxWidth - 99 ) {
        console.log(j);
      };
    }
    if ( (e.clientY < items[i].maxHeight) && (e.clientY > items[i].maxWidth - 99 ) )
    {
      console.log(i);
    }
  }
    
  
});


// for(var i = 0; i < 5; i++) {
 

// canv.addEventListener('mousedown' , function(e) {
//   console.log(e.clientX, e.clientY);
//       for(var i = 0; i<5; i++){
//         if (items[i].maxHeight <= 1000)  {
//             ctx.beginPath();
//             //ctx.arc(e.clientX, e.clientY, 10, 0, Math.PI*2 );
//             ctx.strokeRect(200, 200, items[i].maxWidth,items[i].maxHeight);
//             ctx.fill();
//             console.log(items[i]);
//             for( var j = 0; j<5; j++) {
//               if (items[j].maxWidth <= 1000){
//                 ctx.beginPath();
//                 //ctx.arc(e.clientX, e.clientY, 10, 0, Math.PI*2 );
//                 ctx.fillStyle = 'red'
//                 ctx.fillRect(200, 200, items[j].maxWidth,items[j].maxHeight);
//                 console.log(items[j].maxHeight);  
//                 ctx.fill();
//               };
//             };
//       };
//     };
// });




// document.getElementById("Rvalue").textContent = 'R: ' + R;
// document.getElementById("rvalue").textContent = 'r: ' + r;
// document.getElementById("dvalue").textContent = 'd: ' + d;
// document.getElementById("tvalue").textContent = 't: ' + t;
// document.getElementById("t").value = t;

// document.getElementById("color").onchange = function(){
//   myColor = this.value;
// };

// document.getElementById("R").oninput = function(){
//   ctx.clearRect(0,0,w,h);
//   R = this.value;
//   document.getElementById("Rvalue").textContent = 'R: ' + R;
// };


// document.getElementById("r").oninput = function(){
//   ctx.clearRect(0,0,w,h);
//   r = this.value;
//   document.getElementById("rvalue").textContent = 'r: ' + r;
// };

// document.getElementById("d").oninput = function(){
//   ctx.clearRect(0,0,w,h);
//   d = this.value;
//   document.getElementById("dvalue").textContent = 'd: ' + d;
// };

// document.getElementById("t").oninput = function(){
//   ctx.clearRect(0,0,w,h);
//   t = this.value;
//   document.getElementById("tvalue").textContent = 't: ' + t;
// };


// canv.height = h;
// canv.width = w;
// function spiro(){
//   var x = (R - r) * Math.cos(teta) + d * Math.cos( (R - r) * teta/r );
//   var y = (R - r) * Math.sin(teta) - d * Math.sin( (R - r) * teta/r );
//   teta += 0.1;
//   ctx.fillStyle = myColor;
//   ctx.beginPath();
//   ctx.arc(300+x, 300+y, 4, 0, Math.PI * 2);
//   ctx.fill();
//   timer = setTimeout(spiro, t);
// }

// spiro();