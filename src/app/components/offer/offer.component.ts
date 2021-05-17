import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { OfertasService } from 'src/app/service/ofertas.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})



export class OfferComponent implements OnInit {
  reactive:FormGroup;
  datos:OfertasService;
  ofertas:any;
  name:any;


  constructor( private servicio:OfertasService,private builder:FormBuilder) { 
    this.name=servicio.name;
    this.datos= this.servicio;

    
    this.reactive = this.builder.group({
      id: [this.servicio.selecionado.id]
    });
  
    this.ofertas=this.datos.getOffer();
    
  }
  s(id:any){
    
   
  this.datos.selecionador(id.target.value.id);
 
  }

 
  ngOnInit(): void {
    this.reactive.valueChanges.subscribe(
      change => {
        this.servicio.selecionador(change.id);
      }
    );
  }

}
