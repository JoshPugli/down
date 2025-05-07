import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlusCircle, Users } from 'lucide-react';

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center p-4 pb-8 self-center h-full ">
      <div className="flex max-w-md flex-col items-center text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted mb-6">
          <Users className="h-10 w-10 text-muted-foreground" />
        </div>
        <h2 className="text-2xl font-bold tracking-tight mb-2">No group selected</h2>
        <p className="text-muted-foreground mb-6">
          Select a group from the sidebar or create a new group to get started.
        </p>
        <Button asChild size="lg" className="gap-2">
          <Link href="/groups/new">
            <PlusCircle className="h-5 w-5" />
            Create Group
          </Link>
        </Button>
      </div>
    </div>
  );
}
