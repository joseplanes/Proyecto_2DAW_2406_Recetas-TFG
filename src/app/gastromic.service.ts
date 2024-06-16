import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { createDirectus, rest, readCollections, authentication, readCollection } from '@directus/sdk';

@Injectable({
  providedIn: 'root'
})
export class GastromicService {

  constructor(private httpClient:HttpClient) { }

  private file:any;
  private user:any;
  private recipes:any;
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

  fetchCurrentUser() {
    this.httpClient.get(`${this.url}/users/me?access_token=${this.token}`)
      .subscribe({
        next: ((response: any) => {
          this.user = response.data;
          localStorage.setItem("user", response.data)
        }),
        error: (error => {
          console.error("ERROR: " + error);
        })
      });
  }

  fetchRecipes() {
    this.httpClient.get(`${this.url}/collections/recipes?access_token=${this.token}`)
      .subscribe({
        next: ((response: any) => {
          this.recipes = response.data;
          localStorage.setItem("recipes", response.data)
        }),
        error: (error => {
          console.error("ERROR: " + error);
        })
      });
  }

  fetchFileById(id:any) {
    this.httpClient.get(`${this.url}/collections/files/${id}?access_token=${this.token}`)
      .subscribe({
        next: ((response: any) => {
          this.file = response.data;
          localStorage.setItem("recipes", response.data)
        }),
        error: (error => {
          console.error("ERROR: " + error);
        })
      });
  }

  getFile() {
    return this.file;
  }

  getRecipes() {
    return this.recipes;
  }

  getCurrentUser(){
    return this.user;
  }
  

  

  

}
