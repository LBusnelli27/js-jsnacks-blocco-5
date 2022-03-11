const carsArray = [
  {
    name : 'BMW',
    model : 'Series 1',
    typePower : 'Diesel'
  },
  {
    name : 'Mercedes',
    model : 'EQ',
    typePower : 'Elettrico'
  },
  {
    name : 'Porsche',
    model : '991',
    typePower : 'Gpl'
  },
  {
    name : 'Ferrari',
    model : '488 Pista',
    typePower : 'Benzina'
  },
  {
    name : 'Lamborghini',
    model : 'Huracan',
    typePower : 'Benzina'
  },
  {
    name : 'Fiat',
    model : 'Panda 4X4',
    typePower : 'Metano'
  }
]


const arrayBenzina = carsArray.filter((element) => {
  if(element.typePower == 'Benzina') {
    return true;
  }
});

const arrayDiesel = carsArray.filter((element) => {
  if(element.typePower == 'Diesel') {
    return true;
  }
});
const arrayAltri = carsArray.filter((element) => {
  if(element.typePower != 'Benzina' && element.typePower != 'Diesel') {
    return true;
  }
});

console.log(arrayBenzina);
console.log(arrayDiesel);
console.log(arrayAltri);