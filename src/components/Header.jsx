import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/home/">
        <h1>NC Games</h1>
      </Link>
    </header>
  );
}

export default Header;
