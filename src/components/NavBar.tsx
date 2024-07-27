import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div
      className={
        "h-[10%] w-full font-semibold text-blue-700 underline underline-offset-8"
      }
    >
      <nav>
        <NavLink to={"/"}>home</NavLink>
      </nav>
    </div>
  );
}
