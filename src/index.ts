import "./styles.css";
let claveUsuario: string;
let contador = 0;
while (contador < 3 && claveUsuario !== "eureka") {
  contador = contador + 1;
  let intento = 3;
  let quedanIntentos = intento - contador;
  claveUsuario = prompt("Ingrese clave: ");
  if (claveUsuario === "eureka") {
    alert("clave correcta");
  } else {
    alert("clave incorrecta, quedan " + quedanIntentos + " intentos");
  }
}
