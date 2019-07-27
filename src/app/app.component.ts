import { Component } from '@angular/core';
import { throwError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'calculadora';
  memoria: number;
  memoriaM: number;
  display: string;
  operadorAntes: boolean;
  ultimoOperador: string;
  nuevoOperador: string;
  
  constructor(){
    this.display = "0";
    this.operadorAntes = false;
    this.memoriaM = 0
  }

  /** 
   * @description Actualiza el valor en memoria cuando ingresan numeros con el teclado
  */
  actualizaValor(e){
    if(this.display.length == 1 && this.display == '0'){
      this.display = "0";
    }
  }

  /** 
   * @description Actualiza el valor en memoria y en el input "display" cuando ingresan numeros con los botones
  */
  clickNumero(e){
    //this.memoria = e.target.value;
    if(this.display == null || this.display == "" || (this.display.length == 1 && this.display == '0') ){
      this.display = "";
    }
    this.display += e.target.value;
  }

  /** 
   * @description Dependiendo el operador realiza una acci'on 
   * Falta refactorizar mucho y pensar bien la l'ogica
  */
  clickOperador(e){
    //si está en los operadores básicos hace la lógica de cualquier operación
    //de lo contrario solo hace acciones como borrar o las de memoria
    if(!(this.nuevoOperador == '=' && e.target.value == '=')){
      this.ultimoOperador = this.nuevoOperador;      
    }
    this.nuevoOperador = e.target.value;
    
    if(!this.operadorAntes){   
      this.operadorAntes = true;
      this.memoria = parseFloat(this.display);
      this.display = '0';
    }else{
      switch(this.nuevoOperador){
        case '+':          
          this.memoria += parseFloat(this.display);
          this.display = String(this.memoria);
          break;
        case '-':
          this.memoria -= parseFloat(this.display);
          this.display = String(this.memoria);
          break;
        case '*':
          this.memoria *= parseFloat(this.display);
          this.display = String(this.memoria);
          break;
        case '/':
          try {
            this.memoria /= parseFloat(this.display);
            this.display = String(this.memoria);
          }
          catch(err) {
            console.log("No se puede dividir entre 0");
            throwError("División entre 0");
          }
          break;
        case '=':
          this.igual(this.ultimoOperador);
          break;          
        default:
          console.log('otro');
      }
      this.operadorAntes = false;
    }           
  }

  
/** 
 * @description Dependiendo el operador realiza una acci'on 
 * Falta refactorizar mucho y pensar bien la l'ogica
*/
clickOperadorOtro(e){
  //si está en los operadores básicos hace la lógica de cualquier operación
  //de lo contrario solo hace acciones como borrar o las de memoria
    
  switch(e.target.value){
    case 'C':
      this.display = "0";
      this.operadorAntes = false;
      this.ultimoOperador = null;
      this.memoria = 0;
      break;
    case 'CE':
      this.display = "0";
      break;
    case 'B':
      this.display = this.display.substring(0,this.display.length - 1);          
      break;
    case 'MC':
      this.memoriaM = 0;
      break;
    case 'M+':
        this.memoriaM += parseFloat(this.display);
      break;
    case 'M-':
      this.memoriaM -= parseFloat(this.display);
      break;
    case 'MS':
        this.display = String(this.memoriaM);
        break;
    default:
      console.log('otro');
  }       
}

  igual(op: string){
    switch(op){
      case '+':
        this.memoria += parseFloat(this.display);
        this.display = String(this.memoria);
        break;
      case '-':
        this.memoria -= parseFloat(this.display);
        this.display = String(this.memoria);
        break;
      case '*':
        this.memoria *= parseFloat(this.display);
        this.display = String(this.memoria);
        break;
      case '/':
        try {
          this.memoria /= parseFloat(this.display);
          this.display = String(this.memoria);
        }
        catch(err) {
          console.log("No se puede dividir entre 0");
          throwError("División entre 0");
        }
        break;
      default:
        console.log('otro');
    }
    this.operadorAntes = false;
  }

}
