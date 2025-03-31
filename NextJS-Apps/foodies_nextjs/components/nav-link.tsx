"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import classes from "./nav-link.module.css";

type NavLinkProps = {
  children: React.ReactNode;
  href: string;
};

export default function NavLink({ children, href }: NavLinkProps) {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={
        path.startsWith(href)
          ? `${classes.link} ${classes.active}`
          : classes.link
      }
    >
      {children}
    </Link>
  );
}
