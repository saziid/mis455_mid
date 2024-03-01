function process(){
    var person = document.getElementById("nameBox").value ; 
    var check = parseInt(document.getElementById("checkBox").value) ; 
    
    if (check > 5 ) {
    
      document.getElementById("content").innerHTML= `
      
      <h4>Hello ${person},  Will contact with you soon. :)</h4>`;
    }
    else {
    
       document.getElementById("content").innerHTML= `
      <h4> Wait ${person}. Something is wrong. Try Again. </h4>`;
    }
  
  }
  
  