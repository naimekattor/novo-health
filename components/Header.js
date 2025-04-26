import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  return (
    <Navbar fluid rounded className="container mx-auto cursor-pointer">
      <NavbarBrand className="flex items-center gap-3">
        <Image
          src="/images/logo.png"
          alt="Logo"
          width={64}
          height={63}
          className="mr-3 h-9"
        />
        <span className="self-center whitespace-nowrap text-xl font-bold text-[#0E8DE2] -ml-4">
          Novo Health
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Link href="/login">
          <Button className="bg-[#199DF6] cursor-pointer">Sign In</Button>
        </Link>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <Link href="/" className=" custom-hover-color">
          Home
        </Link>
        <NavbarLink href="#" className="custom-hover-color">
          About
        </NavbarLink>
        <NavbarLink href="#" className="custom-hover-color">
          Services
        </NavbarLink>
        <NavbarLink href="#" className="custom-hover-color">
          Pricing
        </NavbarLink>
        <Link href="/contact" className="custom-hover-color">
          Contact
        </Link>
      </NavbarCollapse>
    </Navbar>
  );
}
