
import { Component } from '@angular/core';

import {Joke } from './joke.component';

@Component({
    selector: 'joke-list',
    template: `
        <app-joke-form>joke-form works!</app-joke-form>
        <joke *ngFor="let j of jokes" [joke]="j"></joke>
    `
})

export class JokeListComponent
{
   jokes: Joke[];
   constructor() {
       this.jokes = [
           new Joke('Joke1', 'Me 1'),
           new Joke('Joke2', 'Hello 2'),
           new Joke('Joke3', 'Hello 3')
       ];
   }

  
}