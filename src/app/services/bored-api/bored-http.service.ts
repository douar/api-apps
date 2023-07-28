import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IBoredActivity} from "../../_interfaces/IBoredActivity";
import {IBoredError} from "../../_interfaces/IBoredError";

@Injectable({
  providedIn: 'root'
})
export class BoredHttpService {

  constructor(private httpClient: HttpClient) { }

  getRandomActivity(){
    return this.httpClient.get('https://www.boredapi.com/api/activity/') as Observable<IBoredActivity>
  }

  getActivityByType(activityType: string){
    return this.httpClient.get(`https://www.boredapi.com/api/activity?type=${activityType}`) as Observable<IBoredActivity>
  }

  getActivityByParticipantCount(participants: number){
    return this.httpClient.get(`https://www.boredapi.com/api/activity?participants=${participants}`) as Observable<IBoredActivity | IBoredError>
  }

  getActivityByPrice(price: number) {
    console.log('get activity by price http')
    return this.httpClient.get(`https://www.boredapi.com/api/activity?price=${price}`) as Observable<IBoredActivity | IBoredError>
  }
}
