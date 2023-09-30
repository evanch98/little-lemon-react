import Button from "./common/button";
import { Container } from "./common/container";

const links = [
  {
    name: "Home",
  },
  {
    name: "About",
  },
  {
    name: "Menu",
  },
  {
    name: "Reservations",
  },
  {
    name: "Order Online",
  },
];

const Nav = () => {
  return (
    <Container className="py-[32px]">
      <nav className="flex items-center justify-between">
        <a href="/">
          <img
            src="/assets/Logo.svg"
            alt="Little Lemon Logo"
            className="w-[300px] h-[81.1px]"
          />
        </a>
        <ul className="flex items-center justify-center gap-x-[16px] nav-link">
          {links.map((link) => (
            <li className="cursor-pointer" key={link.name}>
              {link.name}
            </li>
          ))}
          <li>
            <a href="/">
              <Button>Login</Button>
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

export default Nav;
