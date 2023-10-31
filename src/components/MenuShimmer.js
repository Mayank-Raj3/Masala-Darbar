const MenuShimmer = () => {
  const emptyArray = new Array(20).fill(null);

  return (
    <div className="menu-cont ">
      <div className="borderM menu-card-img shimmerBGM">
        <div className=" shimmerBGM RestaurantHeader_wrapper__2GTdS RestaurantHeader_marginBottom__1rbfK"></div>
      </div>

      <div className=" shimmerBGM RestaurantHeader_container__2XRhv"></div>

      {emptyArray.map((item) => {
        return <div className="menu-item-bar  shimmerBGM"></div>;
      })}
    </div>
  );
};

export default MenuShimmer;
