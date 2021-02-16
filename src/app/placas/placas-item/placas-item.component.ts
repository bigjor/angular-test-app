import { Component, Input, OnInit } from '@angular/core';
import { Placa } from '../placa';

@Component({
  selector: 'app-placas-item',
  templateUrl: './placas-item.component.html',
  styleUrls: ['./placas-item.component.css']
})
export class PlacasItemComponent implements OnInit {

  @Input() placa: Placa;

  constructor() { }

  ngOnInit(): void {
  }

}
