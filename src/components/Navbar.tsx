import { twMerge } from "tailwind-merge";
import { useState, useEffect } from "react";
import { animated, useSpring, useTrail, useInView } from "@react-spring/web";

// Type definitions
import type { RefObject } from "react";
import type { IParallax } from "@react-spring/parallax";

// Internal dependencies
import Button from "./Button";

// Content dependencies
import { REGISTRATION_URL, MENU_ITEMS as menuItems } from "@/content/constants";

export default function Navbar({
  parallax
}: {
  parallax: RefObject<IParallax>;
}) {
  /* Animate menu in and out */
  const [showMenu, setShowMenu] = useState(false);
  const [menuRef, menuInView] = useInView();
  const [spring, api] = useSpring(() => ({
    transform: "translateX(-100%)"
  }));

  useEffect(() => {
    api.start({
      transform: showMenu ? "translateX(0%)" : "translateX(-100%)"
    });
  }, [showMenu, api]);

  /* Animate menu items */
  const [trail, trailApi] = useTrail(
    menuItems.length + 1, // + 1 for the Register button
    () => ({
      from: {
        transform: "translateY(-10%)",
        opacity: 0
      },
      to: {
        transform: "translateY(0%)",
        opacity: 1
      },
      reset: true
    })
  );

  useEffect(() => {
    if (menuInView && trailApi)
      trailApi.start({ to: { opacity: 1 }, reset: true });
  }, [menuInView, trailApi]);

  return (
    <>
      <nav className="fixed left-0 top-0 z-[999] flex w-full justify-end gap-2 p-4 md:left-1/2 md:max-w-[1280px] md:translate-x-[-50%] md:px-4">
        <RegisterButton />
        <Button
          className="bg-accent-700"
          onClick={() => setShowMenu((showMenu) => !showMenu)}
        >
          Menu
        </Button>
      </nav>
      <animated.div
        className="fixed left-0 top-0 z-[1000] h-screen w-full p-2 md:max-w-[400px]"
        style={spring}
      >
        <div className="relative flex h-full w-full flex-col items-center justify-center rounded-lg bg-secondary-300/50 p-4 backdrop-blur-md md:items-start md:px-16">
          <Button
            className="absolute right-0 top-0 m-4 bg-accent-700"
            onClick={() => setShowMenu(false)}
          >
            Close
          </Button>
          <animated.div
            className="flex h-[90vh] flex-col items-center justify-center gap-4 overflow-y-auto md:items-start"
            ref={menuRef}
          >
            {trail.map((props, index) =>
              index !== trail.length - 1 ? (
                <animated.a
                  onClick={() => {
                    parallax?.current?.scrollTo(menuItems[index].offset);
                    setShowMenu(false);
                  }}
                  key={index}
                  style={props}
                  className="display text-tertiary-700 md:text-5xl"
                >
                  {menuItems[index].name}
                </animated.a>
              ) : (
                <animated.div key={index} style={props}>
                  <RegisterButton className="mt-12 px-8 text-2xl" />
                </animated.div>
              )
            )}
          </animated.div>
        </div>
      </animated.div>
    </>
  );
}

/* Register Button */
function RegisterButton({ className }: { className?: string }) {
  return (
    <Button
      className={twMerge(
        "rounded-none border-4 border-secondary-400 bg-tertiary-700 text-secondary-400 hover:bg-tertiary-800 focus:bg-tertiary-900 active:bg-tertiary-900",
        className
      )}
      href={REGISTRATION_URL}
    >
      Register
    </Button>
  );
}
