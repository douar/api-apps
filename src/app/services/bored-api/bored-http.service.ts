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
}
