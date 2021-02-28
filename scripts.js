
let Fname ; 
let Email ; 
let Birth;
let Phone;
let Check ; 

let Submit = {
    submit(){

        Fname = document.getElementById("fname").value;

        Email = document.getElementById("Email").value;

        Birth = document.getElementById("date").value;

        Phone = document.getElementById("phone").value;

        Check = document.getElementById("notification").checked ;       

        console.log(Fname,"/" , Email, "/" , Birth, "/", Phone, "/" , Check );

        if (Fname && Email && Birth && Phone !== "") 
        {
            alert("Thanks!!");              
                        
        }    



    }
}


