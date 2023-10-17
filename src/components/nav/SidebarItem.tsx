import React from 'react';
import { cn } from '@/lib/utils';

type Props = {
    title: string;
    link: string;
    icon: React.ReactNode;
    active: boolean;
}

const SidebarItem = ({ title, link, icon, active}: Props) => (
  <li className="w-full">
    <a
      className={cn("py-2 text-sm my-0 mx-4 flex items-center gap-2 whitespace-nowrap rounded-lg px-4", active ? 'bg-white shadow-soft-2xl' : "text-muted-foreground")}
      href={link}
    >
      <div className={cn('shadow-soft-2xl mr-2 flex h-8 w-8 items-center justify-center rounded-lg xl:p-2', active ? 'bg-gradient-to-tl from-primary to-secondary text-white' : 'bg-white')}>
        {icon}
      </div>
      <span className="duration-300 opacity-100 pointer-events-none ease-in">{title}</span>
    </a>
  </li>
);

export default SidebarItem;
