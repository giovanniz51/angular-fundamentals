import { Component, OnInit } from '@angular/core';
import {Passenger} from "../../models/passenger.interface"

@Component({
  selector: 'app-passenger-dashboard',
  templateUrl: './passenger-dashboard.component.html',
  styleUrls: ['./passenger-dashboard.component.scss']
})
export class PassengerDashboardComponent implements OnInit {
  passengers: Passenger[];

  constructor() { }

  ngOnInit(): void {
    console.log("ngOnInit!!!")
    this.passengers = [
      {
        id: 1,
        fullname: "Stephen",
        checkedIn: true,
        checkedInDate: 1490742000000,
        children: [{name: "Gianni", age: 8}, {name: "Nico", age: 4}]
      },
      {
        id: 2,
        fullname: "Rose",
        checkedIn: false,
        checkedInDate: 1490742000000
      },
      {
        id: 3,
        fullname: "James",
        checkedIn: true,
        checkedInDate: null,
        children: [{name: "Gianni", age: 8}, {name: "Nico", age: 4}]
      },
    ]
   }
}
