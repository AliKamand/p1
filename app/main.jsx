var React = require("react");
var ReactDOM = require("react-dom");
var RestaurantsList = require("./components/RestaurantsList.jsx");
var RestaurantsStore = require("./stores/RestaurantsStore");
var _Restaurants = RestaurantsStore.getRestaurants();
RestaurantsStore.onChange(function(Restaurants){
    _Restaurants = Restaurants;
    render();
});


function render(){
    ReactDOM.render(<RestaurantsList Restaurants={_Restaurants} />, document.getElementById("container"));    
}

render();

