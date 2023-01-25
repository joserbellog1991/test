function idioma(num){

const info1 = ["First name","Last name","Company","Job title","Business email","Phone","Comments", "SEND","Let's coordinate a meeting to find the best solution for your needs. Are you ready to maximize your COVID-19 operation? ", "Get in touch, we&#39;re all ears","Contacta Us"];


const info2 = ["Nombre","Apellido","Empresa","Cargo","Email empresarial","Teléfono","Comentarios","ENVIAR","Coordinemos una reunión para encontrar la mejor solución para sus necesidades. ¿Estás listo para maximizar tu operación COVID-19?","Contáctanos y comencemos","Contactanos" ]


if(num == 1){

document.getElementById(0).placeholder = info1[0];
document.getElementById(1).placeholder = info1[1]; 
document.getElementById(2).placeholder = info1[2];
document.getElementById(3).placeholder = info1[3];
document.getElementById(4).placeholder = info1[4];
document.getElementById(5).placeholder = info1[5];
document.getElementById(6).placeholder = info1[6];     
document.getElementById(7).innerHTML = info1[7];
document.getElementById(8).innerHTML = info1[8];
document.getElementById(9).innerHTML = info1[9];
document.getElementById(10).innerHTML = info1[10];
document.querySelector("#en").style.color = "darkgrey";
document.querySelector("#es").style.color = "#ccc";
}

if(num == 2){
    
    document.getElementById(0).placeholder = info2[0];
    document.getElementById(1).placeholder = info2[1];   
    document.getElementById(2).placeholder = info2[2];
    document.getElementById(3).placeholder = info2[3];
    document.getElementById(4).placeholder = info2[4];
    document.getElementById(5).placeholder = info2[5];
    document.getElementById(6).placeholder = info2[6];     
    document.getElementById(7).innerHTML = info2[7];
    document.getElementById(8).innerHTML = info2[8];
    document.getElementById(9).innerHTML = info2[9];
    document.getElementById(10).innerHTML = info2[10];
    document.querySelector("#es").style.color = "darkgrey";
    document.querySelector("#en").style.color = "#ccc";
    
    }

}