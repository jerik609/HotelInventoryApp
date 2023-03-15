// why not a class? i'd prefer a class instead, but let's roll with it

export interface Rooms {
    totalRooms?: number; // ? = allow null (empty)
    availableRooms?: number;
    bookedRooms?: number;
}

export interface Room {
    roomNumber?: string;
    roomType: string;
    amenities: string[];
    price: number;
    photos: string[];
    checkinTime: Date;
    checkoutTime: Date;
}
