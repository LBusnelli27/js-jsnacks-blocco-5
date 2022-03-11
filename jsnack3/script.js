let arrayA = ['pippo', 'PLUTO', 'Paperino'];

for (let i = 0; i < arrayA.length; i++) {
  arrayA = arrayA[i].charAt(0).toUpperCase() + arrayA[i].substring(1).toLowerCase();
}

console.log(arrayA);