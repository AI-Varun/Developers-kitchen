import { RestrauntList } from "../Config";
import RestrauntCard from "./RestaurantsCards";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from 'react-router-dom';
import { filterSearch } from "../utils/helper";
import useOnline from '../utils/useOnline';

const Body = ({ userData }) => {

    const [allRestraunts, setAllRestraunts] = useState([]);
    const [filteredRestraunts, setfilteredRestraunts] = useState([]);
    const [searchText, setSearchText] = useState("");
    // const isOffline = useOnline();
    useEffect(() => {
        getrestraunts();
    }, [])

    async function getrestraunts() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log("data")
        setAllRestraunts(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestraunts(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    if (!allRestraunts) return null;
    return (allRestraunts.length === 0) ? <Shimmer /> : (
        <>
            <div className="search-container P-5 bg-red-50 my-3">
                <input class="m-2 p-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
                disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
                invalid:border-pink-500 invalid:text-pink-600
                focus:invalid:border-pink-500 focus:invalid:ring-pink-500
              focus:bg-yellow-50"
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchText}
                    onChange={(e) => {
                        setSearchText(e.target.value);
                    }}
                />
                <button className="search-btn m-2 p-2 bg-gray-400 text-white rounded-lg hover:bg-sky-700" onClick={() => {
                    const data = filterSearch(allRestraunts, searchText);
                    setfilteredRestraunts(data);


                }}>Search</button>
            </div>
            <div className="restaurant-list flex flex-wrap m-3 justify-between">
                {
                    filteredRestraunts?.length === 0 ? <h1>No Restaurants match your Filter!!</h1> : filteredRestraunts.map((restaurant) => {
                        return (<div>
                            <Link to={'/restaurant/' + restaurant?.info?.id} key={restaurant?.info?.id} style={{ textDecoration: 'none' }} ><RestrauntCard {...restaurant.info} userData={userData} /> </Link> </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Body;