"use client";
import {
  CalendarRangeIcon,
  DollarSignIcon,
  LayoutDashboardIcon,
  ScrollTextIcon,
  Users2Icon,
  WatchIcon,
} from "lucide-react";
import SidebarItem from "./SidebarItem";
import { usePathname } from "next/navigation";

function Sidebar() {
  const pathname = usePathname();
  const sidebar = [
    { title: "Dashboard", link: "/", icon: <LayoutDashboardIcon /> },
    { title: "Keuangan", link: "/keuangan", icon: <DollarSignIcon /> },
    { title: "Kepegawaian", link: "/kepegawaian", icon: <Users2Icon /> },
    {
      title: "Kumpulan Regulasi",
      link: "/kumpulan-regulasi",
      icon: <ScrollTextIcon />,
    },
    {
      title: "Monitoring Kerja",
      link: "/monitoring-kerja",
      icon: <WatchIcon />,
    },
    { title: "Agenda", link: "/agenda", icon: <CalendarRangeIcon /> },
  ];
  return (
    <aside className="max-w-xs z-50 fixed inset-y-0 my-4 block w-full -translate-x-full flex-wrap items-center justify-between overflow-y-auto rounded-2xl border-0 bg-white p-0 antialiased shadow-none transition-transform duration-200 xl:left-0 xl:translate-x-0 xl:bg-transparent">
      <div className="h-16 p-4 text-xl font-bold text-center">Sekertariat</div>

      <div className="items-center block w-auto max-h-screen overflow-auto grow basis-full">
        <ul className="flex flex-col gap-3">
          {sidebar.map((item) => (
            <SidebarItem
              key={item.title}
              active={pathname == item.link}
              title={item.title}
              link={item.link}
              icon={item.icon}
            />
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
