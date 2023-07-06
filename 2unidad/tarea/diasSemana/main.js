var dia = parseInt(prompt("selecciona el dia"));

var semana = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado'];




switch(dia) {
    case 0:
        alert(semana[0]);
      break;
    case 1:
        alert(semana[1]);
      break;
      case 2:
        alert(semana[2]);
      break;
    case 3:
        alert(semana[3]);
      break;
      case 4:
        alert(semana[4]);
      break;
    case 5:
        alert(semana[5]);
      break;
      case 6:
        alert(semana[6]);
      break;
    default:
        alert("numero incorrecto");
  }