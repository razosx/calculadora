import { Component, Input } from '@angular/core';

@Component({
  selector: 'btn-numero',
  templateUrl: './numeros.component.html',
  styleUrls: ['./numeros.component.css']
})
export class NumerosComponent {

  @Input() numero: number;

  constructor() {  }
  
  //ngOnInit(){ console.log(this.numero) }
}
