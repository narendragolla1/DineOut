import RestaurantCard from './RestaurantCard';
// import { restaurantList } from './contants';
import { useEffect, useState } from 'react';
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom';




const Body=()=>{
    const[searchText, setSearchText]=useState("");
    const [filteredRestaurants,setFilteredRestaurants]=useState([]);
    const [allRestuarant,setAllResturants]=useState([])
    function filterData(searchText, allRestuarant) {
   
      const filterRestaurant =allRestuarant.filter((restaurant) =>
      restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
      );
      return filterRestaurant;
    }
    const handleChange=(event)=>{
        setSearchText(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.prevent.default();
        setSearchText(searchText);
        
    }
    useEffect(() => {
      getRestaurants();
    }, []);
  
    async function getRestaurants() {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.306652&lng=80.436539&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await data.json();
      // console.log(json)
      // console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
      setAllResturants(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
      setFilteredRestaurants(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
    }
    
  console.log(allRestuarant)

    return allRestuarant?.length===0?(<Shimmer/>): (
        <>
        <div className="search-container">
            <input type="text" className='search-input' placeholder='search' value={searchText} onChange={handleChange} />
            <button onClick={()=>{
                const data=filterData(searchText,allRestuarant);
                setFilteredRestaurants(data)
                }
                }>Search</button>
        </div>
     
        <div className="restaurant-list">

        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} />
            </Link>
          );
        })}
        
      </div>
        </>
    )
}
export default Body;