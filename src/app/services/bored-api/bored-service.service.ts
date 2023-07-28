import { Injectable } from '@angular/core';
import {BoredHttpService} from "./bored-http.service";
import {BehaviorSubject, first} from "rxjs";
import {IBoredActivity} from "../../_interfaces/IBoredActivity";
import {IBoredError} from "../../_interfaces/IBoredError";

@Injectable({
  providedIn: 'root'
})
export class BoredServiceService {

  $randomActivity = new BehaviorSubject<IBoredActivity | null>(null)
  $activityByType = new BehaviorSubject<IBoredActivity | null>(null)
  $activityByParticipantCount = new BehaviorSubject<IBoredActivity | IBoredError | null>(null)

  boredError: IBoredError = {error: "No activity found with the specified parameters"}

  constructor(private boredHttpClient: BoredHttpService) { }

  getRandomActivity() {
    return this.boredHttpClient.getRandomActivity().pipe(first()).subscribe({
      next: activity => {
        this.$randomActivity.next(<IBoredActivity>activity)
      },
      error: err => {
        console.error(err)
        alert('Unable to get random activity')
      }
    })
  }

  getActivityByType(activityType: string){
    this.boredHttpClient.getActivityByType(activityType).pipe(first()).subscribe({
      next: activity => {
        this.$activityByType.next(<IBoredActivity>activity)
      },
      error: err => {
        console.error(err)
        alert('Unable to get activity by type')
      }
    })
  }

  getActivityByParticipantCount(participants: number){
    this.boredHttpClient.getActivityByParticipantCount(participants).pipe(first()).subscribe({
      next: activity => {
        if(activity == this.boredError){
          return alert(`Sorry, there are currently no activities in the database for ${participants} number of people, please choose a smaller number.`)
        } else {
          this.$activityByParticipantCount.next(activity)
        }
      },
      error: err => {
        console.error(err)
        alert('Unable to get activity')
      }
    })
  }
}
