import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { RecipeCreateComponent } from './recipe-create/recipe-create.component';
import { BrowseRecipesComponent } from './browse-recipes/browse-recipes.component';
import { PasswordRecoveryComponent } from './auth/password-recovery/password-recovery.component';
import { UserViewComponent } from './user-view/user-view.component';
import { RecipeComponent } from './recipe/recipe.component';
import { CreateAccountComponent } from './auth/create-account/create-account.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Cuando la ruta es vacía, se carga el componente HomeComponent
    { path: 'sign-in', component: SignInComponent },
    { path: 'recipe-create', component: RecipeCreateComponent },
    { path: "browse-recipes", component: BrowseRecipesComponent},
    { path: "sign-in/password-recovery", component: PasswordRecoveryComponent},
    { path: "sign-in/create-account", component: CreateAccountComponent},
    { path: 'user-view', component: UserViewComponent } ,
    { path: 'recipe', component: RecipeComponent } ,
    { path: '**', redirectTo: '' } // Si la ruta no existe, redirijo a la raíz
];
