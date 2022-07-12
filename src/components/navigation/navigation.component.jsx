import Section from "./section.component";
import { Link, Outlet } from "react-router-dom";

const Navigation = () => {
  const navPages = ["Home", "Info", "Login"];

  return (
    <div>
      <div className="Navigation">
        <h1>
          <Link to="/home">Reporter</Link>
        </h1>
        <nav>
          {navPages.map((page, index) => (
            <Link to={`/${page.toLowerCase()}`} key={index + 1}>
              <Section name={page} />
            </Link>
          ))}
        </nav>
      </div>
      <Outlet />
    </div>
  );
};

export default Navigation;
