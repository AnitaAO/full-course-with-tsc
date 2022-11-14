import { Component, OnInit } from '@angular/core';
import {IRoomsItems, IRooms} from "./roomsData";

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss'],
})


export class RoomsComponent implements OnInit {
  hotelName: string = 'Michani';
  numberOfRooms: number = 10;

  showNoOfRooms: boolean = true;

  selectedRow!: IRoomsItems;

  rooms: IRooms = {
    totalRooms: 10,
    availableRooms: 5,
    bookedRooms: 20
  }
  //for chaining an event and displaying ngIf event
  // rooms?: RoomsData = {
    //empty objects
  // }
  roomItems: IRoomsItems[] = [];
  constructor() {}

  ngOnInit(): void {
    this.roomItems =
      [
      {
        roomNumber: 1,
        amenities: 'Air connditioner, Free Wi-Fi, Bathroom, TV, Kitchen',
        roomType: 'Deluxe',
        price: 5000,
        photos: 'https://unsplash.com/photos/LUvdI4uCNnM',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        ratings: 4,
      },
      {
        roomNumber: 2,
        amenities: 'Air connditioner, Free Wi-Fi, Bathroom, TV, Kitchen',
        roomType: 'Deluxe room',
        price: 1000,
        photos: 'https://unsplash.com/photos/PJNO2sLlbB8',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        ratings: 5,
      },
      {
        roomNumber: 3,
        amenities: 'Air connditioner, Free Wi-Fi, Bathroom, TV, Kitchen',
        roomType: 'Private suite',
        price: 10000,
        photos: 'https://unsplash.com/photos/CbZ4EDP__VQ',
        checkinTime: new Date('11-Nov-2021'),
        checkoutTime: new Date('12-Nov-2021'),
        ratings: 4.5,
      },

      {
        roomNumber: 4,
        roomType: 'Private suite',
        checkinTime: new Date('22-Nov-2021'),
        checkoutTime: new Date('23-Nov-2021'),
        price: 1200,
        amenities: 'Air conditioner, Free Wi-Fi, Bathroom, TV, Kitchen',
        photos: 'https://unsplash.com/photos/hCU4fimRW-c',
        ratings: 3.5,
      },
    ];
  }

  toggle(){
    this.showNoOfRooms = !this.showNoOfRooms
  }

  selectRow(room: IRoomsItems){
    this.selectedRow = room
  }

  // const addRoom: IRoomsItems {
  //
  // }
}
