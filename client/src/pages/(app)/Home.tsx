import { DataTable } from '@/components/data-table';
import { linksColumns } from '@/components/datagrids/links/links-columns';
import { MainNav } from '@/components/main-nav';
import { UserNav } from '@/components/user-nav';
import useLinks from '@/hooks/useLinks';

export default function HomeApp() {
	const { links } = useLinks();

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
					</div>
				</div>
				<DataTable data={links} columns={linksColumns} />
			</div>
		</>
	);
}
