import { Component, Input } from '@angular/core';

@Component({
  selector: 'btn-operador',
  templateUrl: './operadores.component.html',
  styleUrls: ['./operadores.component.css']
})
export class OperadoresComponent {

  @Input() operador: string;
  memoria: number;

  constructor() { }

  //ngOnInit(){ console.log(this.operador) }
}
