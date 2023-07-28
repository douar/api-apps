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
      },
      error: err => {
        console.log(err)
        alert('Unable to get activity')
      }
    })
  }

  getActivityByType(activityType: string){
    console.log('bored service activity by type accessed')
    this.boredHttpClient.getActivityByType(activityType)
  }
}
