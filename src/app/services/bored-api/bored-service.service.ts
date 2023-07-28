import { Injectable } from '@angular/core';
import {BoredHttpService} from "./bored-http.service";

@Injectable({
  providedIn: 'root'
})
export class BoredServiceService {

  constructor(private boredHttpClient: BoredHttpService) { }

  getRandomActivity() {
    console.log('bored service accessed')
    this.boredHttpClient.getRandomActivity();
  }
}
