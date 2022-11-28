
    var a=parseInt(prompt("Enter a table value")) ;
    var n=prompt("enter length");
    var m=typeof(a);
   
    if(m == 'number')
    {
        if(a<=1 || n<=0)
        {
            alert("Enter greater than zero value");
        }
        else{
            var res=0;
            for(i=1;i<n;i++)
             {
                var res=res+a;
                console.log(m);
                }
        }
    }
    
    

