import { Injectable } from '@angular/core';
import {BoredHttpService} from "./bored-http.service";
import {BehaviorSubject, first} from "rxjs";
import {IBoredActivity} from "../../_interfaces/IBoredActivity";

@Injectable({
  providedIn: 'root'
})
export class BoredServiceService {

  $randomActivity = new BehaviorSubject<IBoredActivity | null>(null)

  constructor(private boredHttpClient: BoredHttpService) { }

  getRandomActivity() {
    return this.boredHttpClient.getRandomActivity().pipe(first()).subscribe({
      next: activity => {
        this.$randomActivity.next(<IBoredActivity>activity)
        console.log(this.$randomActivity)
      },
      error: err => {
        console.log(err)
        alert('Unable to get activity')
      }
    })
    console.log('bored service accessed')
  }
}
