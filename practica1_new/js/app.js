/* se crea la variable con la información a imprimir*/
let dinamico = [
    {
    Id:1,
    titulo: "Inicio",
    href: "home.php"
    },
    {
    Id:7,
    titulo: "Contacto",
    href: "contact.php"
    },
    {
    Id:6,
    titulo: "Empresa",
    href: "about.php"
    },
    {
    Id:2,
    titulo: "Laboratorio",
    href: "laboratory.php"
    },
    {
    Id:4,
    titulo: "Alimentos",
    href: "foods.php"
    
    },
    {
    Id:5,
    titulo: "Diagnóstico Clínico",
    href: "clinical-diagnostic.php"
    },
    {
    Id:2,
    titulo: "Productos",
    href: "products.php"
    },
    {
    Id:3,
    titulo: "Software",
    href: "software.php"
    }
    ];
    
    
    /* Modificar el orden por Id */
    dinamico = dinamico.sort(function(a, b) {
        return a.Id-b.Id; 
    });
    
    /* Se extrae el elemento donde se va a imprimir la información */
    let listTest = document.getElementById("listTest");
    
    
    let count = dinamico.length;
    let content = "";
    
    /*Extraer la información a imprimir y se guarda en variable */
    
    for(let i=0;i<count;i++)
    {
        let titulo= dinamico[i].titulo;
        let url= dinamico[i].href
        
                        
                      
        content+='<li class="nav-item">';                
      // content+= dinamico[i].Id+"<br>";
        content+= '<a class="nav-link" aria-current="page" href="'+titulo+'">'+titulo+'</a>';  
        content+='</li>'; 
    }
    
    /* Se incerta en la lista*/
    
    listTest.innerHTML=content;