import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { createDirectus, rest, readCollections, authentication, readCollection } from '@directus/sdk';

@Injectable({
  providedIn: 'root'
})
export class GastromicService {

  constructor(private httpClient:HttpClient) { }

  usuario:any = [];
  private url = 'http://194.164.166.181:8055';
  private token = localStorage.getItem('token');
  private client = createDirectus('http://194.164.166.181:8055/').with(rest()).with(authentication());

  
  // Mostrar todas las colecciones
  getCollections() {
    this.httpClient.get(`${this.url}/collections?access_token=${this.token}`)
      .subscribe({
        next: ((response: any) => {
          console.log("FETCH COLLECTIONS: " + JSON.stringify(response.data))
        }),
        error: (error => {
          console.error("ERROR: " + error);
        })
      });
  }

  getCurrentUser() {
    this.httpClient.get(`${this.url}/users/me?access_token=${this.token}`)
      .subscribe({
        next: ((response: any) => {
          this.usuario.push(response.data);
          return response.data;
        }),
        error: (error => {
          console.error("ERROR: " + error);
        })
      });
  }

  testtt(){
    return this.usuario;
  }
  

  

  

}
