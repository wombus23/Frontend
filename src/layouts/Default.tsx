import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ReactNode } from "react";
import { NavLink, NavLinkProps } from "react-router-dom";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "FAQ",
    href: "/faq",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
  {
    label: "Features",
    href: "/features",
  },
];

const Default = ({ children }: { children: JSX.Element | ReactNode }) => {
  return (
    <div className="dark bg-background text-foreground relative overflow-clip">
      <header className="relative z-10">
        <nav className="container mx-auto px-4 h-[72px] flex items-center justify-between">
          <NavLink
            to="/"
            className={"rounded-full px-3 py-1 hover:bg-slate-800"}
          >
            <h1 className="font-overpass uppercase pt-1 text-[16px]">
              Qanoon Bot
            </h1>
          </NavLink>
          <div className="nav-links hidden sm:flex gap-[48px]">
            {navLinks.map((navLink) => {
              return <SiteLink to={navLink.href}>{navLink.label}</SiteLink>;
            })}
          </div>
          <NavDropdown className="sm:hidden" />
          <div className="hidden md:block min-w-[126px] h-[2px]"></div>
        </nav>
      </header>
      <main className="">{children}</main>
    </div>
  );
};

const SiteLink = (
  props: NavLinkProps & React.RefAttributes<HTMLAnchorElement>
) => {
  return (
    <NavLink
      to={props.to}
      className={({ isActive, isPending }) => {
        const _class =
          "font-normal text-[13px] text-gray-300 hover:text-foreground";
        return isPending
          ? `${_class} text-gray-600`
          : isActive
          ? `${_class} border-b-2 border-b-primary !text-foreground`
          : _class;
      }}
    >
      {props.children}
    </NavLink>
  );
};

const NavDropdown = (props: any) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger {...props}>
        <div className="icon w-[24px] h-[24px] p-[6px] rounded-full border-white border-[1px] flex items-center justify-center">
          <NavIcon />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dark">
        {navLinks.map((navLink) => {
          return (
            <NavLink to={navLink.href}>
              <DropdownMenuItem>{navLink.label}</DropdownMenuItem>
            </NavLink>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

const NavIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 14 14"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 2H.5m13 5H.5m13 5H.5"
      />
    </svg>
  );
};

export default Default;
