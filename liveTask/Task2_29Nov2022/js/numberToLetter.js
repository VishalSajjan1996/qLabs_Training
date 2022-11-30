function res(){
    var total='';
    var num = document.getElementById('number').value;
    console.log(num);
     length=num.length;
   for(var i=0;i<length;i++)
   { 
    switch(parseInt(num[i]))
    {
        case 0:
            res='Zero';
            break;
        case 1:
            res='One';
            break;
        case 2:
            res='Two';
            break;
        case 3:
            res='Three';
            break;
        case 4:
            res='Four';
            break;
        case 5:
            res='Five';
            break;
        case 6:
            res='Six';
            break;
        case 7:
            res='Seven';
            break;
        case 8:
            res='Eight';
            break;
        case 9:
            res='Nine';
            break;   
    }
     total = total + res;
     console.log(total);
}
    document.getElementById("enteredNumber").innerHTML=num;
    document.getElementById("result").innerHTML=total;
    document.getElementById('number').value='';

}