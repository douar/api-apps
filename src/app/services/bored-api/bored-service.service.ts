import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BoredServiceService {

  constructor() { }

  getRandomActivity() {
    console.log('bored service accessed')
  }
}
