import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { createDirectus, rest, readCollections, authentication, readCollection } from '@directus/sdk';

@Injectable({
  providedIn: 'root'
})
export class GastromicService {

  constructor(private httpClient:HttpClient) { 
    this.fetchCurrentUser();
  }

  private file:any;
  private user:any;
  private user_followers:any;
  private recipe_ingredients:any;
  private recipe_created:any;
  private categories:any;
  private ingredients:any;
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

  getUserAvatar() {
    return `http://194.164.166.181:8055/assets/${this.getCurrentUser()?.avatar}?access_token=${this.token}`;
  }

  getUserRecipes(user_id:any) {
    let user_recipes:any = [];
    let counter = 0;
    this.recipes?.forEach((e:any) => {
      if(e.user_created == user_id) {
        user_recipes.push(e);
        counter++;
      }
    });

    let result = {
      user_recipes: user_recipes,
      counter: counter
    }

    return result;
  }

  fetchUserFollowers() {
    this.httpClient.get(`${this.url}/items/users_followed?access_token=${this.token}`)
      .subscribe({
        next: ((response: any) => {
          this.user_followers = response.data;
        }),
        error: (error => {
          console.error("ERROR: " + error);
        })
      });

  }

  getUserFollowers() {
    return this.user_followers;
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

  fetchCategories() {
    this.httpClient.get(`${this.url}/items/categories?access_token=${this.token}`)
      .subscribe({
        next: ((response: any) => {
          this.categories = response.data;
        }),
        error: (error => {
          console.error("ERROR: " + error);
        })
      });
  }

  fetchRecipesIngredients() {
    this.httpClient.get(`${this.url}/items/recipe_ingredients?access_token=${this.token}`)
      .subscribe({
        next: ((response: any) => {
          this.recipe_ingredients = response.data;
        }),
        error: (error => {
          console.error("ERROR: " + error);
        })
      });
  }

  setIngrediente(ingredient:any){
    this.httpClient.post(`${this.url}/items/recipes?access_token=${this.token}`, ingredient)
      .subscribe({
        next: (response) => {
          console.log('Recipe created successfully', response);
          return;
        },
        error: (error) => {
          console.error('Error creating recipe', error);
        }
      });
  }

  getRecipesIngredients() {
    return this.ingredients;
  }

  fetchIngredients() {
    this.httpClient.get(`${this.url}/items/ingredients?access_token=${this.token}`)
      .subscribe({
        next: ((response: any) => {
          this.ingredients = response.data;
        }),
        error: (error => {
          console.error("ERROR: " + error);
        })
      });
  }

  getIngredients() {
    return this.ingredients;
  }

  getCategories() {
    return this.categories;
  }

  async createRecipe(recipe:any) {
    // let test = {
    //   "title": "PRUEBA666",
    //   "user_created": this.getCurrentUser().id
    // };
    this.httpClient.post(`${this.url}/items/recipes?access_token=${this.token}`, recipe)
      .subscribe({
        next: (response:any) => {
          console.log('Recipe created successfully', response.data);
          this.recipe_created = response.data;
        },
        error: (error) => {
          console.error('Error creating recipe', error);
        }
      });
  }

  recipeCreated() {
    return this.recipe_created;
  }

  async createRecipe_Category(recipe_category:any) {
    // let test = {
    //   "title": "PRUEBA666",
    //   "user_created": this.getCurrentUser().id
    // };
    this.httpClient.post(`${this.url}/items/recipes_categories?access_token=${this.token}`, recipe_category)
      .subscribe({
        next: (response) => {
          console.log('Recipe created successfully', response);
          // this.recipe_created = response
          return;
        },
        error: (error) => {
          console.error('Error creating recipe', error);
        }
      });
  }


  

  

}
