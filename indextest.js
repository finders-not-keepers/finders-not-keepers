//User modules
var finders = require('./src/js/api/finders'); //not sure about this
var mysql = require('mysql');



// create a connection to our Cloud9 server
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'cbroomhead',
  password: '',
  database: 'finders'
});

// load our API and pass it the connection
var FindersAPI = finders(connection);


// var item = {
//     categoryId: 3,
//     accountId: 1,
//     title : "Hello Kitty Pink Keys",
//     description: "Hello Kitty Key Fell out at Tim Hortons", 
//     media: "http://1.bp.blogspot.com/-18IF5e9EEyI/VqO0qYLujSI/AAAAAAAAEh0/7dDCQvlAKFY/s1600/hello_kitty_pink_sr1.gif" ,
//     createdAt: "2016-08-15", 
//     updatedAt: "2016-08-15"
// }

// FindersAPI.createItem( item, function(err, post) {
//   if(err){
//     console.log(err);
//   }
//   else {
//     console.log(post);
//   }
// });

// var account = {
//     name: "McDonalds",
//     addressId: 4,
//     media : "http://logok.org/wp-content/uploads/2014/06/McDonalds-logo.png",
//     category_account: 1,
//     createdAt: "2016-08-15", 
//     updatedAt: "2016-08-15"
// }

// FindersAPI.createAccount(account, function(err, post) {
//   console.log(account)
//   if(err){
//     console.log(err);
//   }
//   else {
//     console.log(post);
//   }
// });



// var admin = {
//   firstname: "John" ,
//   lastname: "Smith",
//   email: "john.smith@hortons.com",
//   phone: "123-123-1234",
//   accountId: "1",
//   createdAt: "2016-08-18", 
//   updatedAt: "2016-08-18"
// }

// FindersAPI.createAdmin(admin, 1, function(err, post) {
//   if(err){
//     console.log(err);
//   }
//   else {
//     console.log(post);
//   }
// });

// var address= {
//   streetNumber: 640,
//   streetline1 : "Place Montréal Trust", 
//   streetline2: " St. Catherine St W", 
//   city: "Montreal" ,
//   province: "QC" , 
//   country:  "Canada", 
//   zip: "H3B 1B8" 
// }

// FindersAPI.createAddress(address, 1, function(err, post) {
//   if(err){
//     console.log(err);
//   }
//   else {
//     console.log(post);
//   }
// });

// var searchstring= {string: 'pink',
//           accountId: 1
//           };

// FindersAPI.getAllItemsForSearch(searchstring, function(err, post) { 
//   if(err){
//     console.log(err);
//   }
//   else {
//     console.log(post);
//   }
// });

// FindersAPI.getAllItemsForAccount(searchstring, 1, function(err, post) {
//   if(err){
//     console.log(err);
//   }
//   else {
//     console.log(post);
//   }
// });

var accountname = "McDonalds";

FindersAPI.getAccounts( accountname ,  function(err, post) {
  if(err){
    console.log(err);
  }
  else {
    console.log(post);
  }
});

// var itemobj = {
//   accountId: 1,
//   title: "Dora the Explorer Pink Hat"  
// }

// FindersAPI.getItem( itemobj, function(err, post) {
//   if(err){
//     console.log(err);
//   }
//   else {
//     console.log(post);
//   }
// });

var itemid = 2;

FindersAPI.editItem(itemid, function(err, post) {
  if(err){
    console.log(err);
  }
  else {
    console.log(post);
  }
});




