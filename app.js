import React from "react";
import ReactDOM from "react-dom/client";

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

const RestaurantCard = () => {
  return (
    <div className="cards-container">
      <div className="card">
        <div className="card-media">
          <img
            className="card-img"
            src="https://images.unsplash.com/photo-1615719413546-198b25453f85?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYzMDQwMjkwNA&ixlib=rb-1.2.1&q=85"
          />

          <div className="discount">
            40% OFF<p>Up to ₹80</p>
          </div>
          <div className="pro-discount">PRO extra 15% OFF</div>
          <div className="delivery-time">39 mins</div>
          <div className="bookmark"></div>
        </div>
        <div className="card-description">
          <div className="about-place">
            <div className="place">
              <p className="place-name">Pizza Hut</p>
              <p className="place-speciality">Italian, Fast Food, Beverages</p>
            </div>
            <div className="place-review">
              <p className="rating">4.6 ★</p>
              <p className="per-person">₹200 per one</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <>
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
      <RestaurantCard />
    </>
  );
};

const Footer = () => {
  return <div className="footer"></div>;
};

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
