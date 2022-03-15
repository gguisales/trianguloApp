function triangulo () {

    var valor1 = parseInt(document.getElementById("valor1").value);
    var valor2 = parseInt(document.getElementById("valor2").value);
    var valor3 = parseInt(document.getElementById("valor3").value);

    if (valor1 < (valor2+valor3) && valor2 < (valor1+valor3) && valor3 < (valor1+valor2) ){

        if (valor1 == valor2 && valor2 == valor3){
            document.write("O triangulo é equilatero")

        }else if (valor1 == valor2 || valor1 == valor3 || valor3 == valor2){
            document.write("O triangulo é isoceles")
        }else {
            document.write( "O triangulo é escaleno");
        }
    
    }else{
        return "não forma triângulo"
    }

}

function addCart(){ }


