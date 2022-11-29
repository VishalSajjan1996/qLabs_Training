var n=parseInt(prompt("Enter a value"));

rem = 0;
res = '';
while(n!=0)
{
    rem = n%10;
    res = (res*10)+rem;
    n=parseInt(n/10);

}
console.log(res);
console.log(typeof(res));

