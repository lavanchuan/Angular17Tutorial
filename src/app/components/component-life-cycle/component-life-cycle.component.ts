import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component-life-cycle',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './component-life-cycle.component.html',
  styleUrl: './component-life-cycle.component.css'
})
export class ComponentLifeCycleComponent implements OnInit{

  text?: string;

  constructor(private http : HttpClient){

  }

  ngOnChanges(){
    console.log("onChanges");
    
  }

  ngOnInit(): void {
    console.log("Ng on Init");
    
  }

  ngOnDestroy(){
    console.log("Destroy");
    
  }

}
