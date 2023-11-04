import { useEffect, useState } from "react";

const useResturantMenu = (id) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  // https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/pasdg6owucvi23hcp9eb
  async function getRestaurantInfo() {
    try {
      const response = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.996673596866396&lng=77.72052761167288&restaurantId=" +
          id
      );
      const data = await response.json();
      console.log(data.data.cards);
      setResInfo(data.data.cards);
    } catch (error) {
      console.error("Error fetching restaurant information:", error);
    }
  }
  return resInfo;
};

export default useResturantMenu;
