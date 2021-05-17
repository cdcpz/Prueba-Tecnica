import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/service/ofertas.service';

@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.css']
})
export class CharacteristicsComponent implements OnInit {
  servicio:OfertasService;
 
  page=1;
  pageSize=10;
  constructor(private service:OfertasService) { 
   this.servicio=this.service;
   console.log(this.service.selecionado);
  }

  ngOnInit(): void {
  }

}
