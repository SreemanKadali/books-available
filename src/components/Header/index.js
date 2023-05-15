import { Link, withRouter } from "react-router-dom";

import "./index.css";

const Header = (props) => {
  const { location } = props;

  const pathname = location;
  console.log(pathname.pathname);

  const home = pathname.pathname !== "/" && "home";
  const post = pathname.pathname !== "/post" && "post";
  console.log(home, post);

  return (
    <nav className="mt-3">
      <div className="container d-flex justify-content-between align-items-center">
        <h1 className="">Books Store</h1>
        <ul className=" d-flex w-75 justify-content-around mb-0">
          <Link className="nav-link" to="/">
            <li>
              <h4 className={`${home}`}>Home</h4>
            </li>
          </Link>
          <Link className="nav-link" to="/post">
            <li>
              <h4 className={`${post}`}>Post book to server</h4>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default withRouter(Header);
