const animalArray = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
]

const arrayMamm = animalArray.filter((element) => {
  if(element.classe == 'mammiferi') {
    return true;
  }
});

console.log(arrayMamm);