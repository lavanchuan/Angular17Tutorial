import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
  movies: {id:any;name?:string;}[] = [
    {id: 1, name:"Naruto"},
    {id: 2, name:"Conan"},
    {id: 3, name:"Onepice"},
    {id: 4, name:"Tom and Jerry"},
    {id: 5, name:"Dragon Ball"},
    {id: 6, name:"The Boy"},
    {id: 7, name:"Supper Man"}
  ];

}
