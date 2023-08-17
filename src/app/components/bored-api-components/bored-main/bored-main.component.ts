import {Component, OnDestroy} from '@angular/core';
import {IBoredActivity} from "../../../_interfaces/IBoredActivity";
import {BoredServiceService} from "../../../services/bored-api/bored-service.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-bored-main',
  templateUrl: './bored-main.component.html',
  styleUrls: ['./bored-main.component.css']
})
export class BoredMainComponent implements OnDestroy{

  subRandomActivity!: Subscription;
  randomActivity: IBoredActivity = {
    activity: '',
    type: '',
    participants: 0,
    price: 0,
    link: '',
    key: '',
    accessibility: 0
  }

  subActivityByType!: Subscription;
  activityTypeList: string[] = ["education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]
  activityByType: IBoredActivity = {
    activity: '',
    type: '',
    participants: 0,
    price: 0,
    link: '',
    key: '',
    accessibility: 0
  }
  selectedActivityType!: string;

  subActivityByParticipantCount!: Subscription
  activityByParticipantCount:IBoredActivity = {
    activity: '',
    type: '',
    participants: 0,
    price: 0,
    link: '',
    key: '',
    accessibility: 0
  }
  participantCount!: number;

  subActivityByPrice!: Subscription;
  activityByPrice: IBoredActivity = {
    activity: '',
    type: '',
    participants: 0,
    price: 0,
    link: '',
    key: '',
    accessibility: 0
  }
  price: number = 0;
  subActivityByPriceRange!: Subscription;
  activityByPriceRange: IBoredActivity = {
    activity: '',
    type: '',
    participants: 0,
    price: 0,
    link: '',
    key: '',
    accessibility: 0
  }
  minPrice: number = 0;
  maxPrice: number = 1;

  constructor(private boredService: BoredServiceService) {}

  getRandomActivityClick() {
    this.boredService.getRandomActivity()
    this.subRandomActivity = this.boredService.$randomActivity.subscribe(activity => {
      this.randomActivity = <IBoredActivity>activity
    })
  }
  getActivityByTypeClick() {
    if(this.selectedActivityType == null || undefined){
      return alert('Please select an activity type for this function')
    } else {
      this.boredService.getActivityByType(this.selectedActivityType)
      this.subActivityByType = this.boredService.$activityByType.subscribe(activity => {
        this.activityByType = <IBoredActivity>activity
      })
    }
  }
  getActivityByParticipantCountClick() {
    if(this.participantCount == null || undefined){
      return alert('Please enter a number first')
    } else {
      this.boredService.getActivityByParticipantCount(this.participantCount)
      this.subActivityByParticipantCount = this.boredService.$activityByParticipantCount.subscribe(activity =>{
        this.activityByParticipantCount = <IBoredActivity>activity
      })
    }
  }
  getActivityByPriceClick() {
    this.boredService.getActivityByPrice(this.price)
    this.subActivityByPrice = this.boredService.$activityByPrice.subscribe(activity => {
      this.activityByPrice = <IBoredActivity>activity
    })
  }
  getActivityByPriceRangeClick() {
    this.boredService.getActivityByPriceRange(this.minPrice, this.maxPrice)
    this.subActivityByPriceRange = this.boredService.$activityByPrinceRange.subscribe(activity => {
      this.activityByPriceRange = <IBoredActivity>activity
    })
  }
  ngOnDestroy() {
    this.subRandomActivity.unsubscribe()
    this.subActivityByType.unsubscribe()
    this.subActivityByParticipantCount.unsubscribe()
    this.subActivityByPrice.unsubscribe()
    this.subActivityByPriceRange.unsubscribe()
  }
}
