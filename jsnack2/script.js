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
  },
  {
    name : 'BMW',
    model : 'M4',
    typePower : 'Benzina'
  },
  {
    name : 'Opel',
    model : 'Astra',
    typePower : 'Diesel'
  },
  {
    name : 'Fiat',
    model : 'Punto',
    typePower : 'Gpl'
  },
  {
    name : 'Skoda',
    model : 'Fabia',
    typePower : 'Metano'
  },
  {
    name : 'Lamborghini',
    model : 'Aventador',
    typePower : 'Benzina'
  },
  {
    name : 'Bugatti',
    model : 'Chiron',
    typePower : 'Benzina'
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

console.log(carsArray);
console.table(arrayBenzina);
console.table(arrayDiesel);
console.table(arrayAltri);