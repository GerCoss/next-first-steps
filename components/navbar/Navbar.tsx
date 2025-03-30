import Link from "next/link";
import { HomeIcon } from "@primer/octicons-react";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/pricing", label: "Pricing" },
];

export const Navbar = () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href={'/'} className="flex items-center">
        <HomeIcon className="mr-2"/>
        <span>Home</span>
      </Link>
      <div className="flex flex-1"></div>

      {
      navItems.map((navItem) => (
        <ActiveLink key={navItem.href} {...navItem} />
      ))
      }

    </nav>
  );
}