import { useEffect, useState } from "react";
import { GoMoon, GoSun } from "react-icons/go";

export default function Toggle() {
  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const [isDark, setIsDark] = useState(
    JSON.parse(localStorage.getItem("isDark")) || mediaQuery.matches
      ? "dim"
      : "wireframe"
  );

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);

  return (
    <label className="swap swap-rotate text-2xl mx-2 btn btn-sm btn-circle btn-ghost">
      <input
        type="checkbox"
        className="theme-controller"
        value="dim"
        checked={isDark === "dim"}
        onChange={() =>
          setIsDark(isDark === "dim" ? "wireframe" : "dim")
        }
      />

      {/* sun icon */}
      <GoSun className="swap-off fill-current text-sm" />

      {/* moon icon */}
      <GoMoon className="swap-on fill-current text-sm" />
    </label>
  );
}
