const arrayUser = [
  {
    name : 'Luca',
    lastName : 'Busna',
    eta : '21'
  },
  {
    name : 'Giulia',
    lastName : 'Bonny',
    eta : '21'
  },
  {
    name : 'Andrea',
    lastName : 'Rossi',
    eta : '4'
  },
  {
    name : 'Federico',
    lastName : 'Rossi',
    eta : '10'
  }
];

const arrayCanDrive = [
  
];


arrayUser.filter((element) => {
  if(element.eta > 18) {
    arrayCanDrive.push({
      phrase : element.name + ' ' + element.lastName + ' ' + 'can drive'
    })
  }
});

console.table(arrayUser);
console.table(arrayCanDrive);