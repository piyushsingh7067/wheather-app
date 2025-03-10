//  cart = ["pizza","coke","sandwich"];


// function placeorder(cart , callback){
//         console.log("Talking with Domino's");
        
//         setTimeout(()=>{
//             console.log("Order placed successfully");
//             const order = {orderId: 22231, food: cart , resturant: "Dominos", location:"Rewa"}
//             callback(order);
//         },2000)
//     }
//     // placeorder();
    
    
//     function preparingOrder(order, callback){
//         console.log("pizza preparation started...");
    
//         setTimeout(()=>{
//             console.log("pizza preparation done");
//             const foodDetails = {token: 12, resturant: order.resturant, location: order.location};
//             callback(foodDetails);
//         }, 2000)
//     }
//     // preparingOrder();
    
    
//     function pickuporder(foodDetails, callback){
//         console.log("Reaching resturant for picking order");
    
//         setTimeout(()=>{
//             console.log("pickup the order by delivery boy");
//             const droplocation = foodDetails.location;
//             callback(droplocation);
//         },3000)
//     }
//     // pickuporder();
    
    
//     function deliverorder(droplocation ,callback){
//         console.log("Dedlivery boy on the way");
    
//         setTimeout(()=>{
//             console.log("Order deliver successfully");
//            // callback();
//         },3000)
//     }
//    // deliverorder();
    
    
//     function ratingorder(){
//          console.log("Our feedback ");
    
//          setTimeout(()=>{
//             console.log("Pizz is very nice and tastey");
//             callback();
//          },4000);
//     }
    
    
//     function pizzeaten(){
//         console.log("Call all friends");
    
//         setTimeout(()=>{
//             console.log("Pizza eat with all friends ");
    
//         },2000)
//     }
     


    
//     placeorder( cart , (order)=>{                    // arrow function
//         preparingOrder( order , (foodDetails)=>{
//                 pickuporder(foodDetails ,(droplocation)=>{
//                     deliverorder(droplocation);           
//              });         
//         });
//     });                           
    




// promises              // async task



// cart = ["pizza","coke","sandwich"];



// function placeorder(cart){
//     console.log("Talking with Domino's");
    
//     const pr = new Promise(function(resolve,reject){
    
//         setTimeout(()=>{  

//             console.log("Order placed successfully");
//             const order = {orderId: 22231, food: cart , resturant: "Dominos", location:"Rewa"}
//             resolve(order);
//         },2000)
    
//     })
// }


// function preparingOrder(order, callback){
//     console.log("pizza preparation started...");

//     setTimeout(()=>{
//         console.log("pizza preparation done");
//         const foodDetails = {token: 12, resturant: order.resturant, location: order.location};
//         callback(foodDetails);
//     }, 2000)
// }
// // preparingOrder();


// function pickuporder(foodDetails, callback){
//     console.log("Reaching resturant for picking order");

//     setTimeout(()=>{
//         console.log("pickup the order by delivery boy");
//         const droplocation = foodDetails.location;
//         callback(droplocation);
//     },3000)
// }
// // pickuporder();


// function deliverorder(droplocation ,callback){
//     console.log("Dedlivery boy on the way");

//     setTimeout(()=>{
//         console.log("Order deliver successfully");
//         callback();
//     },3000)
// }



// placeorder(cart)
// .then(order=>preparingOrder(order))
// .then(foodDetails=>pickuporder(foodDetails))
// .then(droplocation=>deliverorder(droplocation));



// // promise create

// const pr = new Promise(function(resolve,reject){

// })
// return pr;