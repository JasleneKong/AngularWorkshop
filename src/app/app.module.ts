
import { RouterModule, Routes } from '@angular/router';

import { JokeListComponent } from './joke-list/joke-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { JokeComponent } from './joke/joke.component';

import { JokeFormComponent } from './joke-form/joke-form.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'jokes', component: JokeListComponent},
  { path: 'joke-list', redirectTo: 'jokes'},
  { path: '**', component: PageNotFoundComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    JokeComponent,
    JokeListComponent,
    JokeFormComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
