// Stopwatch

function myfunc() {
    document.getElementById("inputt").value = document.getElementById("data").value;
  }

  function myfunc3() {
    document.getElementById("inputt").value = 0;
  }


   setInterval((myfunc)=> {
       if (    document.getElementById("inputt").value>0 ) {
        document.getElementById("inputt").value -=1;

       }

      }, 1000);
   
      function myfunc2() {
        document.getElementById("inputt").value ="";

       }
  




 // Regulator

//  rotation= document.getElementById("inputt").value+80;
//  needle.style.transform = `rotate(${rotation}deg)`;


  
   
  
  
  
  

   
  