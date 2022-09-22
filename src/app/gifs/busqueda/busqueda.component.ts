import { Component,ViewChild,ElementRef } from '@angular/core';
import { GitsService } from '../services/gits.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {
  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>;

  constructor(private gifService:GitsService){}

  buscar(){
    const valor =this.txtBuscar.nativeElement.value; 

    if (valor.trim().length===0) {
      return;
    }

    this.gifService.buscarGits(valor);

    this.txtBuscar.nativeElement.value='';
  }

}
