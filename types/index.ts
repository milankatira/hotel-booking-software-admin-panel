export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  capacity: number;
  amenities: string[];
  images: string[];
  isAvailable: boolean;
}

export interface Booking {
  id: string;
  roomId: string;
  guestName: string;
  email: string;
  checkIn: string;
  checkOut: string;
  totalPrice: number;
  status: 'confirmed' | 'cancelled' | 'completed';
  createdAt: string;
}

export interface DashboardStats {
  totalRooms: number;
  availableRooms: number;
  totalBookings: number;
  activeBookings: number;
  revenue: number;
}