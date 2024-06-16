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
  private rating_recipes:any;
  recipes:any;
  private url = 'http://194.164.166.181:8055';
  private token = localStorage.getItem('token');
  private client = createDirectus('http://194.164.166.181:8055/').with(rest()).with(authentication());
  recipe: any = [];
  
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
    this.httpClient.get(`${this.url}/items/recipes`)
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
    this.httpClient.get(`${this.url}/assets/${id}?access_token=${this.token}`)
      .subscribe({
        next: ((response: any) => {
          this.file = response.data;
          localStorage.setItem("file", response.data)
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
  

  getRecipe(id : number){
    this.httpClient.get(`${this.url}/items/recipes/${id}?access_token=${this.token}`)
      .subscribe({
        next: ((response: any) => {
          this.recipe.push(response.data);
          return response.data;
        }),
        error: (error => {
          console.error("ERROR: " + error);
        })
      });
  }

  fetchRatingRecipes() {
    this.httpClient.get(`${this.url}/items/rating_recipes?access_token=${this.token}`)
      .subscribe({
        next: ((response: any) => {
          this.rating_recipes = response.data;
        }),
        error: (error => {
          console.error("ERROR: " + error);
        })
      });
  }

  getRatingRecipes() {
    return this.rating_recipes;
  }



  recipee(){
    return this.recipe;
  }


  

  

}
