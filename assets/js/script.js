var c = document.getElementById('c1');
var ctx = c.getContext('2d');

ctx.fillStyle = "#aa6522";
ctx.beginPath();
ctx.moveTo(25, 100);
ctx.lineTo(50, 150);
ctx.lineTo(75, 100);
ctx.fill();
ctx.stroke();

ctx.fillStyle="#8a0908";
ctx.beginPath();
ctx.moveTo(25, 100);
ctx.quadraticCurveTo(25, 50, 75, 100);
ctx.fill();
ctx.stroke();
