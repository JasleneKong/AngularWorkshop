import { Joke } from './../joke/joke.component';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements OnInit {
  
  jokes: Joke[];
  constructor() {
    this.jokes = [
      new Joke('Joke1', 'Me 1'),
      new Joke('Joke2', 'Hello 2'),
      new Joke('Joke3', 'Hello 3')
    ];
   }

  ngOnInit() {
  }

  addJoke(joke)
  {
    this.jokes.unshift(joke);
  }

}
