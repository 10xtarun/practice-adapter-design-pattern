require('rootpath')();

//this is true adapter for FB
module.exports = function  FacebookAdapter(){
    var that = this;
    var exampleResponse = {
        name: 'RST Software House',
        location: {
            city: 'Mumbai',
            country: 'India',
        },
        posts: {
            data: [
                {
                    message: "Hello, We are from Mumbai!",
                    type: 'text/post',
                    id: "1234567890",
                }
            ]
        }
    }

    //store all the requests logged
this.requestSent = [];

this.clear = function(){
    that.requestSent = [];
};

//function to fetch post from FB
this.fetch = function(pathname, options){
    that.requestSent.push(pathname);
    return new Promise(
        function(resolve, reject){
            resolve(exampleResponse);
        }
    )
}
}