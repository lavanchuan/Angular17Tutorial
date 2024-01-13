import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Dog } from '../../models/dog/dog';
import { DogService } from '../../services/dog/dog.service';

@Component({
  selector: 'app-dog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dog.component.html',
  styleUrl: './dog.component.css'
})
export class DogComponent {

  currentDog? : Dog;

  size!:number;
  dogs?:Dog[] = [];

  constructor(private dogService : DogService){

  }

  getDog(){
    this.dogService.getOne().subscribe((data)=>{
      console.log(data);
      
      this.currentDog = data;
    }, (error)=>{
      console.log(error);
      
    })
  }

  getDogs(){
    this.dogs = this.dogService.getMany(this.size);
  }
}
