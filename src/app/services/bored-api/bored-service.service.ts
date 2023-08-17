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
  $activityByPrice = new BehaviorSubject<IBoredActivity | IBoredError | null>(null)
  $activityByPrinceRange = new BehaviorSubject<IBoredActivity | IBoredError | null>(null)

  boredError: IBoredError = {error: 'No activity found with the specified parameters'}

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
        if(activity.hasOwnProperty("error")){
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
  getActivityByPrice(price: number) {
    this.boredHttpClient.getActivityByPrice(price).pipe(first()).subscribe({
      next: activity => {
        if(activity.hasOwnProperty('error')){
          return alert(`Sorry, there are currently no activities in the database for ${price} price, please choose a different price number.`)
        } else {
          this.$activityByPrice.next(<IBoredActivity>activity)
        }
      },
      error: err => {
        console.error(err)
        alert('Unable to get activity')
      }
    })
  }
  getActivityByPriceRange(minPrice: number, maxPrice: number){
    this.boredHttpClient.getActivityByPriceRange(minPrice, maxPrice).pipe(first()).subscribe({
      next: activity => {
        if(activity.hasOwnProperty('error')){
          return alert(`Sorry, there are currently no activities in the database for ${minPrice}-${maxPrice} price, please choose a different price range.`)
        } else {
          this.$activityByPrinceRange.next(activity)
        }
      },
      error: err => {
        console.error(err)
        alert('Unable to get activity, please try again later.')
      }
    })

  }
}
