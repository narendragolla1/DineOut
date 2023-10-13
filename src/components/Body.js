import {restaurantList} from './contants';
import RestaurantCard from './RestaurantCard'
import { useState } from 'react';

function filterData(searchText, restaurants) {
   
    const filterRestaurant = restaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase()?.includes(searchText.toLowerCase())
    );
    return filterRestaurant;
  }


const Body=()=>{
    const[searchText, setSearchText]=useState("");
    const[restaurants,setRestaurants]=useState(restaurantList);
    const handleChange=(event)=>{
        setSearchText(event.target.value);
    }
    const handleSubmit=(event)=>{
        event.prevent.default();
        setSearchText(searchText);
        
    }
    return (
        <>
        
        <div className="search-container">
            <input type="text" className='search-input' placeholder='search' value={searchText} onChange={handleChange} />
            <button onClick={
                ()=>{
                const data=filterData(searchText,restaurants);
                setRestaurants(data)
                }
                }>Search</button>
        </div>
     
        <div className='restaurant-list'>
            {restaurants.map((restaturant)=>{
                return <RestaurantCard {...restaturant.info} key={restaturant?.info?.id}/>
            })}
        </div>
        </>
    )
}
export default Body;