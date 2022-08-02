var fruits = ['Apple', 'Banana', 'Orange'];
// find index of banana
var index=(fruits.indexOf('Banana'));
console.log(index);
// replace the banana with mango
fruits[index]='Mango';
console.log(fruits);
//remove orange and add watermelon
fruits.pop();
fruits.push('Watermelon');
console.log(fruits);