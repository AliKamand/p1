var React = require("react");
var RestaurantInfo = require("./RestaurantInfo.jsx")
var AddRestaurant = require("./AddRestaurant.jsx");

module.exports = React.createClass({
   render:function(){
       return(
           <div className="row">
                <div className="col-md-6">
                    <AddRestaurant />
                </div>
                <div className="col-md-6">
                    {
                        this.props.Restaurants.map(function(s,index){
                            return(
                                <RestaurantInfo info={s} key={"Restaurant"+index} />
                            )         
                        })
                    }
                </div>
           </div>
       )
   } 
});
