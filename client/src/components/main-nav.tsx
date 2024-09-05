import { cn } from '@/lib/utils';
import { PrivateRoutesEnum } from '@/Routes';
import { Link as RouterLink, useLocation } from 'react-router-dom';

function Link({ href, children }: { href: string; children: React.ReactNode }) {
  const pathname = useLocation().pathname;
  const active = pathname === href;

  return (
    <RouterLink
      className={cn(
        'text-sm font-medium transition-colors hover:text-primary',
        {
          'font-bold': active,
        },
      )}
      to={href}
    >
      {children}
    </RouterLink>
  );
}

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', className)}
      {...props}
    >
      <Link href={PrivateRoutesEnum.Home}>Home</Link>
    </nav>
  );
}
