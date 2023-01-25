function valEmail() {

    let value = document.getElementById("email").value;

    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(value)){
     alert("La dirección de email " + value + " es correcta.");
    } else {
     alert("La direccion de email es incorrecta.");
    }
  }

  function valFono() {

    let value = document.getElementById("fono").value;

    if (/^(\+?56)?(\s?)(0?9)(\s?)[98765432]\d{7}$/.test(value)){
     alert("El telefono  " + value + " es correcta.");
    } else {
     alert("el formato de telefono es incorrecto (+569xxxxxxxx).");
    }
  }

  function textAreaLength(){

    let value = document.getElementById("comentarios").value;

    let count = value.length;

    console.log(count);

   let cant = 10;

    if(count>cant)
    {
        alert("solo puede agregar maximo 200 caracteres")
        
        resultado = count-cant;
        

        for(let i=0;i<resultado;i++)
        {
            value= value.slice(0, -1);
        }
        
        
        document.getElementById("comentarios").value=value;


    }


  }

 