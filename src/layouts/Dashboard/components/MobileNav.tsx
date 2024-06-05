import {
  NewChatIcon,
  ChatsIcon,
  SavedIcon,
  SearchIcon,
} from "@/components/icons";
import { NavLink, NavLinkProps } from "react-router-dom";

import { cn } from "@/lib/utils";

const MobileNav = ({ className }: { className?: string }) => {
  return (
    <nav
      className={cn(
        "left-nav bg-neutral-900 text-white flex flex-col items-center p-2 gap-2",
        className
      )}
    >
      <DashboardLink
        icon={<NewChatIcon className="w-[20px] h-[20px]" />}
        to="/dashboard/chat"
      >
      </DashboardLink>
      <DashboardLink
        icon={<ChatsIcon className="w-[20px] h-[20px]" />}
        to="/dashboard/chats"
      >
      </DashboardLink>
      <DashboardLink
        icon={<SavedIcon className="w-[20px] h-[20px]" />}
        to="/dashboard/saved"
      >
      </DashboardLink>
      <DashboardLink
        icon={<SearchIcon className="w-[20px] h-[20px]" />}
        to="/dashboard/search"
      >
      </DashboardLink>
    </nav>
  );
};

const DashboardLink = (
  props: NavLinkProps & React.RefAttributes<HTMLAnchorElement> & any
) => {
  return (
    <NavLink
      to={props.to}
      className={({ isActive, isPending }) => {
        const _class =
          "rounded-full font-medium hover:bg-accent/10 transition-all duration-100 flex items-center gap-2 w-[40px] h-[40px] aspect-square justify-center";
        return isPending
          ? `${_class} text-gray-600`
          : isActive
          ? `${_class} bg-[#303637] text-main hover:bg-[#303637]/90`
          : _class;
      }}
    >
      {props?.icon}
    </NavLink>
  );
};

export default MobileNav;
