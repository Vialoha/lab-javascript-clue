// ITERATION 1

// Suspects Array

const suspectsArray = [

    mrGreen={
        firstName: 'Jacob',
        lastName: 'Green',
        occupation: 'Entrepreneur',
        age: 45,
        description: 'He has a lot of connections',
        image: 'https://pbs.twimg.com/profile_images/506787499331428352/65jTv2uC.jpeg',
        color: 'green'
    },

    drOrchid={
        firstName: 'Doctor',
        lastName: 'Orchid',
        occupation: 'Scientist',
        age: 26,
        description: 'PhD in plant toxicology. Adopted daughter of Mr. Boddy',
        image: 'http://www.radiotimes.com/uploads/images/Original/111967.jpg' ,
        color: 'white'
    },
    
    profPlum={
        firstName: 'Victor',
        lastName: 'Plum',
        occupation: 'Designer',
        age: 22,
        description: 'Billionaire video game designer',
        image: 'https://66.media.tumblr.com/ee7155882178f73b3781603f0908617c/tumblr_phhxc7EhPJ1w5fh03_540.jpg' ,
        color:'purple'
    },

    missScarlet={
        firstName: 'Kasandra',
        lastName: 'Scarlet',
        occupation: 'Actor',
        age: 31,
        description: 'She is an A-list movie star with a dark past',
        image: 'https://www.radiotimes.com/uploads/images/Original/111967.jpg' ,
        color: 'red'
    },

    mrsPeacock={
        firstName: 'Eleanor',
        lastName: 'Peacock',
        occupation: 'Socialité',
        age: 36,
        description: 'She is from a wealthy family and uses her status and money to earn popularity',
        image: 'https://metrouk2.files.wordpress.com/2016/07/mrs-peacock.jpg' ,
        color: 'blue'
    },

    mrMustard={
        firstName: 'Jack',
        lastName: 'Mustard',
        occupation: 'Retired Football player',
        age: 62,
        description: 'He is a former football player who tries to get by on his former glory',
        image: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/07/04/08/unspecified-3.jpg' ,
        color:'yellow'
    }

];


// Rooms Array

const roomsArray = [

    diningRoom={name: 'Dining Room'},
    conservatory={name: 'Conservatory'},
    kitchen={name: 'Kitchen'},
    studyRoom={name: 'Study'},
    library={name: 'Library'},
    billiardRoom={name: 'Billiard Room'},
    lounge={name: 'Lounge'},
    ballroom={name: 'Ballroom'},
    hall={name: 'Hall'},
    spa={name: 'Spa'},
    livingRoom={name: 'Living Room'},
    observatory={name: 'Observatory'},
    theater={name: 'Theater'},
    guestHouse={name: 'Guest House'},
    patio={name: 'Patio'}

];

// Weapons Array

const weaponsArray = [

    rope={name: 'rope', weight: 10},
    knife={name: 'knife' , weight: 8},
    candlestick={name: 'candlestick' , weight: 2},
    dumbbell={name: 'dumbbell' , weight: 30},
    poison={name: 'poison' , weight: 2},
    axe={name: 'axe' , weight: 15},
    bat={name: 'bat' , weight: 13},
    trophy={name: 'trophy' , weight: 25},
    pistol={name: 'pistol' , weight: 20}

];



// ITERATION 2

function selectRandom(array) {

    let random= array[Math.floor (Math.random() * array.length)];
        return random;

}

    //random suspect
    //let randomSuspect = suspectsArray [Math.floor (Math.random()* suspectsArray.length)]

    //random room
    //let randomRoom = roomsArray [Math.floor(Math.random() * roomsArray.length)]

    //random weapon
    //let randomWeapon= weaponsArray [Math.floor(Math.random() * weaponsArray.length)]

    /* math.floor => arredonda o número
    math.random => número alternativo com casas decimais*/


function pickMystery() {

    let suspect = suspectsArray [Math.floor (Math.random()* suspectsArray.length)];

    let room = roomsArray [Math.floor(Math.random() * roomsArray.length)];

    let weapon= weaponsArray [Math.floor(Math.random() * weaponsArray.length)];

    return {suspect, weapon, room};
}

    let mystery = pickMystery();

    console.log (mystery)

// ITERATION 3

function revealMystery(mystery) {

    return  `${mystery.suspect.firstName} ${mystery.suspect.lastName} killed Mr. Boddy using the ${mystery.weapon.name} in the ${mystery.room.name}!` ;

}

//${mystery.suspect.firstName} ${mystery.suspect.lastName} killed Mr. Boddy using the ${weapon.name} in the ${mystery.room.name}!`;