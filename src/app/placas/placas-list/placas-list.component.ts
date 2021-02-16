import { Component, OnInit } from '@angular/core';
import { Placa } from '../placa';
import { PlacasService } from '../placas.service';

@Component({
  selector: 'app-placas-list',
  templateUrl: './placas-list.component.html',
  styleUrls: ['./placas-list.component.css']
})
export class PlacasListComponent implements OnInit {

  placas: Placa[] = [];

  criterio: string = '';

  constructor(private placasService: PlacasService) { }

  ngOnInit(): void {
    this.placasService.getPlacas().subscribe(placas => this.placas = placas)
  }

}
