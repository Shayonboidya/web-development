function topRatedRestaurant(restaurants) {
    // Write your code here
    if (!Array.isArray(restaurants) || restaurants.length === 0) {
        return "Invalid";
    }
    let maxRatting = restaurants[0];
    for (let i = 1; i < restaurants.length; i++) {
        if(maxRatting.rating < restaurants[i].rating){
            maxRatting = restaurants[i];
        }
    }
    return maxRatting.name.toUpperCase();
}



console.log(topRatedRestaurant([{name:"Chillox",rating:4.5},{name:"Sultan's Dine",rating:4.8}]));
// SULTAN'S DINE
console.log(topRatedRestaurant([{name:"KFC",rating:4.2},{name:"Pizza Hut",rating:4.6}]));

// PIZZA HUT
console.log(topRatedRestaurant([]));
// Invalid
console.log(topRatedRestaurant("restaurants"));

// Invalid





