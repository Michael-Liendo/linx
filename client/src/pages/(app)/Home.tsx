import { linksColumns } from '@/components/datagrids/links/links-columns';
import { DataTable } from '@/components/datagrids/links/links-table';
import { MainNav } from '@/components/main-nav';
import { UserNav } from '@/components/user-nav';
import { LinkSchema } from '@linx/shared';
import { z } from 'zod';
import useAuth from '../../hooks/Auth';

export default function HomeApp() {
  const { user } = useAuth();
  console.log(user);
  return (
    <>
      {/* todo: move into a layout */}
      <div className="border-b">
        <div className="flex h-16 items-center px-8">
          <h2>Linx</h2>
          <MainNav className="mx-6" />
          <div className="ml-auto flex items-center space-x-4">
            <UserNav />
          </div>
        </div>
      </div>
      {/* todo: end to move into a layout */}
      <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">Welcome back!</h2>
            <p className="text-muted-foreground">
              Here&apos;s a list of your tasks for this month!
            </p>
          </div>
        </div>
        <DataTable
          data={z.array(LinkSchema).parse([
            {
              shorter_name: 'michael',
              url: 'https://michaelliendo.com',
              id: '3',
              user_id: user?.id,
              created_at: new Date(),
              updated_at: new Date(),
            },
          ])}
          columns={linksColumns}
        />
      </div>
    </>
  );
}
