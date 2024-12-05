import { Card } from '@/components/ui/card';
import { BedDouble, Users, CalendarCheck2, DollarSign } from 'lucide-react';

const stats = [
  {
    name: 'Available Rooms',
    value: '8',
    icon: BedDouble,
    description: 'Out of 20 total rooms',
  },
  {
    name: 'Current Guests',
    value: '42',
    icon: Users,
    description: 'Checked in today',
  },
  {
    name: 'Today\'s Check-ins',
    value: '12',
    icon: CalendarCheck2,
    description: 'Expected arrivals',
  },
  {
    name: 'Today\'s Revenue',
    value: '$2,850',
    icon: DollarSign,
    description: 'From 6 bookings',
  },
];

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.name} className="p-6">
          <div className="flex items-center">
            <div className="p-2 bg-primary/10 rounded-lg">
              <stat.icon className="h-6 w-6 text-primary" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-muted-foreground">
                {stat.name}
              </p>
              <p className="text-2xl font-bold">{stat.value}</p>
            </div>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">
            {stat.description}
          </p>
        </Card>
      ))}
    </div>
  );
}