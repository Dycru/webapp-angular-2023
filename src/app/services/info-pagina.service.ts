import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina-interface';

@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {
  info: InfoPagina =  {}; 
equipo: any =[];
  constructor(private http: HttpClient) {
    // console.log("Servicio de infoPagina listo")
this.cargarInfo()

    
    
}
// Leer el archivo JSON
private cargarInfo(){

  this.http.get('assets/data/data-pagina.json')
.subscribe((resp: InfoPagina) => {
  this.info = resp; // provar resp. I veurem les propietats JSON
  console.log(resp);
});
}
  
}