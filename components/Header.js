import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import Image from "next/image";

export function Header() {
  return (
    <Navbar fluid rounded className="container mx-auto">
      <NavbarBrand className="flex items-center gap-3">
        <Image
          src={"/images/logo.png"}
          className="mr-3 h-6 sm:h-9"
          alt="Logo"
          width={50}
          height={50}
        />
        <span className="self-center whitespace-nowrap text-xl font-bold text-[#0E8DE2] -ml-4">
          Novo Health
        </span>
      </NavbarBrand>
      <div className="flex md:order-2">
        <Button className="bg-[#199DF6] cursor-pointer">Sign In</Button>
        <NavbarToggle />
      </div>
      <NavbarCollapse>
        <NavbarLink href="#" className=" custom-hover-color">
          Home
        </NavbarLink>
        <NavbarLink href="#" className="custom-hover-color">
          About
        </NavbarLink>
        <NavbarLink href="#" className="custom-hover-color">
          Services
        </NavbarLink>
        <NavbarLink href="#" className="custom-hover-color">
          Pricing
        </NavbarLink>
        <NavbarLink href="#" className="custom-hover-color">
          Contact
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}
