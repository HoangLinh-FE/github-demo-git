/*let arr1 = ["Kai", "Kaku", "Gin"];

let arr2 = ["Han", "Hang", "Anh"];

let arr3 = [...arr2, ...arr1];

console.log(arr3);

const obj1 = {
  api: "http://domain-new-link",
  url: "connect-to-login",
};

const obj2 = {
  ...obj1,
  api: "http://domain-second-link",
};

console.log(obj2);

function test(...rest) {
  for (let i = 0; i < rest.length; i++) {
      console.log(rest[i]);
  }
}

test(...arr2);

console.log('-----------------------');

let array = ['Javascript', 'NodeJs', 'Ruby', 'PHP'];

const [a, ...rest] = array;

console.log(a, rest);

*/

// let couser = {
//   name: "Gin",
//   age: 23,
//   job: "programer",
// };

// let { name } = couser;
// console.log(name);

// const root = document.getElementById("root");
// const h1 = document.createElement("h1");

// h1.innerText = "Hello world!";
// h1.id = "heading";
// h1.className = "test align-center";
// h1.style = "color: green; font-size: 20px";
// Object.assign(h1.style, { color: "blue" , backgroundColor: "#333"});

// console.log(h1);
// root.appendChild(h1);

const h1Dom = document.createElement('h1');

h1Dom.title = 'Hello';
h1Dom.className = 'heading';

h1Dom.innerText = 'Hello World!';

document.body.appendChild(h1Dom);


// React

const h1React = React.createElement('h1', {
  title: 'Hello',
  className: 'heading'
  
}, 'Hello Guy');

console.dir(h1Dom);
console.log(h1React);