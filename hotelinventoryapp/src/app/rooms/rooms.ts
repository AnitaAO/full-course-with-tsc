//for chaining object and ngIf display event
// export interface Rooms{
//   totalRooms?: number
//   availableRooms?: number
//   bookedRooms?: number
//}

import * as url from "url";

export interface Rooms{
  totalRooms: number
  availableRooms: number
  bookedRooms: number
}

export interface RoomList{
  checkinTime: Date
  checkoutTime: Date
  roomType: string
  amenities: string
  price: number
  photos: string
}
