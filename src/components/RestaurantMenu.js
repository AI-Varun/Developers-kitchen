import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IMG_CDN_URL } from '../Config'
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const RestaurantMenu = () => {
    const params = useParams();
    const { id } = params;

    // const [restaurant, setRestraunt] = useState(null);
    const { restaurant, restaurantMenu } = useRestaurant(id);

    const dispatch = useDispatch();

    const addFoodItem = (item) => {
        dispatch(addItem(item));
    }
    return !restaurant || !restaurantMenu ? <Shimmer /> : (
        <div className='flex'>
            <div>
                <h1>Restaurant id: {id}</h1>
                <h2>{restaurant.name}</h2>
                <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
                <h3>{restaurant.area}</h3>
                <h3>{restaurant.city}</h3>
                <h3>{restaurant.avgRating}</h3>
                <h3>{restaurant.costForTwoMessage}</h3>

            </div>
            <div className='p-10'>
                <h1>Menu</h1>
                <ul>
                    {Object.values(restaurantMenu).flatMap((items) =>
                        (items?.card?.card?.itemCards || []).map((item) => (
                            <li key={item?.card?.info?.name}>
                                {item?.card?.info?.name} - <button className='p-0 bg-slate-100' onClick={() => addFoodItem(item?.card?.info)}>Add</button>
                            </li>
                        ))
                    )}
                </ul>
            </div>
        </div>
    )
}

export default RestaurantMenu;