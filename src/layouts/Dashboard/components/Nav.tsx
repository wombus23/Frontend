import QanoonBot from "@/assets/qanoon-bot-light-subtext.svg";
import {
  NewChatIcon,
  ChatsIcon,
  SavedIcon,
  SearchIcon,
} from "@/components/icons";
import { NavLink, NavLinkProps } from "react-router-dom";

import { cn } from "@/lib/utils";

const Nav = ({ className }: { className?: string }) => {
  return (
    <nav
      className={cn(
        "left-nav bg-[#1c2426] w-[240px] p-4 text-white flex flex-col gap-2",
        className
      )}
    >
      <NavLink to="/">
        <img
          src={QanoonBot}
          alt="Qanoon Bot"
          className="max-w-[160px] mx-auto mb-4"
        />
      </NavLink>
      <DashboardLink
        icon={<NewChatIcon className="w-[20px] h-[20px]" />}
        to="/dashboard/chat"
      >
        New Chat
      </DashboardLink>
      <DashboardLink
        icon={<ChatsIcon className="w-[20px] h-[20px]" />}
        to="/dashboard/chats"
      >
        Chats
      </DashboardLink>
      <DashboardLink
        icon={<SavedIcon className="w-[20px] h-[20px]" />}
        to="/dashboard/saved"
      >
        Saved
      </DashboardLink>
      <DashboardLink
        icon={<SearchIcon className="w-[20px] h-[20px]" />}
        to="/dashboard/search"
      >
        Search
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
          "py-2 px-3 rounded-full font-medium hover:bg-accent/10 transition-all duration-100 flex items-center gap-2";
        return isPending
          ? `${_class} text-gray-600`
          : isActive
          ? `${_class} bg-[#303637] text-main hover:bg-[#303637]/90`
          : _class;
      }}
    >
      {props?.icon}
      <span>{props.children}</span>
    </NavLink>
  );
};

export default Nav;
