import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { createDirectus, rest, readCollections, authentication, readCollection } from '@directus/sdk';

@Injectable({
  providedIn: 'root'
})
export class GastromicService {


  private url = 'http://194.164.166.181:8055';
  private token = localStorage.getItem('token');
  private client = createDirectus('http://194.164.166.181:8055/').with(rest()).with(authentication());
  // private result = this.client.request(readCollections());

  
  constructor(private httpClient:HttpClient) { 
  }

  // Mostrar todas las colecciones
  getCollections() {
    this.httpClient.get(`${this.url}/collections?access_token=${this.token}`)
      .subscribe({
        next: ((response: any) => {
          // this.collections = response.data;

          console.log("FETCH COLLECTIONS: " + JSON.stringify(response.data))

          // Guardamos la colección en el sessionStorage
          // sessionStorage.setItem("collections", JSON.stringify(response.data))
        }),
        error: (error => {
          console.error("ERROR: " + error);
        })
      });
  }

}
