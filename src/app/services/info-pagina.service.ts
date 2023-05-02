import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina-interface'

@Injectable({
  providedIn: 'root',
})
export class InfoPaginaService {
  info: InfoPagina = {};
  equipo: any = [];
  project: any = [];

  constructor(private http: HttpClient) {
    // console.log("Servicio de infoPagina listo")
    this.cargarInfo();
    this.cargarEquipo();
    this.cargarProject();
  }
  // Leer el archivo JSON interno
  private cargarInfo() {
    this.http
      .get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPagina) => {
        this.info = resp; // provar resp. I veurem les propietats JSON
        console.log(resp);
      });
  }
  // Leer el archivo JSON externo en la Real Time DataBase de Firebase de Google
  private cargarEquipo() {
    this.http
      .get(
        'https://web-app-angular-2023-default-rtdb.europe-west1.firebasedatabase.app/equip'
      )
      .subscribe((resp: InfoPagina) => {
        this.equipo = resp; // provar resp. I veurem les propietats JSON
        console.log(resp);
      });
  }
  
  // Leer el archivo JSON externo en la Real Time DataBase de Firebase de Google
  private cargarProject() {
    this.http
      .get(
        'https://web-app-angular-2023-default-rtdb.europe-west1.firebasedatabase.app/proyectos'
      )
      .subscribe((resp: InfoPagina) => {
        this.project = resp; // provar resp. I veurem les propietats JSON
        console.log(resp);
      });
  }
}