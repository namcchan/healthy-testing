import Image from "next/image";
import {
  ChallengeIcon,
  InfoIcon,
  MemoIcon,
  MenuIcon,
} from "@/components/icons";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { MenuDrawer } from "@/components/menu-drawer";

const NAV_ITEMS = [
  { title: "自分の記録", icon: <MemoIcon />, href: "/record" },
  { title: "チャレンジ", icon: <ChallengeIcon />, href: "/column" },
  { title: "お知らせ", icon: <InfoIcon />, notiNumber: 1, href: "/record" },
];

export const Header = () => {
  return (
    <header className="bg-dark-500">
      <div className="flex items-center justify-between h-16 container">
        <Link href="/">
          <Image src="/logo-rectagle.svg" alt="Logo" width={109} height={40} />
        </Link>

        <div className="flex">
          <ul className="hidden sm:flex">
            {NAV_ITEMS.map((item, index) => (
              <NavItem key={index} {...item} notiNumber={item.notiNumber} />
            ))}
          </ul>
          <MenuDrawer />
        </div>
      </div>
    </header>
  );
};

function NavItem({
  title,
  icon,
  notiNumber,
  href,
}: {
  title: string;
  icon: React.ReactNode;
  notiNumber?: number;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="flex items-center min-w-[160px] cursor-pointer hover:bg-dark-600 px-2 rounded gap-2 py-1"
    >
      <div className="relative">
        {icon}
        {notiNumber && (
          <div className="absolute bg-primary-500 w-4 h-4 text-[10px] grid place-content-center top-0 -right-2 rounded-full text-white">
            {notiNumber}
          </div>
        )}
      </div>
      <span className="text-white">{title}</span>
    </Link>
  );
}
