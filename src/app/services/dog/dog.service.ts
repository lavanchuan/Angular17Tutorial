import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dog } from '../../models/dog/dog';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  baseUrl : string = "https://random.dog/woof.json";

  constructor(private http : HttpClient) { }

  // getOne():Observable<Dog>{
  //   return this.http.get<Dog>(this.baseUrl);
  // }

  getOne(){
    return this.http.get<Dog>(this.baseUrl);
  }

  getMany(size:number){
    let obs:Dog[] = [];
    for(let i = 0; i < size; i++){
      this.http.get<Dog>(this.baseUrl).subscribe((data)=>{
        obs.push(data);
      })
    }
    return obs;
  }
}
