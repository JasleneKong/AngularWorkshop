import { Joke } from './../joke/joke.component';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {

  @Output() jokeCreated = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  createJoke(setup: string, punchline:string )
  {
    this.jokeCreated.emit(new Joke (setup,punchline));
  }
}
