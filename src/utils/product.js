const request = require('request');

const getProductDetails = (data, callback) => {
    const url = "https://dummyjson.com/products";
    request({url:url,json:true},(error,{body})=>{ //object destructuring instead of giving response we have given {body}
        if(error){
            callback("unable to find the data",undefined)
        }
        else{
            callback(undefined,body.products[0].brand );
        }
    })

}

// getProductDetails("Hitesh",(error,data)=>{
//     console.log('Error',error);
//     console.log("Data",data);
// })
module.exports = getProductDetails;
