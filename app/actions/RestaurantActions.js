var dispatcher = require("../dispatcher");

module.exports = {
    addRestaurant:function(Restaurant){
        dispatcher.dispatch({
           Restaurant:Restaurant,
           type:"Restaurant:addRestaurant" 
        });
    },
    deleteRestaurant:function(Restaurant){
        dispatcher.dispatch({
           Restaurant:Restaurant,
           type:"Restaurant:deleteRestaurant" 
        });
    }
}