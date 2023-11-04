import { Link } from "react-router-dom";
import { restaurants } from "/src/components/config";
import RestaurantCard from "/src/components/RestaurantCard";
import Shimmer from "/src/components/Shimmer";
import { useEffect, useState } from "react";

 const Body = () => {
  const[searchInput,setSearchInput]= useState("");
  const[resturantList , setResturantList] = useState([]);
  const[filteredResturantList , setFilteredResturantList] = useState([]);
  
  function filterData(searchInput, restaurantList) {
    if (!Array.isArray(restaurantList)) {
      return [];
    }
  
    searchInput = searchInput.toLowerCase();
    return restaurantList.filter((res) => {
      if (res.info && res.info.name) {
        return res.info.name.toLowerCase().includes(searchInput);
      }
      return false;
    });
  }
  
  useEffect(()=>{
    getResturants();
  },[]);

  async function getResturants(){
    const data  = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.996673596866396&lng=77.72052761167288&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json  = await data.json();
    console.log(json.data); 
    setResturantList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredResturantList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  //conditional rendering 
  return resturantList?.length===0 ? (<Shimmer/>):(
    <>
    <div className="body-container">
    <div className="rbcmH">
      <div className="_1JbgW _1jet9" >
          <div className="_1QBzC">
            <div className="_2O4-3">
              <input
                type="text"
                className="_2FkHZ"
                placeholder="Search for restaurants and food"
                maxLength="200"
                value={searchInput} 
                onChange={(e)=>{
                  setSearchInput(e.target.value);
                }}
                autoFocus
              />
            </div>

            <button
              className="_2p8XD"
              onClick={() => {
                const data = filterData(searchInput, resturantList);
                console.log(data);
                setFilteredResturantList(data);
              }}
            >
              <svg className="search-mag-glass"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="30px"
                height="30px"
                viewBox="0 0 50 50"
              >
                <path   d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
              </svg>
            </button>            
          </div>
      </div>
    </div>
    
      <div className="restaurant-list">
        {
        filteredResturantList.map((rr) => {
          return <RestaurantCard {...rr.info} key = {...rr.info.id} />; 
        })}
      </div>
    </div>
    </>
    );
  };

  
  export default Body;