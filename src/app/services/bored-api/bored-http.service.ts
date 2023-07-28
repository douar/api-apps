import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoredHttpService {

  constructor() { }

  getRandomActivity(){
    console.log('bored http accessed')
  }
}
