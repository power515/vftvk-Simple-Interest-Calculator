function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var amount = principal * years * rate /100;
    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="\<br\>If you deposit <mark>"+principal+"</mark>,\<br\>at an interest rate of <mark>"+rate+"%</mark>\<br\>You will receive an amount of <mark>"+amount+"</mark>,\<br\>in the year <mark>"+year+"</mark>\<br\>"

    
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}

function checkdata(){
      //Create references to the input elements we wish to validate
      var username = document.getElementById("name");
      var emailid   = document.getElementById("email");
      var principal = document.getElementById("principal");

      //Check 
      if(principal.value <= 0){
            alert("Enter a positive number");
            principal.focus();
            return false;
      }
      
}
        
