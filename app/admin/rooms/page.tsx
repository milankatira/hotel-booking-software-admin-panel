'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { Room } from '@/types';

const mockRooms: Room[] = [
  {
    id: '1',
    name: 'Deluxe Suite',
    description: 'Spacious suite with ocean view',
    price: 299,
    capacity: 2,
    amenities: ['King bed', 'Ocean view', 'Mini bar'],
    images: ['https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&auto=format&fit=crop&q=60'],
    isAvailable: true,
  },
  // Add more mock rooms as needed
];

export default function RoomsPage() {
  const [rooms, setRooms] = useState<Room[]>(mockRooms);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Rooms</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Room
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Room</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Room Name</Label>
                <Input id="name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="price">Price per Night</Label>
                <Input id="price" type="number" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="capacity">Capacity</Label>
                <Input id="capacity" type="number" />
              </div>
            </div>
            <Button>Save Room</Button>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <Card key={room.id} className="overflow-hidden">
            <img
              src={room.images[0]}
              alt={room.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">{room.name}</h3>
                <span className="text-lg font-bold">${room.price}/night</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                {room.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {room.amenities.map((amenity) => (
                  <span
                    key={amenity}
                    className="px-2 py-1 bg-secondary text-secondary-foreground rounded-md text-sm"
                  >
                    {amenity}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center justify-between">
                <span
                  className={`px-2 py-1 rounded-full text-sm ${
                    room.isAvailable
                      ? 'bg-green-100 text-green-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {room.isAvailable ? 'Available' : 'Booked'}
                </span>
                <div className="space-x-2">
                  <Button variant="outline" size="icon">
                    <Pencil className="h-4 w-4" />
                  </Button>
                  <Button variant="destructive" size="icon">
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}