"use client";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CloseIcon, MenuIcon } from "@/components/icons";
import Link from "next/link";
import { useState } from "react";

const menuItems = [
  { tile: "自分の記録", href: "/record" },
  { tile: "体重グラフ", href: "/" },
  { tile: "目標", href: "/" },
  { tile: "選択中のコース", href: "/" },
  { tile: "コラム一覧", href: "/column" },
  { tile: "設定", href: "/" },
];

export function MenuDrawer() {
  const [open, setOpen] = useState(false);
  return (
    <Sheet onOpenChange={setOpen} open={open}>
      <SheetTrigger asChild>
        <button>
          <MenuIcon />
        </button>
      </SheetTrigger>
      <SheetContent className="bg-dark-500 border-none px-0">
        <SheetPrimitive.Close className="absolute w-[32px] h-[32px] bg-dark-600 right-2 top-2">
          <CloseIcon />
          <span className="sr-only">Close</span>
        </SheetPrimitive.Close>
        <SheetTitle className="hidden" />
        <div className="grid py-4 divide-y divide-neutral-600">
          {menuItems.map((item, index) => (
            <Link
              onClick={() => setOpen(false)}
              href={item.href}
              key={index}
              className="text-white w-full h-[72px] flex items-center text-lg hover:bg-dark-600 px-6"
            >
              {item.tile}
            </Link>
          ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
