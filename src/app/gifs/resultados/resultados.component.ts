import { Component } from '@angular/core';
import { GitsService } from '../services/gits.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent {

  get resultado(){
    return this.gifsService.resultados;
  }

  constructor(private gifsService:GitsService){ }

}
