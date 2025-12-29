// * * *           
// * * *
// * * *

const { use } = require("react");

// for (let i = 1; i<=3; i++) {
//     row = "";
//     for (let j =1; j <= 6; j++){
//         row += " *";
//     }
//     console.log(row)
// }


// *
// * *
// * * *

// for (let i = 1; i<=3; i++){
//     row = "";
//     for (let j=1; j<=i; j++){
//         row += "* "
//     }

//     console.log(row)
// }


// * * *
// * *
// *

// for  (let i=3; i>=1; i--){
//     row = "";
//     for (let j=1; j<=i;j++){
//         row += "* "
//     }
//     console.log(row)
// }

//   *
//  * *
// * * *

// let s = 3;

// for (let i=1; i<=s; i++){
//     row = ""


// for (let j=1; j<=s-i;j++){
//     row +=" "
// }

// for (let k=1; k<=2*i-1; k++){
//     row += "*"
// }

// console.log(row)
// }






let user = {
  name: "Ishika",
  address: {
    city: "Gorakhpur"
  }
};

var city;

 
// if (user && user.address && user.address.city){
//     city = user.address.city;
// }

const city = user?.address?.city ?? "Unkown";

console.log(city)