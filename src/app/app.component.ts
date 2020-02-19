import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Author Cards';
  authors = [
    {
      author: "Brandon Sanderson",
      genre: "Fantasy",
      knownFor: "Mistborn"
    },
    {
      author: "J.K. Rowling",
      genre: "Fantasy",
      knownFor: "Harry Potter"
    },
    {
      author: "Stephen King",
      genre: "Horror",
      knownFor: "The Shining"
    },
    {
      author: "Orson Scott Card",
      genre: "Science fiction",
      knownFor: "Ender's game"
    }
  ]
}
