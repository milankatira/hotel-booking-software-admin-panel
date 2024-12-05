'use client';

import { Card } from '@/components/ui/card';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { DollarSign, Users, BedDouble, CalendarCheck2 } from 'lucide-react';

const stats = [
  {
    name: 'Total Revenue',
    value: '$13,500',
    icon: DollarSign,
    change: '+12%',
    changeType: 'positive',
  },
  {
    name: 'Active Bookings',
    value: '45',
    icon: CalendarCheck2,
    change: '+8%',
    changeType: 'positive',
  },
  {
    name: 'Available Rooms',
    value: '12',
    icon: BedDouble,
    change: '-2',
    changeType: 'negative',
  },
  {
    name: 'Total Guests',
    value: '156',
    icon: Users,
    change: '+23%',
    changeType: 'positive',
  },
];

const bookingData = [
  { month: 'Jan', bookings: 65 },
  { month: 'Feb', bookings: 59 },
  { month: 'Mar', bookings: 80 },
  { month: 'Apr', bookings: 81 },
  { month: 'May', bookings: 56 },
  { month: 'Jun', bookings: 55 },
];

export default function AdminDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Dashboard</h1>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
            <div className="mt-4">
              <span
                className={`text-sm font-medium ${
                  stat.changeType === 'positive'
                    ? 'text-green-600'
                    : 'text-red-600'
                }`}
              >
                {stat.change}
              </span>
              <span className="text-sm text-muted-foreground"> vs last month</span>
            </div>
          </Card>
        ))}
      </div>

      <Card className="p-6">
        <h2 className="text-lg font-semibold mb-4">Booking Trends</h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={bookingData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="bookings" fill="hsl(var(--primary))" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </Card>
    </div>
  );
}