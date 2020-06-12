//what's with the example
//old shopping cart computes costs
//new improved shipping object (offers better costing)
//new has different interface
//so adapter ables the API to function smoothly without any changes
//means: old is adapted to new Advance Shipping

/*old interface */

function Shipping(){
    this.request = function(zipStart, zipEnd, weight){
        return "Rs.750";
    }
}

/*new interface */ 
function AdvancedShipping(){
    this.login = function(credentials){
        console.log("login!")
    }
    this.setStart = function(start){
        console.log("setting start!")
    }
    this.setDestination = function(destination){
        console.log("setting destination!")
    }
    this.calculate = function(weight) {
    return "Rs.570"
    }
}
//as you can see the new interface has much better functionality than older one

/*Adapter interface */
function ShippingAdapter(credentials){
    var shipping = new AdvancedShipping();

    shipping.login(credentials);

    return {
        request: function(zipStart, zipEnd, weight){
            shipping.setStart(zipStart);
            shipping.setDestination(zipEnd);
            return shipping.calculate(weight);
        }
    }
}

function run(){
    var shipping = new Shipping();
    var credentials = {token: "30-ae-123"};
    var adapter = new ShippingAdapter(credentials);

    //original shipping object and interface
    var cost = shipping.request("123", "321", "3 KG");
    console.log("Old cost: " + cost);

    //new shipping object with adapted interface
    cost = adapter.request("123", "321", "3 KG");
    console.log("New cost: " + cost);
}

run();