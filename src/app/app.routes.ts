import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { NgModule } from "@angular/core";
import { SignInComponent } from "./auth/sign-in/sign-in.component";
import { PasswordRecoveryComponent } from "./auth/password-recovery/password-recovery.component";
import { BrowseRecipesComponent } from "./browse-recipes/browse-recipes.component";

export const routes: Routes = [
  // Cuando la ruta es vacía, se carga el componente HomeComponent
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "browse-recipes",
    component: BrowseRecipesComponent,
  },
  {
    path: "sign-in",
    component: SignInComponent,
  },
  {
    path: "sign-in/password-recovery",
    component: PasswordRecoveryComponent,
  },

];
