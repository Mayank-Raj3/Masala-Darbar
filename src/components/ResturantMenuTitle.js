import { useState } from "react";
import { useResolvedPath } from "react-router-dom";

const ResturantMenuTitle = ({ props }) => {
  const [upDown, setUpDown] = useState(false);

  handleClick = () => {
    upDown ? setUpDown(false) : setUpDown(true);
  };

  return (
    <>
      <div className="accordion" onClick={handleClick}>
        <span className="acc-title">
          {props?.title}({props?.itemCards?.length})
        </span>
        {/* Onclick takes a callback function */}
        {!upDown && (
          <img
            className="acc-img"
            src="https://cdn-icons-png.flaticon.com/512/54/54785.png"
          />
        )}

        {upDown && (
          <img
            className="acc-img"
            src="https://cdn-icons-png.flaticon.com/512/7268/7268569.png"
          />
        )}
      </div>

      {/* <img src="https://cdn-icons-png.flaticon.com/512/25/25678.png" /> */}

      {upDown && (
        <menu>
          {props.itemCards.map((rr, index) => {
            if (rr && rr.card && rr.card.info) {
              return (
                <div className="menu-item-bar" key={rr.card.info.id}>
                  <div className="left-menu-item">
                    <div className="nonveg-veg">
                      <div className="item-name-menu">{rr.card.info.name}</div>
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
                  <div className="img-menu-item">
                    {/* <button className="menu-btn">Add</button> */}

                    <img
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${rr.card.info.imageId}`}
                      alt={rr.card.info.name}
                    />
                  </div>
                </div>
              );
            }
            return null;
          })}
        </menu>
      )}
    </>
  );
};

export default ResturantMenuTitle;
