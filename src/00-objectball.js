function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": {
            number: 0,
            shoe: 16,
            points: 22,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Reggie Evans": {
            number: 30,
            shoe: 14,
            points: 12,
            rebounds: 12,
            assists: 12,
            steals: 3,
            blocks: 1,
            slamDunks: 1,
          },
          "Brook Lopez": {
            number: 11,
            shoe: 17,
            points: 17,
            rebounds: 19,
            assists: 10,
            steals: 3,
            blocks: 1,
            slamDunks: 15,
          },
          "Mason Plumlee": {
            number: 1,
            shoe: 19,
            points: 26,
            rebounds: 12,
            assists: 6,
            steals: 3,
            blocks: 8,
            slamDunks: 5,
          },
          "Jason Terry": {
            number: 31,
            shoe: 15,
            points: 19,
            rebounds: 2,
            assists: 2,
            steals: 4,
            blocks: 11,
            slamDunks: 1,
          },
        },
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": {
            number: 4,
            shoe: 18,
            points: 10,
            rebounds: 1,
            assists: 1,
            steals: 2,
            blocks: 7,
            slamDunks: 2,
          },
          "Bismak Biyombo": {
            number: 0,
            shoe: 16,
            points: 12,
            rebounds: 4,
            assists: 7,
            steals: 7,
            blocks: 15,
            slamDunks: 10,
          },
          "DeSagna Diop": {
            number: 2,
            shoe: 14,
            points: 24,
            rebounds: 12,
            assists: 12,
            steals: 4,
            blocks: 5,
            slamDunks: 5,
          },
          "Ben Gordon": {
            number: 8,
            shoe: 15,
            points: 33,
            rebounds: 3,
            assists: 2,
            steals: 1,
            blocks: 1,
            slamDunks: 0,
          },
          "Brendan Haywood": {
            number: 33,
            shoe: 15,
            points: 6,
            rebounds: 12,
            assists: 12,
            steals: 22,
            blocks: 5,
            slamDunks: 12,
          },
        },
      },
    };
  }
 
// console.log(gameObject());

const game = gameObject();
const players = playersObject();
const teams = Object.values(game);
console.log(teams);
//THE BETTER WAY!
function playersObject() {
  return Object.assign(homeTeam().players, awayTeam().players);
}
//Home Team object
function homeTeam() {
  return gameObject().home;
}
//Away team object
function awayTeam() {
  return gameObject().away;
}

function colors() {
  return Object.assign({}, homeTeam().colors, awayTeam().colors)
}

function numPointsScored(playerInput){
  return players()[playerInput].points;
}

function shoeSize(playerInput) {
  return players()[playerInput].shoe;
}

console.log(teamColors());
// console.log('Brooklyn Nets team colors are:', teamColors('Brooklyn Nets'));
console.log('Alan Anderson\'s shoes size is:', shoeSize('Alan Anderson'));
console.log('Alan Anderson points:', numPointsScored('Alan Anderson'));
console.log('All players in the game:', players());
console.log('The away team is:', awayTeam());
console.log('The home team is:', homeTeam()) ;

// function numPointsScored(playerInput){
//   //we can move the below lines into it's own function
//   // const game = gameObject();
//   // const homePlayers = game.home.players;
//   // const awayPlayers = game.away.players;

//   // const players = Object.assign({}, homePlayers, awayPlayers);
//   // const players = {...homePlayers, ...awayPlayers}; // this is the same thing
//   //above code moved into it's own function to complie a separate object
//   for (const playerName in players()) {
//     if (playerName === playerInput) {
//       return players()[playerName].points;
//     }
//   }
// }






// console.log('Jason number of points:', numPointsScored('Jason Terry'));
// console.log('Mason number of points:',numPointsScored('Mason Plumlee'))


// function numPointsScored(playerInput) {
//     const game = gameObject();
//     for (const gameKey in game) { // iterate through the game keys (home, away)
//         const teamObject = game[gameKey]; 
//         // debugger
//         for (const teamKey in teamObject) { //iterate through the team keys (teamName, colors, players)
//             const playerObject = teamObject.players;
//             // debugger
//             
//               }
//             }
//         }
//     }
// }



// -----------------------------------
// Too verbose
// -----------------------------------

// function numPointsScored(playerInput) {
//     const game = gameObject();
//     for (const gameKey in game) { // iterate through the game keys (home, away)
//         const teamObject = game[gameKey]; 
//         // debugger
//         for (const teamKey in teamObject) { //iterate through the team keys (teamName, colors, players)
//             const playerObject = teamObject.players;
//             // debugger
//             for (const playerKey in playerObject) { //iterate through the players in the player object (alan, etc. etc.)
//               // debugger
//               if (playerKey === playerInput){ //conditional mathcing the argument with individual player objects
//                 const points = playerObject[playerKey].points; // assinging points to the matching key using dot and bracket notation
//                 // brakcets for [playerKey] because it is not literally called that, dot notation can be used for points
//                 // as that is the literal key name
//                 return points;
//               }
//             }
//         }
//     }
// }

// -----------------------------------
// too verbose
// -----------------------------------


// function shoeSize(playerInput) {
//   const game = gameObject();
//   for (const gameKey in game) { // iterate through the game keys (home, away)
//       const teamObject = game[gameKey]; 
//       // debugger
//       for (const teamKey in teamObject) { //iterate through the team keys (teamName, colors, players)
//           const playerObject = teamObject.players;
//           // debugger
//           for (const playerKey in playerObject) { //iterate through the players in the player object (alan, etc. etc.)
//             // debugger
//             if (playerKey === playerInput){ //conditional mathcing the argument with individual player objects
//               const playerShoe = playerObject[playerKey].shoe; // assinging points to the matching key using dot and bracket notation
//               // brakcets for [playerKey] because it is not literally called that, dot notation can be used for points
//               // as that is the literal key name
//               // debugger
//               return playerShoe;
//             }
//           }
//       }
//   }
// }

// console.log(shoeSize('Jason Terry'))

// function teamColors(teamName) {
//   const game = gameObject();
//   for (const gameKey in game) { // iterate through the game keys (home, away)
//       const teamObject = game[gameKey];
//       for (const name in teamObject){
//         debugger

//         if (name === teamName) {
//           return game[teamObject][colors];
//         }
//       } 
//     }
// }
// console.log(teamColors("Brooklyn Nets"))

// // function goodPractices() {
//     const game = gameObject();
//     for (const gameKey in game) {
//       // are you ABSOLUTELY SURE what 'gameKey' is?
//       // use the debugger to find out!
//       debugger
//       const teamObj = game[gameKey]
//       for (const teamKey in teamObj) {
//         // are you ABSOLUTELY SURE what 'teamKey' is?
//         // use debugger to find out!
//         debugger
  
//         // what is 'data' at each loop through out this block?
//         // when will the following line of code work and when will it break?
//         const data = teamObj.player
//         for (const key in data) {
//           debugger;
//         }
//       }
//     }
//   }
  
// console.log(goodPractices())