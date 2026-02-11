import Link, { LinkProps } from "next/link";
import { forwardRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<LinkProps, "className" | "href"> {
  className?: string;
  activeClassName?: string;
  pendingClassName?: string;
  to: string;
  children?: ReactNode;
  onClick?: () => void;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  (
    {
      className,
      activeClassName,
      pendingClassName,
      to,
      children,
      onClick,
      ...props
    },
    ref,
  ) => {
    return (
      <Link
        ref={ref}
        href={to}
        className={cn(className, activeClassName && pendingClassName)}
        onClick={onClick}
        {...props}
      >
        {children}
      </Link>
    );
  },
);

NavLink.displayName = "NavLink";

export default NavLink;
