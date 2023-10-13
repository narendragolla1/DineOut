import {restaurantList} from './contants';
import RestaurantCard from './RestaurantCard'
const Body=()=>{
    return (
        <div className='restaurant-list'>
            {restaurantList.map((restaturant)=>{
                return <RestaurantCard {...restaturant.info} key={restaturant.info.id}/>
            })}
        </div>
    )
}
export default Body;