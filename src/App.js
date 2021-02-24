import { React, useState, useEffect } from "react";
import RestaurantCard from "./component/RestaurantCard";
import RestaurantSearch from "./component/RestaurantSearch";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `http://localhost:3004/data`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
let result =[];
     result = data.filter(datum=>datum.name.toLowerCase().includes(term.toLowerCase()));
     console.log(result);
        setRestaurants(result);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term,setTerm]);

  return (
    <div className="container mx-auto">
    <h1 className="text-6xl text-center mt-10">Search Your Favourite</h1>
    <RestaurantSearch searchText={(text)=>setTerm(text)
}/>
  {!loading && restaurants.length===0&&<h1 className="text-6xl text-center mx-auto mt-32">No Restaurant Found</h1>}


      {loading ? (
<h1 className="text-6xl text-center mx-auto mt-32">Loading...</h1>
      ) : (
        <div className="grid grid-cols-3 gap-4 mb-5">
          {restaurants.map((restaurant) => {
            return <RestaurantCard key={restaurant.id} restaurant={restaurant} />;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
