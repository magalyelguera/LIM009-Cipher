const myFunction() {
    let name = document.getElementById("name").value;
    document.getElementById("bienvenida").innerHTML = "Bienvenida, " + name;
    
    
    document.getElementById("interfaz1").style.display="none"
    document.getElementById("interfaz2").style.display="block"
    
    }
      
    function functionA() {
    document.getElementById("interfaz2").style.display="none";
    document.getElementById("responde1").style.display="block";
      }
      

    