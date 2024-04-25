import Link from "next/link";
import { auth } from "@/auth";
import * as actions from "@/actions";
import { Input, Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@nextui-org/react";

import HeaderAuth from "./HeaderAuth";

export default function Header() {
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold text-3xl">
          Discuss
        </Link>
      </NavbarBrand>
      <NavbarContent justify="center">
        <NavbarItem>
          <Input placeholder="Search for a topic or post ..." />
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <HeaderAuth />
      </NavbarContent>
    </Navbar>
  );
}
