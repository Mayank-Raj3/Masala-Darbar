import { restaurants } from "/src/components/config";
import RestaurantCard from "/src/components/RestaurantCard";


 const Body = () => {
    return (
      <div className="restaurant-list">
        {restaurants.map((rr) => {
          return <RestaurantCard {...rr.info} key = {...rr.info.id} />; 
        })}
      </div>
    );
  };
  
  export default Body;