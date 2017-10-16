let a = {x: 1, y: {z: 3, d: 4}};

let b = JSON.parse(JSON.stringify(a));

console.log(a, "a");
console.log(b, "b");
b.y.z = 100;
console.log(b,"new-b");
console.log(a,"aft-a");

