import { useEffect, useRef } from "react";
import Lottie from "@/utils/Lottie";

type Props = {
  name: string;
};

export function Animation({ name }: Props): JSX.Element {
  const divRef = useRef<HTMLDivElement>(null);

  async function loadAnim() {
    Lottie.loadAnimation({
      container: divRef?.current, // the dom element that will contain the animation: ;
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: await import(`@/animations/${name}`), // the path to the animation json
    });
  }

  useEffect(() => {
    loadAnim();
  }, []);

  return <div ref={divRef} id="mfilype" style={{ width: "70%" }}></div>;
}
