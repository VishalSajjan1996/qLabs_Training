// TRIANGLE
// Perimeter: p = a + b + c
// Area: A = (1/2) * b * h
function calculate()
{
    var b=document.getElementById('b').value;
    var h=document.getElementById('h').value;
    var a=document.getElementById('a').value;
    var c=document.getElementById('c').value;


  var p = a + b + c;
  console.log("Perimeter="+p);
  var A = (1/2)*b*h;
  console.log("Area="+A);

}