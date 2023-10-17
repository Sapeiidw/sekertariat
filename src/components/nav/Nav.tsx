"use client";
import React, { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { BellIcon, CogIcon, LogInIcon } from "lucide-react";
import { Input } from "../ui/input";
import { CardExample } from "../card/CardExample";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "../ui/dropdown-menu";

type Props = {};

function Nav({}: Props) {
  const [active, setActive] = useState(false);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  // Function to handle clicks outside the button
  const handleOutsideClick = (event: MouseEvent) => {
    if (
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setActive(false);
    }
  };
  useEffect(() => {
    // Add a global click event listener
    document.addEventListener("click", handleOutsideClick);

    return () => {
      // Clean up the event listener when the component unmounts
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);
  return (
    <div className="flex justify-between items-center sticky top-0 z-50 bg-white/80 backdrop-blur-md rounded-xl py-4 px-4 shadow-soft-2xl">
      <div className="flex flex-col">
        <span className="text-lg font-semibold">Dashboard</span>
        <span className="text-muted-foreground text-xs">/path/to/page</span>
      </div>
      <div className="flex gap-2 items-center">
        <Input placeholder="Search here ..." className="w-fit" />
        {/* cara lama */}
        {/* <div className="relative">
          <Button
            variant={"ghost"}
            size={"icon"}
            ref={buttonRef}
            onClick={() => setActive(!active)}
          >
            <BellIcon className="h-4 w-4" />
          </Button>
          {active && (
            <CardExample className="absolute top-full right-0 mt-6 shadow-2xl transition-all ease-in duration-500" />
          )}
        </div> */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"transparent"} size={"icon"} className="text-accent">
              <BellIcon className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <CardExample className="border-none" />
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={"transparent"} size={"icon"} className="text-accent">
              <CogIcon className="h-5 w-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Setting</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Button size={"sm"}>
          <LogInIcon className="mr-2 h-4 w-4" />
          Login
        </Button>
      </div>
    </div>
  );
}

export default Nav;
