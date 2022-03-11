let player = {
    playerCode : '',
    name : 'Luca',
    lastName : 'Perini',
    eta : '32',
    averagePointsGame : '',
    percSuccessShots : '',
}


function makeid(length) {
    let result = '';
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let charactersLength = characters.length;

    for ( let i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
    charactersLength));
    }

    return result;
}

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

function genPlayerCode() {
    return makeid(3) + makeNum(3);
}

console.log(player)