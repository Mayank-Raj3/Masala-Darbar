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
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Search</li>
          <li>Offers</li>
          <li>Help</li>
          <li>Profile</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
