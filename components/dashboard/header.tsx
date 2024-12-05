import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Hotel } from 'lucide-react';

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Hotel className="h-8 w-8 text-primary" />
        <h1 className="text-2xl font-bold">Hotel Dashboard</h1>
      </div>
      <Link href="/admin">
        <Button>Admin Panel</Button>
      </Link>
    </div>
  );
}