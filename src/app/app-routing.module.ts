import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./Pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'products',
    loadChildren: () => import('./Pages/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'single-product',
    loadChildren: () => import('./Pages/single-product/single-product.module').then( m => m.SingleProductPageModule)
  },
  {
    path: 'recipes',
    loadChildren: () => import('./Pages/recipes/recipes.module').then( m => m.RecipesPageModule)
  },
  {
    path: 'single-recipe',
    loadChildren: () => import('./Pages/single-recipe/single-recipe.module').then( m => m.SingleRecipePageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./Pages/cart/cart.module').then( m => m.CartPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./Pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'boats',
    loadChildren: () => import('./Pages/boats/boats.module').then( m => m.BoatsPageModule)
  },
  {
    path: 'single-boat',
    loadChildren: () => import('./Pages/single-boat/single-boat.module').then( m => m.SingleBoatPageModule)
  },
  {
    path: 'single-restaurant',
    loadChildren: () => import('./Pages/single-restaurant/single-restaurant.module').then( m => m.SingleRestaurantPageModule)
  },
  {
    path: 'restaurants',
    loadChildren: () => import('./Pages/restaurants/restaurants.module').then( m => m.RestaurantsPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
