import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  // for reading a dynamic url
  const { id } = useParams();
  return (
    <div>
      <h1>Resturant id : {id} </h1>
      <h1> Namste </h1>
    </div>
  );
};

export default RestaurantMenu;
