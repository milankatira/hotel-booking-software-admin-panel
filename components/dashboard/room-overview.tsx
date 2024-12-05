import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const rooms = [
  {
    number: '101',
    type: 'Deluxe Suite',
    status: 'occupied',
    guest: 'John Doe',
    checkOut: '2024-03-20',
  },
  {
    number: '102',
    type: 'Standard Room',
    status: 'available',
    guest: null,
    checkOut: null,
  },
  {
    number: '103',
    type: 'Premium Suite',
    status: 'cleaning',
    guest: null,
    checkOut: null,
  },
  {
    number: '104',
    type: 'Family Room',
    status: 'occupied',
    guest: 'Jane Smith',
    checkOut: '2024-03-21',
  },
];

export function RoomOverview() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'occupied':
        return 'bg-blue-100 text-blue-800';
      case 'available':
        return 'bg-green-100 text-green-800';
      case 'cleaning':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Room Overview</h2>
      <div className="space-y-4">
        {rooms.map((room) => (
          <div
            key={room.number}
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
          >
            <div>
              <p className="font-medium">Room {room.number}</p>
              <p className="text-sm text-muted-foreground">{room.type}</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge className={getStatusColor(room.status)}>
                {room.status.charAt(0).toUpperCase() + room.status.slice(1)}
              </Badge>
              {room.guest && (
                <div className="text-right">
                  <p className="text-sm font-medium">{room.guest}</p>
                  <p className="text-xs text-muted-foreground">
                    Until {room.checkOut}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}