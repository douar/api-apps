import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IBoredActivity} from "../../_interfaces/IBoredActivity";

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
    console.log('activity by participant http', participants)
    return this.httpClient.get(`https://www.boredapi.com/api/activity?participants=${participants}`) as Observable<IBoredActivity>
  }
}
