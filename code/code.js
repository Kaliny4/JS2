'use strict'
/*Quadrat*/
for(let i = 0; i < 20; i++){    
        for (let j = 0; j < 38; j++) {
            if(i === 0 || i === 19){
                document.write("*");  
        }else {
            if(j === 0 || j === 19){
                document.write("*");
            }else {
                document.write("&nbsp;&nbsp;&nbsp;&nbsp;");
            }
        }
        }
  
    document.write("<br>")
}

/*Triangle*/

for(let i = 0; i < 30; i++){
    for(let j = 0 + i; j < 30; j++){
        document.write("&nbsp;");   
        }
        for (let b=(0+i+1); b>0; b--){
            document.write("*");
        }
         document.write("<br>");  
        }

/*Romb*/
for(let i = 0; i < 30; i++){
    for(let j = 0 + i; j < 30; j++){
        document.write("&nbsp;");   
        }
        for (let b=(0+i+1); b>0; b--){
            document.write("*");
        }
         document.write("<br>");  
        }
for(let k = 0; k < 30; k++){
            for(let j = 1 + k; j >0; j--){
                document.write("&nbsp;");   
                }
                for (let l=30-k; l>0; l--){
                    document.write("*");
                }
                 document.write("<br>");  
                }
    document.write("<hr>");

let n = 5;
let num = parseFloat(prompt("Enter the number", ""));
if (Number.isInteger(num) && num % n === 0) {
for (let i = 0; i <=num; i = i+5) {
    console.log(i);}
}
    else {
        console.log("sorry");
    
    }




    

    

                
  
  