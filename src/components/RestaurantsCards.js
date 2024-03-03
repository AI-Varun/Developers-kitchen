import { IMG_CDN_URL } from "../Config";

const RestrauntCard = ({ cloudinaryImageId, name, cuisines, avgRating, userData }) => {
    return (
        <div className="card w-[200px] p-2 bg-orange-100">
            <img src={IMG_CDN_URL + cloudinaryImageId} />
            <h2 className="font-bold text-xl "> {name} </h2>
            <h3 className="text-gray-700"> {cuisines.join(", ")}</h3>
            <h4> {avgRating} stars </h4>
            <h5> {userData.name} </h5>
        </div>
    )
}

export default RestrauntCard;