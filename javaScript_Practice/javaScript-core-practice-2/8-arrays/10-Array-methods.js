/**
 * Array Methods
 */

 /**
  * ------------------------- concatenating arrays ------------------
  * concat(), join()
  */

/** 
 * concat elements with array.
*/ 
// let color_pimary = ["red", "green","blue"];
// let total_Colors = color_pimary.concat("black","white");  
// console.log(total_Colors);
// console.log(`This is original array not changed:  ${color_pimary}`);


/**
 *  concat array with array.  
*/ 
//   let color_pimary = ["red", "green","blue"];
//   let color_secondary = ["orange", "purple","white"];

//   let totalColors = color_pimary.concat(color_secondary);



/**
 * join array with separator:
 * yey method return aik string karta hay.
 */

// let color_pimary = ["red", "green","blue"];
// let myColors = color_pimary.join(" / ");
// console.log(`my array with separator:  ${myColors}`);


/**
 *  ---------------- reversing array --------------------
 *  reverse()
 *  is method k zariyey hum original array k elements ko 
 *  reverse order karsakhtay hayn.
 *  
 */
// let color_pimary = ["red", "green","blue"];
// let myColors = color_pimary.reverse(color_pimary);
// console.log(myColors);
// console.log(`Original array changed:  ${myColors}`);


/*
* ---------------------- slicing ----------------------
*  slice() 
*/

// let color_pimary = ["red", "green","blue","black","white"];
// let myColors = color_pimary.slice(1,3);
// console.log(myColors);

/**
 * ----------------------- array check --------------------
 * Array.isArray()
 */

// let color_pimary = ["red", "green","blue","black","white"];
// console.log(Array.isArray(color_pimary));



/**
 * ------------------- removing , updating and add elements ------------------
 * splice()
 */
// let color_primary = ["red", "green","blue","black","white"];
// let myColor = color_primary.splice(1);
// let myColor = color_primary.splice(2,1);
// let myColor = color_primary.splice(1,0, "abc", "def" );
// let myColor = color_primary.splice(1,2, "abc", "def" );
// console.log( `Returned deleted elements:  ${myColor}`);
// console.log( `This is modified original array :  ${color_primary}`);




/**
 * -------------------- searching elements -----------------------------
 * indexOf()
 * lastIndexOf()
 * find()
 * findIndex()
 */

// let color_primary = ["red", "green","blue","black","white", "blue","blue"];
// let myDesireClr = color_primary.indexOf("blue",0);
// console.log(myDesireClr);




/**
 * ------------------------------ elements fill in the array ---------------
 * fill()
 */
// let color_primary = ["red", "green","blue","black","white", "blue","blue"];
// let myClr = color_primary.fill("orange",5,7);
// console.log(`Original array is now:  ${myClr}`);
// console.log(myClr);



/**
 * ------------------ inserting elements ------------------------------
 * unshift()
 * push()
 */
// let color_primary = ["red", "green","blue","black","white", "blue","blue"];
// let mylength = color_primary.unshift("yellowGreen");
// console.log(color_primary);
// console.log(`array length return is:  ${mylength}`);


/**
 * push()
 * is may elements last may ja kar lgay gay.
 */
// let color_primary = ["red", "green","blue","black","white"];
// let mylength = color_primary.push("yellow","green");
// console.log(color_primary);
// console.log(mylength);


/**
 * ---------------------- removing elements ----------------------
 * shift() , first element remove hoga
 * pop()   , last wala element removed hoga
 */
// let color_primary = ["red", "green","blue","black","white"];
// let myRemovedeelement = color_primary.shift();
// console.log(myRemovedeelement);
// console.log(color_primary);


/**
 * pop()
 */

// let color_primary = ["red", "green","blue","black","white"];
// let myRemovedeElement = color_primary.pop();
// console.log(`removed element from the array:   ${myRemovedeElement}`);
// console.log(color_primary);


/*
* ---------------------------- condition checking ----------------------
* every() 
* some() : agar aik b condition true hogi toh "return true" hoga.
*/
// let randomNo = [11,10];
// let conditionCheck=  randomNo.every((myNo)=> {
//   return myNo > 9;
// });

// console.log(conditionCheck);


/**
 * some()
 */

// let randomNo = [3,4,11,10,5];
// let conditionCheck=  randomNo.some((myNo)=> {
//   return myNo > 11;
// });

// console.log(conditionCheck);




/**
 * --------------- Transformation --------------------------------
 * filter()
 * map()
 */

//  let randomNo = [1,2,3,4,5,6,7,8,9,10];
//  let myNumbers = randomNo.filter((arrNos)=> {
//    return arrNos % 2 == 0;
//  });

//  console.log(myNumbers);


 /**
  *  ----------------- map() ----------------
  */

//  let randomNo = [1,2,3,4,5];
//  let myEvenNumbers = randomNo.map((arrNos)=> {
//    return arrNos * 2;
//  });
//  console.log(myEvenNumbers);
//  console.log(`Original Array:  ${randomNo}`);


// example 2
// let randomNo = [1,2,3,4,5];
//  randomNo.map((arrNos)=> {
//    console.log(arrNos * 2);
//  });


//  example 3

let itemDesc = [
  {price:100, productName: "Samsung"},
  {price: 200, productName: "Nokia"}
];

// console.log(itemDesc);
itemDesc.map((el)=>{
  console.log(el.price);
});
 


