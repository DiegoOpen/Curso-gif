import { Component } from '@angular/core';
import { GitsService } from '../../gifs/services/gits.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent {

  get historial() {
    return this.gitsService.historial;
  }
  constructor(private gitsService: GitsService) { }

  buscar(termino:string){
    this.gitsService.buscarGits(termino);
  }
}
