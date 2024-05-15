//  const num = 5;

// num = 40;

// console.log(num);

// let name = "GIAS";

// name = "PHERO";

// console.log(name);

// const countryName="bangladesh"

// const country = ` My country is ${countryName} `;

// console.log(country);

// const person = {
//   name: "test",
//   age: 10,
//   friends: ["korim", "rahim", "jabbar"],
// };

// const { friends,age } = person;

// const names = ["korim",  "lore10,mbfs iufb siufbs fusb"];

// const [a,b, c] = names;

// console.log(a);

function sum(num1, num2) {
  const result = num1 + num2;
  return result;
}

// const output = sum(10, 20);
// console.log(output);

const sum2 = (num1, num2) => {
  return num1 + num2;
};

const output2 = sum2(10, 20);
console.log(output2);

// const products = [
//     {id:01,name:"xiaomi",description:"this is xiaomi",price:500,color:"black"},
//     {id:02,name:"Iphone",description:"this is Iphone",price:800,color:"golden"},
//     {id:03,name:"xiaomi",description:"this is xiaomi",price:500,color:"black"},
//     {id:04,name:"Iphone",description:"this is Iphone",price:1000,color:"gray"},
//     {id:05,name:"xiaomi",description:"this is xiaomi",price:00,color:"black"},
// ]

// const result = products.forEach(product => {
//     console.log(product.id);

// });
// console.log(result);

// const sum = products.map(product => product.id*2);

// console.log(sum);

// const result = products.filter(product =>product.color="blacks");

// console.log(result);

// for (let i = 0; i < products.length; i++){
//     const element = products[i];
//     if (element.id==03) {
//         console.log(element);
//     }
// }

// const result = products.find(pd => pd.id == 10);

// console.log(result);



const oddEven = (array) => {
  let eventNumber = [];
  let oddNumber = [];

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    if (element % 2 == 0) {
      eventNumber.push(element);
    } else {
      oddNumber.push(element);
    }
  }
  return oddNumber;
};



// const numbers = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//     23, 24, 25, 26,
//   ];
// const result = oddEven(numbers);
// console.log(result);








const checkFriends = (array) => {
    let biggestName = array[0];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];

        if (element.length>biggestName.length) {
            biggestName = element;
        }
        
    }

    return biggestName;
    
}

const frinds=["ROhim","korim","jobbar","salam","borkot","preo","bangaldesh"]
const bigfriends = checkFriends(frinds);

console.log("form 134",bigfriends);


