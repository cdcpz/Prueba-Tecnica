import { Injectable } from '@angular/core';
import datos from '../../assets/Datos/ofertas.json';


@Injectable({
  providedIn: 'root'
})
export class OfertasService {

  selecionado:any=datos[0];
  name:any=datos[0].versions[0].name;
  constructor() {

    
   }

  getOffer(){
    return datos;
  }

  selecionador(id:string){
   datos.forEach(element => {  if(element.id == id){
    this.selecionado=element;
    this.name=element.versions[0].name;
    console.log(this.selecionado.versions[0].name);
    return;
   }
      
    });

  }


}
