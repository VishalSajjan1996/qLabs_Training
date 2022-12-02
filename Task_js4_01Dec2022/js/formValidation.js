    var edu='';
    var check='';
    var total='';
    function rad1()
    {
        document.getElementById('cgpa').disabled=false;
        document.getElementById('10th').setAttribute("value","10th");
    }
    function rad2()
    {
        document.getElementById('cgpa').disabled=false;
        document.getElementById('puc').setAttribute("value","PUC/Diploma");
    }
    function rad3()
    {
        document.getElementById('cgpa').disabled=false;
        document.getElementById('be').setAttribute("value","BE/BTech");
    }
   
    function validate(){
        var firstName = document.getElementById('firstName').value;
        var secondName = document.getElementById('secondName').value;
        var marks = document.getElementById('cgpa').value;
        var emailId = document.getElementById('email').value;
        var education1 = document.getElementById('10th').getAttribute('value','10th');
        var education2 = document.getElementById('puc').getAttribute('value','PUC/Diploma');
        var education3 = document.getElementById('be').getAttribute('value','BE/BTech');
        if(education1 !=null)
        {
            edu=education1;
        }
        else if(education2 != null)
        {
            edu=education2;
        }
        else if(education3 != null)
        {
           edu=education3;
        }
       

        var n1 = document.getElementById("danceing");
        var n2 = document.getElementById("swiming");
        var n3 = document.getElementById("camping");
        var n4 = document.getElementById("reading");
        var n5 = document.getElementById("photography");
        var n6 = document.getElementById("singing");
        var n7 = document.getElementById("fittnes");
        var n8 = document.getElementById("trucking");
        var n9 = document.getElementById("playing_sports");
        var n10 = document.getElementById("watching_tv");
        // var s=n1.checked;
        // console.log(s);
        // console.log(n1.value);
        var arr=[n1,n2,n3,n4,n5,n6,n7,n8,n9,n10];
        // console.log(arr);
        // console.log(arr[0].checked);
        for(var i=0;i<arr.length;i++)
        { if(arr[i].checked==true)
            {
                // console.log(arr[i].value);
            switch(i)
            {
                case 0:
                    check=n1.value;
                    break;
                case 1:
                    check=n2.value;
                    break;
                case 2:
                    check=n3.value;
                    break;
                case 3:
                    check=n4.value;
                    break;
                case 4:
                    check=n5.value;
                    break;
                case 5:
                    check=n6.value;
                    break;
                case 6:
                    check=n7.value;
                    break;
                case 7:
                    check=n8.value;
                    break;
                case 8:
                    check=n9.value;
                    break;
                case 9:
                    check=n10.value;
                    break;
                    
            }
            total=total+", "+check;
        }
            
        }
       
        console.log(total);
        var a=`Hi hr,
        My name is ${firstName}, ${secondName},
        I have completed ${edu} with ${marks} % or cgpa,
        and my email ID is "${emailId}",
        and my hobbies are ${total}.`
        document.getElementById("art").innerHTML=a;
        console.log(a);
       
    }
