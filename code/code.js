for(let i = 0; i < 30; ++i){
    if (i === 0 || i ===29) {    
        for (let j = 0; j < 29; ++j) {
            document.write("*");
        }    
    
      } else {
  
    console.group()
    for(let j = 0; j < 30; ++j){
        if(j === 0 || j === 29){
         document.write("*")   
        }else{
         document.write("&nbsp;&nbsp;")  
        }
         
    }
    console.groupEnd()
    document.write("<br>")
}
}

for(let i = 0; i < 30; ++i){
       
    for(let j = 0 + i; j < 30; ++j){
        document.write("*")   
        }
         document.write("<br>")  
        }


for(let i = 0; i <30; i++){
       
    for(let j = 30 - i; j < 30; j++){
        document.write("*")   
        }
         document.write("<br>")  
        }
for(let i = 0; i < 30; i++){
       
            for(let j = 0 + i; j < 30; j++){
                document.write("*")   
                }
                 document.write("<br>")  
                }
    
