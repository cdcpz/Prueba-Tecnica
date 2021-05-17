import { Component, OnInit } from '@angular/core';
import { OfertasService } from 'src/app/service/ofertas.service';

@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.css']
})
export class PricesComponent implements OnInit {
price:OfertasService;
  constructor(private service:OfertasService) { 
    this.price=this.service;


  }

  ngOnInit(): void {
  }

}
