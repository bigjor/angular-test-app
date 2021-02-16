import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Placa } from '../placa';
import { PlacasService } from '../placas.service';

@Component({
  selector: 'app-placa-detail',
  templateUrl: './placa-detail.component.html',
  styleUrls: ['./placa-detail.component.css']
})
export class PlacaDetailComponent implements OnInit {

  placa: Placa | undefined;

  constructor(private activatedRoute: ActivatedRoute, private placasService: PlacasService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param => {
      this.placasService.getPlaca(param.id).subscribe(placa => this.placa = placa)
    })
  }

}
