// ***** FUNCTION *****

/**
 * Function that gen random string letter (only capitalize letters)
 * 
 * @param {*} length Lenght of the string that you want to generate
 * @returns Return the string
 */
function makeid(length) {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let charactersLength = characters.length;
  
  for ( let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
  }
  
  return result;
}

/**
 * Function that gen random string numbers
 * 
 * @param {*} length Lenght of the string that you want to generate
 * @returns Return the string
 */
function makeNum(length) {
  let result = '';
  let characters = '0123456789';
  let charactersLength = characters.length;
  
  for ( let i = 0; i < length; i++ ) {
    result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
  }
  
  return result;
}

/**
 * 
 * @returns Return the player code
 */
function genRandomPlayerCode() {
  return makeid(3) + makeNum(3);
}

/**
 * 
 * @returns Random int from 0 to 99
 */
function genRandomInt() {
  return Math.floor(Math.random() * 99);
}

// ***** END FUNCTION *****


let player = {
    playerCode : '',
    name : 'Luca',
    lastName : 'Busna',
    eta : '21',
    averagePointsGame : '',
    percSuccessShots : '',
}
player.playerCode = genRandomPlayerCode();
player.averagePointsGame = genRandomInt();
player.percSuccessShots = genRandomInt();

console.table(player)