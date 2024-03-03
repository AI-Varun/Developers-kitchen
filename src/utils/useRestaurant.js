import { useState, useEffect } from "react";
import { FETCH_API_URL } from '../Config'
const useRestaurant = (id) => {

    const [restaurant, setRestraunt] = useState(null);
    const [restaurantMenu, setRestrauntMenu] = useState(null);
    useEffect(() => {
        getRestaurantInfo()
    }, []);

    async function getRestaurantInfo() {
        const data = await fetch(
            FETCH_API_URL + id
        );
        const json = await data.json();
        if (json && json.data && json.data.cards && json.data.cards[0] && json.data.cards[0].card && json.data.cards[0].card.card && json.data.cards[0].card.card.info) {

            const restaurantInfo = json.data.cards[0].card.card.info;
            setRestraunt(restaurantInfo);
        }
        if (json && json.data && json.data.cards && json.data.cards[2] && json.data.cards[2].groupedCard && json.data.cards[2].groupedCard.cardGroupMap && json.data.cards[2].groupedCard.cardGroupMap.REGULAR && json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards) {
            console.log(json);
            const restaurantMenu = json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
            if (restaurantMenu) {
                setRestrauntMenu(restaurantMenu);
            }
        }
        // console.log(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards);

    }
    return { restaurant, restaurantMenu };

}

export default useRestaurant;