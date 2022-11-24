// RECTANGLE
// Perimeter: p = 2l + 2w
// Area: A = lw
function calculate()
{
    var l=document.getElementById('num1').value;
    var w=document.getElementById('num2').value;

  var p = 2*l +2*w;
  console.log("Perimeter="+p);
  var A = l*w;
  console.log("Area="+A);

}