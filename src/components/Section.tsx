import { twMerge } from "tailwind-merge";
import { ParallaxLayer } from "@react-spring/parallax";

// Type definitions
import type { ReactNode } from "react";

export default function Section({
  children,
  offset,
  mdAlign,
  containerClassName
}: {
  children: ReactNode;
  offset: number;
  mdAlign?: "left" | "right";
  containerClassName?: string;
}) {
  return (
    <ParallaxLayer offset={offset}>
      <div
        className={twMerge(
          `no-scrollbar h-screen overflow-y-hidden bg-tertiary-900 p-8 py-16 md:max-w-[1280px]`,
          mdAlign === "left" ? "md:ml-0 md:mr-auto md:rounded-r-lg" : "",
          mdAlign === "right" ? "md:ml-auto md:mr-0 md:rounded-l-lg" : "",
          containerClassName
        )}
      >
        {children}
      </div>
    </ParallaxLayer>
  );
}
