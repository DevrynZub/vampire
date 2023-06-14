const locations = [
  '🎭', '🎪', '🎢', '🏟️', '🏨',
  '🏤', '🏥', '🏭', '🏢', '🏣',
  '🏰', '🏬', '🏥', '🏦', '🏪'
]

const people = [
  {
    name: 'Jimbo',
    picture: '🤵',
    isHunter: false,
    location: ''
  },
  {
    name: 'Sammy',
    picture: '🙆‍♀️',
    isHunter: false,
    location: ''
  },
  {
    name: 'Michael',
    picture: '👷',
    isHunter: false,
    location: ''
  },
  {
    name: 'Robert',
    picture: '👷',
    isHunter: false,
    location: ''
  },
  {
    name: 'Terry',
    picture: '🤴',
    isHunter: false,
    location: '',
  },
  {
    name: 'Bill',
    picture: '🕵️',
    isHunter: false,
    location: '',
  },
  {
    name: 'Marie',
    picture: '👩‍🍳',
    isHunter: false,
    location: '',
  },
  {
    name: 'Mykeal',
    picture: '💂',
    isHunter: false,
    location: '',
  },
  {
    name: 'Phil',
    picture: '🧜‍♂️',
    isHunter: false,
    location: '',
  },
  {
    name: 'Wilson',
    picture: '🏐',
    isHunter: false,
    location: '',
  },
  {
    name: 'Wendy',
    picture: '👩‍⚕️',
    isHunter: false,
    location: '',
  },
  {
    name: 'Jeremy',
    picture: '🦹',
    isHunter: false,
    location: '',
  },
  {
    name: 'Mary',
    picture: '👩‍⚖️',
    isHunter: false,
    location: '',
  }
]

let notHunter = ''



// Section: Functions
// function makeAVampire() {
//   let randomNumber = Math.floor(Math.random() * people.length)
//   console.log('random number', randomNumber);
//   let randomPerson = people[randomNumber]
//   randomPeople.isVampire = true
//   console.log('random people ', randomPeople)
// } Not sure why I did this....

function makeAHunter() {
  let randomNumber = Math.floor(Math.random() * people.length)
  console.log('random number', randomNumber);
  let randomPeople = people[randomNumber]
  randomPeople.isHunter = true
  console.log('random people ', randomPeople)
}
makeAHunter()

function findHunter() {
  let foundHunter = people.find(people => people.isHunter == true)
  console.log(foundHunter);

  return foundHunter
}

function assignPeopleToLocations() {
  people.forEach(person => {
    let randomNumber = Math.floor(Math.random() * locations.length)
    person.location = locations[randomNumber]
    console.log(person)
  })
}

function isPersonABat() {
  let notHunter = people.filter(person => !person.isHunter)
  if (notHunter.every(person => person.picture == '🦇')) {
    return true
  } else {
    return false
  }
}

function drawPeople() {
  locations.forEach(location => {
    let placedPeopleAtLocation = people.filter(person => person.location == location)
    let peopleEmoji = placedPeopleAtLocation.map(person => person.picture)
    document.getElementById(location).innerText = peopleEmoji
  })
}

function attackLocation() {

}



// function pickALocation() {
//   let randomNumber = Math.floor(Math.random() * locations.length)
//   console.log('random number', randomNumber)
//   let randomLocation = locations[randomNumber]
//   console.log('random location', randomLocation)
//   return randomLocation
// }




// function drawPeople() {
//   let peopleString = ""
//   peopleArray.forEach(person => {
//     peopleString += person.picture
//   })
//   console.log(peopleString);

//   const vampireVictimsElement = document.getElementById('vampireVictims');

//   vampireVictimsElement.innerText = peopleString;
// }






// Section: running functions
assignPeopleToLocations()
drawPeople()