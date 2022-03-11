let arrayA = ['pippo', 'PLUTO', 'Paperino', 'miNNie'];


const newString = arrayA.map((element) => {
  return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
})

console.log(arrayA);
console.log(newString);