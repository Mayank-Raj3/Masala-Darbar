import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

import { useDispatch } from "react-redux";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <>
      <button
        className=" p-2 m-2 bg-black text-white rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
      {cartItems?.length === 0 && (
        <h1> Cart is empty. Add Items to the cart!</h1>
      )}
      <menu>
        {cartItems.map((rr, index) => {
          if (rr && rr.card && rr.card.info) {
            return (
              <div className="menu-item-bar" key={rr.card.info.id}>
                <div className="left-menu-item">
                  <div className="nonveg-veg">
                    <div className="item-name-menu">
                      {rr.card.info.name}

                      <button className="ml-10 bg-blue-500 hover:bg-blue-700 text-white text-sm	 py-1 px-2 rounded-full">
                        Add to cart
                      </button>
                    </div>
                    <div className="item-price-menu">
                      ₹
                      {parseInt(rr.card.info.price) / 100 ||
                        parseInt(rr.card.info.defaultPrice) / 100}
                    </div>
                  </div>
                  <div className="item-menu-description">
                    {rr.card.info.description}
                  </div>
                </div>
                <img
                  className="img-menu-item"
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${rr.card.info.imageId}`}
                  alt={rr.card.info.name}
                />
              </div>
            );
          }
          return null;
        })}
      </menu>
    </>
  );
};

export default Cart;
