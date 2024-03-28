import { twMerge } from "tailwind-merge";

// Type definitions
import type { ReactNode } from "react";

export default function Button({
  children,
  className,
  onClick,
  href
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
}) {
  return (
    <a
      className={twMerge(
        "inline-flex items-center rounded-lg bg-accent-700 px-6 py-4 text-sm font-medium text-white hover:bg-accent-800 focus:bg-accent-800 active:bg-accent-900",
        className
      )}
      onClick={onClick}
      href={href}
    >
      {children}
    </a>
  );
}
