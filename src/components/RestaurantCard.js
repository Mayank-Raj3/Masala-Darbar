const RestaurantCard = ({
  cloudinaryImageId,
  aggregatedDiscountInfoV3,
  sla,
  name,
  avgRatingString,
  costForTwo,
  cuisines,
}) => {
  // console.log(props);
  let cus = "";
  for (let i = 0; i < Math.min(cuisines.length, 2); i++) {
    cus += cuisines[i];
    cus += i != 1 ? ", " : " ";
  }
  return (
    <div className="cards-container">
      <div className="card">
        <div className="card-media">
          <img
            className="card-img"
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              cloudinaryImageId
            }
          />
          <div className="discount">
            {aggregatedDiscountInfoV3?.header}
            <p>{aggregatedDiscountInfoV3?.subHeader} </p>
          </div>
          <div className="pro-discount">PRO extra 15% OFF</div>
          <div className="delivery-time">
            {" "}
            {sla?.deliveryTime + " "}
            mins
          </div>
          <div className="bookmark"></div>
        </div>
        <div className="card-description">
          <div className="about-place">
            <div className="place">
              <p className="place-name">{name}</p>
              <p className="place-speciality">{cus}</p>
            </div>

            <div className="place-review">
              <p className="rating">{avgRatingString} ★</p>
              <p className="per-person">{costForTwo} per person</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
