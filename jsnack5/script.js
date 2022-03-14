const arrayUser = [
  {
    name : 'Luca',
    lastName : 'Busna',
    age : '21'
  },
  {
    name : 'Giulia',
    lastName : 'Bonny',
    age : '21'
  },
  {
    name : 'Andrea',
    lastName : 'Rossi',
    age : '4'
  },
  {
    name : 'Federico',
    lastName : 'Rossi',
    age : '10'
  }
];

const arrayCanDrive = [
  
];


arrayUser.filter((element) => {
  if(element.age >= 18) {
    arrayCanDrive.push({
      phrase : element.name + ' ' + element.lastName + ' ' + 'can drive'
    })
  }
});

console.table(arrayUser);
console.table(arrayCanDrive);