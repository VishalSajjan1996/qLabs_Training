function calcs(){
var n = parseInt(document.getElementById('number').value);
var temp = n;
var count = rem = res = 0;
while (n != 0) {
  count = count + 1;
  n = parseInt(n / 10);
}
n = temp;
while (n != 0) {
  rem = n % 10;
  res = res + Math.pow(parseInt(rem), count);
  n = parseInt(n / 10);
}
if (temp == res) {
    document.getElementById('result').innerHTML='Armstrong Number';
}
 else {
    document.getElementById('result').innerHTML="Not a Armstrong Number";
}

document.getElementById('enteredNumber').innerHTML=temp;
}