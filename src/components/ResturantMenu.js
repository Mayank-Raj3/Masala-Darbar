import { useEffect } from "react";
import { Link, createBrowserRouter, useParams } from "react-router-dom";
import { useState } from "react"; // useParams is a hook s
import MenuShimmer from "./MenuShimmer";

const RestaurantMenu = () => {
  // for reading a dynamic url
  const { id } = useParams();
  const [resturantMenu, setResturantMenu] = useState({});

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  console.log(id);
  // https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pasdg6owucvi23hcp9eb
  async function getRestaurantInfo() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.996673596866396&lng=77.72052761167288&restaurantId=" +
          id
      );
      const data = await response.json();
      setResturantMenu(data.data.cards);
    } catch (error) {
      console.error("Error fetching restaurant information:", error);
    }
  }

  console.log(
    resturantMenu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards
  );

  /*
    remaning things 
      - resturantMenu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards
      - will iterate through cads and change it 


  */
  let cus = "";
  for (
    let i = 0;
    i < resturantMenu[0]?.card?.card?.info?.cuisines.length;
    i++
  ) {
    cus += resturantMenu[0]?.card?.card?.info?.cuisines[i] + ", ";
  }

  console.log(resturantMenu.length);
  return resturantMenu.length === undefined ? (
    <MenuShimmer />
  ) : (
    <div className="menu-cont">
      <div className="menu-card-img">
        <img
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            resturantMenu[0]?.card?.card?.info?.cloudinaryImageId
          }
        />
      </div>

      <div className="RestaurantHeader_container__2XRhv">
        <div className="RestaurantHeader_wrapper__2GTdS RestaurantHeader_marginBottom__1rbfK">
          <div className="RestaurantNameAddress_wrapper__24l_g">
            <div aria-hidden="true">
              <p className="RestaurantNameAddress_name__2IaTv">
                {resturantMenu[0]?.card?.card?.info?.name}
              </p>
              <p className="RestaurantNameAddress_cuisines__mBHr2">
                {cus.slice(0, -2)}
              </p>
            </div>
            <div
              className="RestaurantNameAddress_areaWrapper__3HIxj"
              aria-label="Selected outlet is New BEL Road"
            >
              <p
                className="RestaurantNameAddress_area__2P9ib"
                aria-hidden="true"
              >
                {resturantMenu[0]?.card?.card?.info?.areaName}
              </p>
            </div>
          </div>
          <button
            className="RestaurantRatings_wrapper__2294i"
            data-testid="restaurant-ratings-header"
            aria-hidden="true"
          >
            <span
              className="RestaurantRatings_avgRating__1TOWY"
              aria-hidden="true"
            >
              <span className="icon-star"></span>{" "}
              <span>{resturantMenu[0]?.card?.card?.info?.avgRating}</span>
            </span>
            <span
              className="RestaurantRatings_totalRatings__3d6Zc"
              aria-hidden="true"
            >
              {resturantMenu[0]?.card?.card?.info?.totalRatingsString}
            </span>
          </button>
        </div>
        <ul></ul>
        <hr
          className="RestaurantHeader_dottedSeparator__2O2hU RestaurantHeader_marginBottom__1rbfK"
          aria-hidden="true"
        />
        <div
          className="RestaurantHeader_marginBottom__1rbfK"
          aria-hidden="true"
        >
          <ul className="RestaurantTimeCost_wrapper__3YXF9">
            <li className="RestaurantTimeCost_item__2HCUz">
              <svg
                className="RestaurantTimeCost_icon__8UdT4"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <circle
                  r="8.35"
                  transform="matrix(-1 0 0 1 9 9)"
                  stroke="#3E4152"
                  strokeWidth="1.3"
                ></circle>
                <path
                  d="M3 15.2569C4.58666 16.9484 6.81075 18 9.273 18C14.0928 18 18 13.9706 18 9C18 4.02944 14.0928 0 9.273 0C9.273 2.25 9.273 9 9.273 9C6.36399 12 5.63674 12.75 3 15.2569Z"
                  fill="#3E4152"
                ></path>
              </svg>
              <span>
                {" "}
                {resturantMenu[0]?.card?.card?.info?.sla?.maxDeliveryTime} Mins
              </span>
            </li>
            <li className="RestaurantTimeCost_item__2HCUz">
              <svg
                className="RestaurantTimeCost_icon__8UdT4"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <circle
                  cx="9"
                  cy="9"
                  r="8.25"
                  stroke="#3E4152"
                  strokeWidth="1.5"
                ></circle>
                <path
                  d="M12.8748 4.495H5.6748V6.04H7.9698C8.7948 6.04 9.4248 6.43 9.6198 7.12H5.6748V8.125H9.6048C9.3798 8.8 8.7648 9.22 7.9698 9.22H5.6748V10.765H7.3098L9.5298 14.5H11.5548L9.1098 10.57C10.2048 10.39 11.2698 9.58 11.4498 8.125H12.8748V7.12H11.4348C11.3148 6.475 10.9698 5.905 10.4298 5.5H12.8748V4.495Z"
                  fill="#3E4152"
                ></path>
              </svg>
              <span>
                {" " + resturantMenu[0]?.card?.card?.info?.costForTwoMessage}
              </span>
            </li>
          </ul>
        </div>
      </div>

      {resturantMenu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards.map(
        (rr) => {
          console.log(rr.card.info);
          return (
            <div className="menu-item-bar">
              <div className="left-menu-item">
                <div className="nonveg-veg">
                  <div className="item-name-menu">{rr.card.info.name}</div>
                  <div className="item-price-menu">
                    ₹{parseInt(rr.card.info.price) / 100}
                  </div>
                </div>

                <div className="item-menu-discreption">
                  {rr.card.info.description}
                </div>
              </div>

              <div className="img-menu-item">
                <img
                  src={
                    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/" +
                    rr.card.info.imageId
                  }
                />
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default RestaurantMenu;
