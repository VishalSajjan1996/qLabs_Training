// sum of angles of traingle
// A + B + C =180

function calculate()
{
    var a=document.getElementById('a').value;
    var b=document.getElementById('b').value;
    var c=document.getElementById('c').value;


  var p = a + b + c;
  
  
 if(p==180)
 {
    console.log(p);
 }
else
{
    alert("sum of angles of traingle should be 180")
}
}