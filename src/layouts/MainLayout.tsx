import { IconBrandGithub, IconBrandInstagram } from "@tabler/icons-react";
import { Link, NavLink, Outlet, useNavigate } from "react-router-dom";
import { twJoin } from "tailwind-merge";
import Button from "../components/Button";

const navLinks = {
  Home: "/",
  Pricing: "/pricing",
};

function Header() {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 flex w-full items-center justify-between bg-white px-18 py-6">
      <div className="flex items-center gap-4">
        <img src="/Logo.svg" alt="Logo" className="w-14 rounded-lg" />
        <h1 className="heading-3 text-brand">Mikari</h1>
      </div>
      <nav className="relative flex items-center gap-14 p-2">
        {Object.entries(navLinks).map(([name, path]) => (
          <NavLink
            key={name}
            to={path}
            className={(props) =>
              twJoin(
                "heading-6 relative text-4xl text-black before:absolute before:-bottom-0.5 before:left-0 before:h-0.5 before:w-full before:origin-right before:scale-x-0 before:bg-black before:transition-transform before:duration-300 hover:before:origin-left hover:before:scale-x-100",
                props.isActive && "before:origin-left before:scale-x-100",
              )
            }
          >
            {name}
          </NavLink>
        ))}
      </nav>
      <Button text="Contact Us" onClick={() => navigate("/contact")} />
    </header>
  );
}

function Footer() {
  return (
    <footer className="flex items-center justify-between p-18">
      <div className="flex w-80 flex-col gap-6">
        <div className="flex items-center gap-4">
          <img src="/Logo.svg" alt="Logo" className="size-14 rounded-lg" />
          <h1 className="heading-3 text-brand">Mikari</h1>
        </div>
        <p className="font-sans text-xl leading-7 tracking-[0.4px] text-grey">
          Create amazing website for your business
        </p>
      </div>
      <div className="flex gap-5">
        <Link
          to="https://instagram.com/mikari_team"
          className="flex rounded-full bg-line p-3 outline-none"
          target="_blank"
        >
          <IconBrandInstagram className="size-6 text-black" />
        </Link>
        <Link
          to="https://github.com/mikari-id"
          className="flex rounded-full bg-line p-3 outline-none"
          target="_blank"
        >
          <IconBrandGithub className="size-6 text-black" />
        </Link>
      </div>
    </footer>
  );
}

export default function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
