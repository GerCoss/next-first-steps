'use client';

import Link from "next/link";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
  href: string;
  label: string;
}

export const ActiveLink = ({ href, label }: Props) => {

  const pathName = usePathname();
  return (
    <Link 
      className={`${style.link} ${pathName === href && style['active-link']}`}
      href={href}
    >
      {label}
    </Link>
  );
}