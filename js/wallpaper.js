// Get canvas element and its context 
var canvas = document.getElementById("square"); 
var context = canvas.getContext("2d");
var corna = 1; ///
var cornb = 1; //-These are just random numbers.
var side = 11; ///
var color3 = '#bbb';
var color2 = '#ff0';
var draw_square = function (x,y,h,w,c) {
  context.fillStyle = c;
  context.fillRect(x,y,h,w);
}
for (var row = 0; row < 600; row += 1) {
  for (var col = 0; col < 200; col += 1) {
    var x = ((corna + row) * (side / 100.0));
    var y = ((cornb + col) * (side / 100.0));
    var c = (Math.pow(x,2) + Math.pow(y,2));
    if ((Math.floor(c) % 2) == 0) {
      draw_square(row,col,1,1,color2);
    } else {
      draw_square(row,col,1,1,color3);
    }
  }
}
