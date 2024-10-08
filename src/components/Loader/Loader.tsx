import { useState, useEffect } from "react";
import css from "./Loader.module.css";

export default function Loader({ children }: LoadingProps) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((dots) => (dots.length < 3 ? dots + "." : ""));
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2 className={css.text}>
      {children}
      {dots}
    </h2>
  );
}
