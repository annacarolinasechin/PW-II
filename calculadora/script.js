function Calcular(op){
    
    let n1 = document.getElementById("txtnum1").value;
    let n2 = document.getElementById("txtnum2").value;

    let result = 0;
    
    if (isNaN(n1)){
        alert ("O primeiro valor não é numérico, tente novamente!")

        document.getElementById("txtnum1").value="";
        document.getElementById("txtnum1").focus();
    }
    else if (isNaN(n2)){
        alert ("O segundo valor não é numérico, tente novamente!");
        document.getElementById("txtnum2").value="";
        document.getElementById("txtnum2").focus();
    }

    else{
        n1 = parseFloat(n1);
        n2 = parseFloat(n2);
    
        if (op == '+') 
            result = n1+n2;
        
        else if (op == '-')
            result = n1-n2;
        
        else if (op == 'x') 
            result = n1*n2;
       
        else if (n2 == 0)
        {
            alert("!!!!!!!!!!!!")
            document.getElementById("txtnum2").value="";
            document.getElementById("txtnum2").focus();
            return;
        }

        else
            result = n1/n2;
        
        document.getElementById("txtresult").value = result.toFixed(2);
       
        }
    }