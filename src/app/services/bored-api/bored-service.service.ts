import { Injectable } from '@angular/core';
import {BoredHttpService} from "./bored-http.service";
import {BehaviorSubject, first} from "rxjs";
import {IBoredActivity} from "../../_interfaces/IBoredActivity";

@Injectable({
  providedIn: 'root'
})
export class BoredServiceService {

  $randomActivity = new BehaviorSubject<IBoredActivity | null>(null)
  $activityByType = new BehaviorSubject<IBoredActivity | null>(null)
  $activityByParticipantCount = new BehaviorSubject<IBoredActivity | null>(null)

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
    console.log('activity by participant service', participants)
    this.boredHttpClient.getActivityByParticipantCount(participants).pipe(first()).subscribe({
      next: activity => {
        this.$activityByParticipantCount.next(activity)
        console.log(this.$activityByParticipantCount.getValue())
      },
      error: err => {
        console.error(err)
        alert('Unable to get activity: ' + err)
      }
    })
  }
}
