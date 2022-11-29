
function calcs(){
    var n = parseInt(document.getElementById('number').value);
    var temp = n;
    var count = rem = res = pal= 0;
    while (n != 0) {
      count = count + 1;
      n = parseInt(n / 10);
    }
    n = temp;
    while (n != 0) {
      rem = n % 10;
      
      pal=parseInt((pal*10)+rem);
      res = res + Math.pow(parseInt(rem), count);
      n = parseInt(n / 10);
     
    }
    console.log(pal);
    console.log(typeof(pal));
    if (temp == res && temp == pal) {
        document.getElementById('result').innerHTML='Armstrong Number and Palindrome';
    }
    else if(pal==temp){
        document.getElementById('result').innerHTML='Only Palindrome';
    }
    else if(temp == res){
        document.getElementById('result').innerHTML='Only Armstrong';
    }
     else {
        document.getElementById('result').innerHTML="Not a Armstrong Number and palindrome";
    }
    
    document.getElementById('enteredNumber').innerHTML=temp;
    }