import { DatePipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-date',
  standalone: true,
  imports: [],
  templateUrl: './pipe-date.component.html',
  styleUrl: './pipe-date.component.css'
})
export class PipeDateComponent {
  currentDate: Date = new Date();

  
}
