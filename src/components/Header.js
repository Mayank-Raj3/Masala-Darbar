import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Title = () => (
  <a className="a-logo" href="/">
    <img
      src="https://masaladarbar.in/wp-content/uploads/2023/03/cropped-Screenshot_2022-11-22-12-32-05-91_965bbf4d18d205f782c6b8409c5773a4-removebg-preview.png"
      className="logo"
      alt="Masala Darbar"
      decoding="async"
      sizes="(max-width: 633px) 100vw, 633px"
    />
  </a>
);

const Header = () => {
  const online = useOnlineStatus();
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Help</li>
          <li>Profile</li>
          <li>Cart</li>
          <li>
            {online ? (
              <div title="online">💚</div>
            ) : (
              <div title="offline">💔</div>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
