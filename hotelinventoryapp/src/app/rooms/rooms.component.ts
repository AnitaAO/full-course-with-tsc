import { Component, OnInit } from '@angular/core';
import {RoomList, Rooms} from "./rooms";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})


export class RoomsComponent implements OnInit {
  hotelName: string = 'Michani';
  numberOfRooms: number = 10;

  showNoOfRooms: boolean = true;

  rooms: Rooms = {
    totalRooms: 10,
    availableRooms: 5,
    bookedRooms: 20
  }
  //for chaining an event and displaying ngIf event
  // rooms?: Rooms = {
    //empty objects
  // }

  roomList: RoomList[] =[
    {
    amenities: 'Air connditioner, Free Wi-Fi, Bathroom, TV, Kitchen',
    roomType: 'Deluxe',
    price: 5000,
    photos: 'https://unsplash.com/photos/LUvdI4uCNnM',
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Nov-2021')
    },
    {
    amenities: 'Air connditioner, Free Wi-Fi, Bathroom, TV, Kitchen',
    roomType: 'Deluxe room',
    price: 1000,
    photos: 'https://unsplash.com/photos/PJNO2sLlbB8',
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Nov-2021')
    },
    {
    amenities: 'Air connditioner, Free Wi-Fi, Bathroom, TV, Kitchen',
    roomType: 'Private suite',
    price: 10000,
    photos: 'https://unsplash.com/photos/CbZ4EDP__VQ',
    checkinTime: new Date('11-Nov-2021'),
    checkoutTime: new Date('12-Nov-2021')
    },

    {
      roomType: 'Private suite',
      checkinTime: new Date('22-Nov-2021'),
      checkoutTime: new Date('23-Nov-2021'),
      price: 1200,
      amenities: 'Air conditioner, Free Wi-Fi, Bathroom, TV, Kitchen',
      photos: 'https://unsplash.com/photos/hCU4fimRW-c'
    },
  ]

  constructor() {}

  ngOnInit(): void {}

  toggle(){
    this.showNoOfRooms = !this.showNoOfRooms
  }
}
