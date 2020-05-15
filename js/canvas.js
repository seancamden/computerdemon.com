var wpCanvas = function (form) {
  var canvas = document.getElementById("square"); 
  var context = canvas.getContext("2d");
  var corna = parseInt(form.corna.value);
  var cornb = parseInt(form.cornb.value);
  var side = parseInt(form.side.value);
  var color3 = form.color3.value;
  var color2 = form.color2.value;
  function draw_square(x,y,h,w,c) {
    context.fillStyle = c;
    context.fillRect(x,y,h,w);
  }
  for (var row = 0; row < 200; row += 1) {
    for (var col = 0; col < 600; col += 1) {
      var x = ((corna + row) * (side / 100));
      var y = ((cornb + col) * (side / 100));
      var c = (Math.pow(x,2) + Math.pow(y,2));
      if (1&c) {
        draw_square(col,row,1,1,color2);
      } else {
        draw_square(col,row,1,1,color3);
      }
    }
  }
}
