var dispatcher = require("../dispatcher");

function RestaurantStore() {
    var listeners = [];
    var Restaurants = [{ name: "5 Guys", tagline:"A wonderful Restaurant" }, 
                    { name: "Hen House",tagline:"An awesome Restaurant" }, 
                    { name: "In-N-Out", tagline:"An excellent Restaurant" }];

    function getRestaurants() {
        return Restaurants;
    }

    function onChange(listener) {
        listeners.push(listener);
    }

    function addRestaurant(Restaurant) {
        Restaurants.push(Restaurant)
        triggerListeners();
    }

    function deleteRestaurant(Restaurant) {
        var _index;
        Restaurants.map(function (s, index) {
            if (s.name === Restaurant.name) {
                _index = index;
            }
        });
        Restaurants.splice(_index, 1);
        triggerListeners();
    }

    function triggerListeners() {
        listeners.forEach(function (listener) {
            listener(Restaurants);
        });
    }

    dispatcher.register(function (payload) {
        var split = payload.type.split(":");
        if (split[0] === "Restaurant") {
            switch (split[1]) {
                case "addRestaurant":
                    addRestaurant(payload.Restaurant);
                    break;
                case "deleteRestaurant":
                    deleteRestaurant(payload.Restaurant);
                    break;
            }
        }
    });

    return {
        getRestaurants: getRestaurants,
        onChange: onChange
    }
}

module.exports = RestaurantStore();