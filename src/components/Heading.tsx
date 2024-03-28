import { twMerge } from "tailwind-merge";
import { animated } from "@react-spring/web";

// Internal dependencies
import useAnimateInView from "@/utils/useAnimateInView";

// Type definitions
import type { ReactNode } from "react";

export default function Heading({
  children,
  className,
  align
}: {
  children: ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
}) {
  const { ref, spring } = useAnimateInView({
    from: { opacity: 0, y: 20 },
    to: { opacity: 1, y: 0 }
  });

  return (
    <animated.h1
      className={twMerge(
        `heading text-right text-secondary-200 md:text-center`,
        align === "left" ? "text-left" : "",
        align === "center" ? "text-center" : "",
        align === "right" ? "text-right" : "",
        className
      )}
      ref={ref}
      style={spring}
    >
      {children}
    </animated.h1>
  );
}
