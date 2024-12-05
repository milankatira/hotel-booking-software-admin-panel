'use client';

import { DashboardHeader } from '@/components/dashboard/header';
import { DashboardStats } from '@/components/dashboard/stats';
import { RoomOverview } from '@/components/dashboard/room-overview';
import { RecentBookings } from '@/components/dashboard/recent-bookings';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DashboardHeader />
        <div className="mt-8">
          <DashboardStats />
        </div>
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <RoomOverview />
          <RecentBookings />
        </div>
      </div>
    </div>
  );
}