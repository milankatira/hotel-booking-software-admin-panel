import { Card } from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const recentBookings = [
  {
    id: '1',
    guest: 'Alice Johnson',
    room: '201',
    checkIn: '2024-03-19',
    nights: 3,
    status: 'Confirmed',
  },
  {
    id: '2',
    guest: 'Bob Wilson',
    room: '305',
    checkIn: '2024-03-20',
    nights: 2,
    status: 'Pending',
  },
  {
    id: '3',
    guest: 'Carol Brown',
    room: '402',
    checkIn: '2024-03-21',
    nights: 1,
    status: 'Confirmed',
  },
];

export function RecentBookings() {
  return (
    <Card className="p-6">
      <h2 className="text-lg font-semibold mb-4">Recent Bookings</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Guest</TableHead>
            <TableHead>Room</TableHead>
            <TableHead>Check In</TableHead>
            <TableHead>Nights</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentBookings.map((booking) => (
            <TableRow key={booking.id}>
              <TableCell className="font-medium">{booking.guest}</TableCell>
              <TableCell>{booking.room}</TableCell>
              <TableCell>{booking.checkIn}</TableCell>
              <TableCell>{booking.nights}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    booking.status === 'Confirmed'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {booking.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}