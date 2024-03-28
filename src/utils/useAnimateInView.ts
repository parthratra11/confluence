import { useEffect } from "react";
import { useInView, useSpring } from "@react-spring/web";

export default function useAnimateInView({
  to,
  from,
  reset
}: {
  to: object;
  from: object;
  reset?: boolean;
}) {
  const [ref, inView] = useInView({ amount: 0.5 });
  const [spring, api] = useSpring(() => from);

  useEffect(() => {
    if (inView) {
      api.start({ to: to, reset: reset !== undefined ? reset : false });
    }
  }, [inView, api, to, reset]);

  return { ref, spring, inView };
}
